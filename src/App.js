import './App.css'
import Header from './components/Header/Header'
import BookList from './components/BookList/BookList'
import {useState} from 'react'

function App() {
  const [BooksList, setBooksList] = useState(null)

  const [value, setValue] = useState('')

  const onChange = (evt) => {
    setValue(evt.target.value)

  }

  const searchHandler = (evt) => {
    evt.preventDefault()

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&maxResults=30`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data.items)
        setBooksList(data.items)
      })
  }

  return (
    <div className="App">
      <Header
        search={searchHandler}
        value={value}
        onChange={onChange}
      />
      <BookList
        BooksList={BooksList}
      />
    </div>
  );
}

export default App;
