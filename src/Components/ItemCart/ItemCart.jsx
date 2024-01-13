import React from 'react'
import { useCartContext } from '../Context/CartContext'

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext()
    return (
        <div className="itemCart">
            <div className="itemCartImg">
                <img src={product.img} alt={product.title} />
            </div>
            <div className='itemCartInfo'>
                <div className="itemCartProduct">
                    <p>Producto</p>
                    <p>{product.title}</p>
                </div>
                <div className="itemCartQuantity">
                    <p>Cantidad</p>
                    <p>{product.quantity}</p>
                </div>

                <div className="itemCardPrice">
                    <p>Precio unitario</p>
                    <p>$ {product.price}</p>
                </div>

                <div className="itemCartSubtotal">
                    <p>Subtotal</p>
                    <p>${product.quantity * product.price}</p>
                </div>

                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart
