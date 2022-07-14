import Cards from './Cards/Cards'
import './BookList.css'
import {authorsCalibration, cropTitle, cropYear} from '../../utility/utility'
import notFound from './img/not_found.svg'
import EmptyList from '../Animations/EmptyList/EmptyList'
import LoadMore from '../LoadMore/LoadMore'
import Warning from '../Animations/Warning/Warning'
import {useEffect} from 'react'


const BookList = (props) => {
  const data = props.booksList

  return (
    <>
      {data && props.totalItems
        ? <div className="BookList">{
          data.map((el, i) => {
              //const category = el.volumeInfo.categories || 'Category not specified'
              const cover = el.volumeInfo.imageLinks ? el.volumeInfo.imageLinks.thumbnail : notFound
              const title = cropTitle(el.volumeInfo.title)
              const authors = el.volumeInfo.authors ? authorsCalibration(el.volumeInfo.authors) : 'Author not specified'
              const year = cropYear(el.volumeInfo.publishedDate)
              return (

                <Cards
                  key={i}
                  //category={category}
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
          />
        </div>

        : props.totalItems === 0 ? <Warning/> : <EmptyList/>}
    </>
  )
}

export default BookList
