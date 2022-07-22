import './Book.css'
import cover from './BookTest.png'
import {useNavigate, useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Loading from '../../UI/Loading/Loading'

const Book = props => {
  const { bookId } = useParams() // ID из урла
  const [book, setBook] = useState({})

  const [loader, setLoader] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    setLoader(true)
    fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data.volumeInfo)
        const cover = Object.values(data.volumeInfo.imageLinks)[3] ? Object.values(data.volumeInfo.imageLinks)[3] : Object.values(data.volumeInfo.imageLinks)[0]
        const category = data.volumeInfo.categories ? data.volumeInfo.categories[0] : 'n/a'
        const title = data.volumeInfo.title
        const author = Array.isArray(data.volumeInfo.authors) ? data.volumeInfo.authors.join(', ') : data.volumeInfo.authors || 'Author unknown'
        const descHTML = data.volumeInfo.description ? data.volumeInfo.description : 'Description is not found'
        setBook({ cover, category, title, author, descHTML })

        setTimeout(() => {
          setLoader(false)
        }, 1000)
      })
  }, [])


  const desc = {__html: book.descHTML}

  return (
    <>
      {
        loader ? <Loading /> :
          <div className="Book">
            <div className="BookCover">
              <img src={book.cover} alt="Cover"/>
            </div>
            <div className="BookInfo">
              <span className="BookCategory">{book.category}</span>
              <h1 className="BookTitle">{book.title}</h1>
              <div className="BookAuthor">{book.author}</div>
              <p className="BookDesc" dangerouslySetInnerHTML={desc}></p>
            </div>
          </div>

      }
    </>
  )
}

export default Book
