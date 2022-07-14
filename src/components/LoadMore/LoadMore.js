import './LoadMore.css'

const LoadMore = props => {
  return (
    <div className="LoadMore">
      <button onClick={props.loadMoreHandler}>Load more</button>
    </div>
  )
}

export default LoadMore
