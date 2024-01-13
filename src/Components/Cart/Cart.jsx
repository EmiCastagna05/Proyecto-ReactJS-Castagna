import React from 'react'
import { useCartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart/ItemCart'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

const Cart = () => {
    const { cart, totalPrice } = useCartContext()

    const handleClick = () => {
        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection, order).then(({ id }) => console.log(id))
    }

    if (cart.length === 0) {
        return (
            <div className='cartEmpty'>
                <p>El carrito esta vacio </p>
                <Link to='/' className='cartEmptyLink'>Ir a la tienda</Link>
            </div>
        )
    }

    return (
        <>
            <div className="cartBuy">
                <p>Total a pagar: $ {totalPrice()}</p>

                <Link to="/checkout">
                    {' '}
                    <button className="btnTotal" onClick={handleClick}>Finalizar Compra</button>
                </Link>
            </div>
            {cart.map((product) => (
                <ItemCart key={product.id} product={product} />
            ))}

        </>
    );
}

export default Cart
