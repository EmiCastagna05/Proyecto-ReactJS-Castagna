import React from 'react'
import Item from '../Item/Item'

const ItemList = ({ item }) => {
    return (
        item.map(item =>
            <div key={item.id} className='itemList'>
                <Item item={item} />
            </div>
        )
    )
}

export default ItemList
