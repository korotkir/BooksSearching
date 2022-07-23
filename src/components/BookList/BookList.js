import Card from './Card/Card'
import './BookList.css'
import { authorsCalibration, cropTitle, cropYear } from '../../utility/utility'
import notFound from './img/not_found.svg'
import LoadMore from '../LoadMore/LoadMore'
import { useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'

const BookList = () => {

  const data = useSelector(state => state.bookList.booksList)

  const navigate = useNavigate()

  const cardHandler = (book) => {
    return navigate(`/id/${book.id}`)
  }

  return (
        <div className="BookList">{
          data.map((el, i) => {
              const category = el.volumeInfo.categories || 'Category not specified'
              const cover = el.volumeInfo.imageLinks ? el.volumeInfo.imageLinks.thumbnail : notFound
              const title = cropTitle(el.volumeInfo.title)
              const authors = el.volumeInfo.authors ? authorsCalibration(el.volumeInfo.authors) : 'Author not specified'
              const year = cropYear(el.volumeInfo.publishedDate)
              return (
                  <Card
                    key={i}
                    category={category}
                    cover={cover}
                    title={title}
                    authors={authors}
                    year={year}
                    onClick={() => cardHandler(el)}
                  />
              )
            }
          )}
        <LoadMore />
        </div>
  )
}

export default BookList
