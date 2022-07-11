import Cards from './Cards/Cards'
import './BookList.css'
import {useEffect, useState} from 'react'
import {logDOM} from '@testing-library/react'

const BookList = () => {
  const [BooksList, setBooksList] = useState(null)


  useEffect(() => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=grokking')
      .then((response) => {
        return response.json()
      })
      .then((data) => setBooksList(data))
  }, [])

  return(
    <div className="BookList">
      {BooksList.map((el, i, arr) => {
          return <Cards />
        }
      )}
    </div>
  )
}

export default BookList
