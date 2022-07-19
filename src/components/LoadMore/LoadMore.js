import './LoadMore.css'

const LoadMore = props => {
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
