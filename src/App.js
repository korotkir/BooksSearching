import Header from './components/Header/Header'
import BookList from './components/BookList/BookList'
import {useEffect, useState} from 'react'
import LoadMore from './components/LoadMore/LoadMore'
import {logDOM} from '@testing-library/react'

function App() {

  const token = process.env.REACT_APP_GOOGLE_TOKEN

  const [booksList, setBooksList] = useState(null)

  const [value, setValue] = useState('')

  const [sortingBy, setSortingBy] = useState('relevance')
  const [category, setCategory] = useState('')

  let [countItems, setCountItems] = useState(0)
  let [totalItems, setTotalItems] = useState(undefined)
  const maxResults = 30

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
        return response.json()
      })
      .then((data) => {
        setBooksList([...booksList, ...data.items])
        setCountItems(countItems + maxResults)
      })
      .catch(error => console.log(error))
  }

  const clear = () => {
    setBooksList(null)
    setCountItems(0)
    setTotalItems(undefined)
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
        totalItems={totalItems}
        countItems={countItems}
      />
    </div>
  );
}

export default App;
