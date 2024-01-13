import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ item }) => {
    return (
        <Link to={'/item/' + item.id} className='item'>
            <div className="item-card-image">
                <img src={item.img} alt={item.title} />
            </div>
            <div className="item-card-info">
                <p className='item-name'>{item.title}</p>
                <p className='item-price'>${item.price}</p>
            </div>
        </Link>
    )
}

export default Item
