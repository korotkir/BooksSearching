import Lottie from 'react-lottie-player'
import search from './search_animation.json'
import './EmptyList.css'

const EmptyList = () => (
  <div className="EmptyList">
    <Lottie
      loop={false}
      animationData={search}
      play
      style={{ width: 300, height: 300 }}
    />
  </div>
)

export default EmptyList


