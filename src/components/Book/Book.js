import './Book.css'
import {useNavigate, useParams} from 'react-router-dom'
import {useEffect} from 'react'
import Loading from '../../UI/Loading/Loading'
import {useDispatch, useSelector} from 'react-redux'
import {fetchBook} from '../../store/actions/BookActions'

const Book = () => {
  const { bookId } = useParams() // ID из урла

  const dispatch = useDispatch()
  const loader = useSelector(state => state.book.loader)
  const book = useSelector(state => state.book.book)

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchBook(bookId))
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
