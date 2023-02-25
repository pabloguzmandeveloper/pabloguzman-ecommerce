import { ItemCount } from "../ItemCount"

// HIJO 1-4
export const ItemDetail = ({product}) => {
    console.log(product)
    return (
        <>
            <div>
                <p>Descripción:{product.desc}</p>
            </div>
            <ItemCount id={product.id} unit={product.unit} price={product.price} stock={product.stock} name={product.name} />
        </>
        
    )
}