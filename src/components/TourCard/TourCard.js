import React from 'react'
import "./TourCard.scss";
const TourCard = (props) => {
  return (
    <div className='tourcard'>
      <div className='tourcard__img'>{props.image}</div>
      <div className='tourcard__detail'>
      <div className='tourcard__detail-name'>{props.name}</div>
      <div className='tourcard__detail-price'>{props.price}</div>
      </div>
    </div>
  )
}

export default TourCard;