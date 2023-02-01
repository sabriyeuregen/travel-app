import React from 'react'

const TourCard = (props) => {
  return (
    <div className='tourcard'>
      <div className='tourcard__img'>{props.image}</div>
      <div className='tourcard__name'>{props.name}</div>
      <div className='tourcard__price'>{props.price}</div>
    </div>
  )
}

export default TourCard;