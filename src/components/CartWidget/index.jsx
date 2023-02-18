import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';

const CartWidget = () => {
    return (
        <div className="cart-widget">
        <FontAwesomeIcon icon={faCartShopping} size="2x" color="green"  />
        <div className="qty-display">5</div>
        </div>
    );
};

export default CartWidget;