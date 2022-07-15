import Cards from './Cards/Cards'
import './BookList.css'
import {authorsCalibration, cropTitle, cropYear} from '../../utility/utility'
import notFound from './img/not_found.svg'
import LoadMore from '../LoadMore/LoadMore'

const BookList = (props) => {
  const data = props.booksList

  return (
        <div className="BookList">{
          data.map((el, i) => {
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
          )}
        <LoadMore
          loadMoreHandler={props.loadMoreHandler}
          totalItems={props.totalItems}
          countItems={props.countItems}
          loading={props.loading}
          successLoad={props.successLoad}
        />
        </div>
  )
}

export default BookList
