import { ItemCount } from "../ItemCount"

// HIJO 1-4
export const ItemDetail = ({product}) => {
    return (
        <>
            <div>
                <h4>{product.name}</h4>
                <p>Descripción:{product.desc}</p>
            </div>
            <ItemCount unit={product.unit} price={product.price} stock={product.stock} />
        </>
        
    )
}