import { FaShoppingCart } from "react-icons/fa";
import { useCartContext } from "../Context/CartContext";

const CartWidget = () => {
    const { totalProducts, cart } = useCartContext()

    return (
        <div className="cartWidget-container">
            <button className="cartWidget-button">
                <FaShoppingCart />
                <span className="cartWidget-number">{totalProducts() || cart}</span>
            </button>
        </div>
    )
}

export default CartWidget
