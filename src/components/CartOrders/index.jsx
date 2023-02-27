import { Link } from 'react-router-dom';
import { CartContextApp } from '../../CartContext';
import { CartCheck } from '../CartCheck';
import { ItemCollectionII } from '../ItemCollectionII';

export const CartOrders = () => {
    const {cartList} = CartContextApp();

    return (
        <CartCheck children={<ItemCollectionII cartList={cartList}/>}/>
    )
}