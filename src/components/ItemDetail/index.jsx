import { ItemCount } from "../ItemCount"

// HIJO 1-4
export const ItemDetail = ({product}) => {
    return (
        <>
            <div>
                <p>Descripción:{product.desc}</p>
            </div>
            <ItemCount unit={product.unit} price={product.price} stock={product.stock} />
        </>
        
    )
}