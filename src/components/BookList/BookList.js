import Cards from './Cards/Cards'
import './BookList.css'
import {authorsCalibration, cropTitle, cropYear} from '../../utility/utility'
import notFound from './img/not_found.svg'
import EmptyList from '../EmptyList/EmptyList'


const BookList = (props) => {
  return (
    <>
      {props.BooksList
        ? <div className="BookList">{
          props.BooksList.map((el, i) => {
              const category = el.volumeInfo.categories || 'Category not specified'
              const cover = el.volumeInfo.imageLinks ? el.volumeInfo.imageLinks.thumbnail : notFound
              const title = cropTitle(el.volumeInfo.title)
              const authors = el.volumeInfo.authors ? authorsCalibration(el.volumeInfo.authors) : 'Author not specified'
              const year = cropYear(el.volumeInfo.publishedDate)
              return (

                <Cards
                  key={i}
                  category={category}
                  cover={cover}
                  title={title}
                  authors={authors}
                  year={year}
                />
              )
            }
          )}</div>
        : <EmptyList/>}
    </>
  )
}

export default BookList
