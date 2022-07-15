import './LoadMore.css'
import {logDOM} from '@testing-library/react'

const LoadMore = props => {
  console.log('LoadMore')
  return (
    <div className="LoadMore">
      {
        props.successLoad
          ? <span>All books uploaded</span>
          : <button onClick={props.loadMoreHandler}>
            Load more
          </button>
      }
    </div>
  )
}

export default LoadMore
