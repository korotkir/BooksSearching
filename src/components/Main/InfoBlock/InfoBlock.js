import './InfoBlock.css'
import {useSelector} from 'react-redux'

const InfoBlock = () => {
  const totalItems = useSelector(state => state.bookList.totalItems)

  return (
    <div className="infoBlock">
      <h1>{totalItems} results</h1>
    </div>
  )
}

export default InfoBlock
