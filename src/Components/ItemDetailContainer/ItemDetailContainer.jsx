import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const db = getFirestore()

        const queryDoc = doc(db, 'products', id)

        getDoc(queryDoc).then((res) =>
            setItem({ id: res.id, ...res.data() })
        )
    }, [id])


    return (
        <div className="itemDetailContainer">
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer
