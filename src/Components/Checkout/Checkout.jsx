import React from 'react'
import { useState } from 'react'
import { useCartContext } from '../Context/CartContext'
import { getFirestore, collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore'

const Checkout = () => {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')
    const [repeatEmail, setRepeatEmail] = useState('')
    const [error, setError] = useState('')
    const [orderId, setOrderId] = useState('')
    const [mensaje, setMensaje] = useState('')

    const { cart, totalPrice, removeProduct } = useCartContext()

    const formulario = (event) => {
        event.preventDefault()


        if (!nombre || !apellido || !telefono || !email || !repeatEmail) {
            setError('Por favor complete todos los campos requeridos')
            return
        }

        if (email !== repeatEmail) {
            setError('Los emails no coinciden')
            return
        }


        const total = totalPrice()
        const order = {
            items: cart.map((producto) => ({
                id: producto.id,
                nombre: producto.title,
                cantidad: producto.quantity,
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email,
        }
        Promise.all(
            order.items.map(async (productOrder) => {
                const db = getFirestore()
                const productRef = doc(db, 'products', productOrder.id)

                const productDoc = await getDoc(productRef)
                const stockActual = productDoc.data().stock

                await updateDoc(productRef, {
                    stock: stockActual - productOrder.cantidad,
                })
            })
        )
            .then(() => {
                const db = getFirestore()
                addDoc(collection(db, 'orders'), order)
                    .then((docRef) => {
                        setOrderId(docRef.id)
                        removeProduct()
                    })
                    .catch((error) => {
                        console.log('No se pudo crear la orden', error)
                        setError('Error en la orden')
                    })
            })
            .catch((error) => {
                console.log('No se puede actualizar el stock', error)
                setError('No se actualizo el stock')
            })

        setNombre('')
        setApellido('')
        setTelefono('')
        setEmail('')
        setRepeatEmail('')
        setMensaje('')

    }
    return (
        <div className='checkout'>
            <h2> Formulario de confirmacion de compra </h2>
            <form onSubmit={formulario}>

                {cart.map((producto) => (
                    <div key={producto.id}>
                        <p>{''} {producto.nombre} {producto.cantidad}</p>
                        <p>{producto.precio}</p>
                    </div>
                ))}

                <div className='checkoutName'>
                    <label className="checkoutLab">Nombre</label>
                    <input className="checkoutInput" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div className='checkoutSurname'>
                    <label className="checkoutLab">Apellido</label>
                    <input className="checkoutInput" type="text" value={apellido} onChange={(e) => setApellido(e.target.value)}
                    />
                </div>

                <div className='checkoutPhone'>
                    <label className="checkoutLab">Telefono</label>
                    <input className="checkoutInput" type="number" value={telefono} onChange={(e) => setTelefono(e.target.value)}
                    />
                </div>

                <div className='checkoutEmail'>
                    <label className="checkoutLab">Email</label>
                    <input className="checkoutInput" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='checkoutRepeatEmail'>
                    <label className="checkoutLab">Confirmar email</label>
                    <input className="checkoutInput" type="email" value={repeatEmail} onChange={(e) => setRepeatEmail(e.target.value)}
                    />
                </div>

                {error && <p>{error}</p>}
                {orderId && (
                    <div className='checkoutOrder'>
                        <p>¡Gracias por confiar en nosotros!</p>
                        <p>Tu numero de seguimiento es:</p>
                        <p>{''} {orderId} {''}</p>
                    </div>
                )}

                <div className='checkoutSubmit'>
                    <button type="submit"> Confirmar compra </button>
                </div>
            </form>
        </div>
    )
}

export default Checkout
