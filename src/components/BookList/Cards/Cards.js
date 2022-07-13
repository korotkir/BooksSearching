import React from 'react'
import './Cards.css'


const Cards = props => {
  return(
    <div className="Cards">
      <span className="CardsCategory"><b>{props.category}</b></span>
      <img src={props.cover} className="CardsCover"/>
      <div className="CardsBody">
        <h3 className="CardsTitle">{props.title}</h3>
        <h5 className="CardsAuthor">{props.authors}</h5>
      </div>

        <h5 className="CardsYear">{props.year}</h5>

    </div>
  )
}

export default Cards
