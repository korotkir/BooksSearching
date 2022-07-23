import './LoadMore.css'
import {useDispatch, useSelector} from 'react-redux'
import {loadMoreHandler} from '../../store/actions/BookListActions'

const LoadMore = props => {
  const dispatch = useDispatch()
  const successLoad = useSelector(state => state.bookList.successLoad)

  return (
    <div className="LoadMore">
      {
        successLoad
          ? <span>All books uploaded</span>
          : <button onClick={evt => dispatch(loadMoreHandler(evt))}>
            Load more
          </button>
      }
    </div>
  )
}

export default LoadMore
