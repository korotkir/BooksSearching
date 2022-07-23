import React from 'react'
import './Card.css'

const Card = props => {
  return(
    <div
      className="Card"
      onClick={props.onClick}
    >
      <span className="CardCategory"><b>{props.category}</b></span>
      <img src={props.cover} className="CardCover"/>
      <div className="CardBody">
        <h3 className="CardTitle">
          {props.title}
        </h3>
        <h5 className="CardAuthor">{props.authors}</h5>
      </div>
        <h5 className="CardYear">{props.year}</h5>
    </div>
  )
}

export default Card
