import { CartCheck } from '../CartCheck';
import { ItemCollectionII } from '../ItemCollectionII';
import { CartContextApp } from '../../CartContext';

export const CartOrders = () => {
    const {deletItem,removeList,cartList} = CartContextApp();

    return (
        <CartCheck children={<ItemCollectionII />}/>
    )
}