import Lottie from 'react-lottie-player'
import search from './search_animation.json'

const EmptyList = () => (
  <Lottie
    loop={false}
    animationData={search}
    play
    style={{ width: 300, height: 300 }}
  />
)

export default EmptyList


