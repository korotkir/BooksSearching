import Card from './Cards/Card'
import './BookList.css'
import {authorsCalibration, cropTitle, cropYear} from '../../utility/utility'
import notFound from './img/not_found.svg'
import LoadMore from '../LoadMore/LoadMore'
import {useState} from 'react'
import {NavLink, useNavigate} from 'react-router-dom'

const BookList = (props) => {
  const data = props.booksList

  const navigate = useNavigate()

  const cardHandler = (book) => {
    console.log('book id', book.id)
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
