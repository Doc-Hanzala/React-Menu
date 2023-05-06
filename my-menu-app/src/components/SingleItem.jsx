import React from 'react'

const SingleItem = ({title,category,price,img,desc}) => {
  return (
    <div className="item">
        <img src={img} alt={title} />
        <header>
            <h4>{title}</h4>
            <p className='item-price' >${price}</p>
        </header>
        <p className="info">{desc}</p>
    </div>
  )
}

export default SingleItem