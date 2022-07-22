import Lottie from 'react-lottie-player'
import warning from './warning_animation.json'
import './Warning.css'

const EmptyList = () => (
  <div className="Warning">
    <Lottie
      loop={false}
      animationData={warning}
      play
      style={{ width: 300, height: 300 }}
    />
    <h1>Sorry, nothing found :(</h1>
  </div>
)

export default EmptyList
