import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';
import { CartContextApp } from '../../CartContext'; //esta función hos ayuda a traer cualquier parte o variable de la función Provider del context 

const CartWidget = () => {
    const { cartList , iconCart } = CartContextApp();//podemos traer de CartContext todo lo que necesitemos de él para hacer las referencias, 
    return (
        <Link to="/cartview" className="cart-widget">
            <FontAwesomeIcon icon={faCartShopping} size="2x" color="green"  />
            <div className="qty-display">
                {cartList.length===0?0:iconCart()}
            </div>
        </Link>
    );
};

export default CartWidget;