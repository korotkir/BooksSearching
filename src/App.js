import Header from './components/Header/Header'
import BookList from './components/BookList/BookList'
import {useState} from 'react'
import LoadMore from './components/LoadMore/LoadMore'

function App() {

  console.log('TOKEN', process.env.REACT_APP_GOOGLE_TOKEN)
  const [BooksList, setBooksList] = useState(null)

  const [value, setValue] = useState('')

  const [sortingBy, setSortingBy] = useState('relevance')
  const [category, setCategory] = useState('')

  const inputChange = (evt) => {
    setValue(evt.target.value)
  }

  const searchHandler = (evt) => {
    evt.preventDefault()

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}+subject:${category}&maxResults=30&orderBy=${sortingBy}&key=${process.env.REACT_APP_GOOGLE_TOKEN}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data.items)
        setBooksList(data.items)
      })
  }

  const sortingByChange = (evt) => {
    setSortingBy(evt.target.value)
  }

  const categoryChange = (evt) => {
    setCategory(evt.target.value)
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
        BooksList={BooksList}
      />
      <LoadMore />
    </div>
  );
}

export default App;
