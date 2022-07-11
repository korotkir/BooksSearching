import React from 'react'
import './Cards.css'
import testCover from './img/test.png'

const Cards = props => {
  return(
    <div className="Cards">
      <span className="CardsCategory"><b>Computers</b></span>
      <img src={testCover} className="CardsCover"/>
      <h2 className="CardsTitle">Grokking the alghoritms</h2>
      <h5 className="CardsAuthor">Adythia Bhargava</h5>
    </div>
  )
}

export default Cards
