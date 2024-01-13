import React, { useState } from 'react'
import { useCartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ item }) => {
    const [goToCart, setGoToCart] = useState(false);
    const { addProd } = useCartContext()
    const onAdd = (quantity) => {
        setGoToCart(true);
        addProd(item, quantity);
    }

    return (
        <div className="itemDetail">
            <div className="itemDetail-image">
                <img src={item.img} alt={item.title} />
            </div>
            <div className="itemDetail-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p className='itemDetail-price'>$ {item.price}</p>
                <p className='itemDetail-stock'>Stock: {item.stock}</p>

                {goToCart ? <Link to='/cart' className='itemDetailGoToCart'>Terminar compra</Link> : <ItemCount initial={1} stock={30} onAdd={onAdd} />}
            </div>
        </div>
    )
}

export default ItemDetail
