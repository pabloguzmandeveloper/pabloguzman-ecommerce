import { CartCheck } from '../CartCheck';
import { ItemCollectionII } from '../ItemCollectionII';

export const CartOrders = () => {
    return (
        <CartCheck children={<ItemCollectionII />}/>
    )
}