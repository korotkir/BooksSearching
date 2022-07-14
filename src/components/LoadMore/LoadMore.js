import './LoadMore.css'

const LoadMore = props => {
  return (
    <div className="LoadMore">
      <button onClick={props.loadMoreHandler}>Load more ({props.countItems} of {props.totalItems})</button>
    </div>
  )
}

export default LoadMore
