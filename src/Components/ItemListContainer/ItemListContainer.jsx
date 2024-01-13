import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { getFirestore, collection, getDocs, where, query } from 'firebase/firestore'

const ItemListContainer = () => {

    const [item, setItem] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const db = getFirestore()

        const queryCollection = collection(db, 'products')

        if (id) {
            const queryFilter = query(queryCollection, where('categoryId', '==', id))
            getDocs(queryFilter).then((res) =>
                setItem(res.docs.map((p) => ({ id: p.id, ...p.data() })))
            )
        } else {
            getDocs(queryCollection).then((res) =>
                setItem(res.docs.map((p) => ({ id: p.id, ...p.data() })))
            )
        }
    }, [id])


    return (
        <div className='itemListContainer'>
            <ItemList item={item} />
        </div>
    )
}

export default ItemListContainer
