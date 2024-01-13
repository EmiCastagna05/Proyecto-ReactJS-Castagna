import { useEffect, useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(parseInt(initial))

    const restar = () => {
        setCount(count - 1)
    }

    const sumar = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        setCount(parseInt(initial))
    }, [initial])

    return (
        <div className="itemCount">
            <div className="itemCountChange">
                <button disabled={count <= 1} onClick={restar}> - </button>
                <span>{count}</span>
                <button disabled={count >= stock} onClick={sumar}> + </button>
            </div>

            <div className="itemCountAdd">
                <button disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount