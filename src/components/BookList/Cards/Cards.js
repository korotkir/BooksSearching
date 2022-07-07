import React from 'react'
import './Cards.css'
import testCover from './img/test.png'

const Cards = props => {
  return(
    <div className="Cards">
      <img src={testCover} className="CardsCover"/>
      <span className="CardsCategory">Computers</span>
      <h3 className="CardsTitle">Grokking the alghoritms</h3>
      <span className="CardsAuthor">Adythia Bhargava</span>
    </div>
  )
}

export default Cards
