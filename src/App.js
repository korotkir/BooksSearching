import Header from './components/Header/Header'
import BookList from './components/BookList/BookList'
import {useState} from 'react'
import LoadMore from './components/LoadMore/LoadMore'

function App() {

  const token = process.env.REACT_APP_GOOGLE_TOKEN

  const [booksList, setBooksList] = useState(null)

  const [value, setValue] = useState('')

  const [sortingBy, setSortingBy] = useState('relevance')
  const [category, setCategory] = useState('')

  const [countItems, setCountItems] = useState(0)
  const [maxResults, setMaxResults] = useState(30)

  const responseLink = `https://www.googleapis.com/books/v1/volumes?q=${value}+subject:${category}&startIndex=${countItems}&maxResults=${maxResults}&orderBy=${sortingBy}&key=${token}`

  const inputChange = (evt) => {
    setValue(evt.target.value)
  }

  const searchHandler = (evt) => {
    evt.preventDefault()

    fetch(responseLink)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data.items)
        setBooksList(data.items)
        setCountItems(countItems + maxResults)
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

    fetch(responseLink)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setBooksList([...booksList, ...data.items])
        setCountItems(countItems + maxResults)
      })
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
      <BookList
        booksList={booksList}
        loadMoreHandler={loadMoreHandler}
      />
    </div>
  );
}

export default App;
