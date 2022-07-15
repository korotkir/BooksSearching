import './App.css'
import Header from './components/Header/Header'
import {useState} from 'react'
import Main from './components/Main/Main'

function App() {
  console.log('App')
  // Google Books API Token
  const token = process.env.REACT_APP_GOOGLE_TOKEN

  // Main array for books items
  const [booksList, setBooksList] = useState(null)

  // Search input value
  const [value, setValue] = useState('')

  // State for Sorting & Category
  const [sortingBy, setSortingBy] = useState('relevance')
  const [category, setCategory] = useState('')

  // Loaded items right now
  let [countItems, setCountItems] = useState(0)

  // Total items
  const maxResults = 30
  let [totalItems, setTotalItems] = useState(undefined)

  // If true - showed loader
  let [loading, setLoading] = useState(false)

  // If items empty - true
  let [successLoad, setSuccessLoad] = useState(false)

  const inputChange = (evt) => {
    setValue(evt.target.value)
  }

  const searchHandler = (evt) => {
    clear()
    evt.preventDefault()

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}+subject:${category}&startIndex=0&maxResults=${maxResults}&orderBy=${sortingBy}&key=${token}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        setBooksList(data.items)
        setCountItems(30)
        setTotalItems(data.totalItems)
      })
  }

  const sortingByChange = (evt) => {
    setSortingBy(evt.target.value)
  }

  const categoryChange = (evt) => {
    setCategory(evt.target.value)
  }

  const loadMoreHandler = (evt) => {
    evt.preventDefault()

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}+subject:${category}&startIndex=${countItems}&maxResults=${maxResults}&orderBy=${sortingBy}&key=${token}`)
      .then((response) => {
        setLoading(true)
        return response.json()
      })
      .then((data) => {
        if (!data.items) {
          setSuccessLoad(true)
        }
        setBooksList([...booksList, ...data.items])
        setCountItems(countItems + maxResults)
        setLoading(false)

      })
      .catch(error => console.log(error))
  }

  const clear = () => {
    setBooksList(null)
    setCountItems(0)
    setTotalItems(undefined)
    setSuccessLoad(false)
  }

  return (
    <div className="App">
      <Header
        search={searchHandler}
        value={value}
        inputChange={inputChange}
        sortingBy={sortingBy}
        sortingByChange={sortingByChange}
        category={category}
        categoryChange={categoryChange}
      />
      {/*<Book />*/}
      <Main
        booksList={booksList}
        loadMoreHandler={loadMoreHandler}
        totalItems={totalItems}
        countItems={countItems}
        loading={loading}
        successLoad={successLoad}
      />
    </div>
  )
}

export default App;
