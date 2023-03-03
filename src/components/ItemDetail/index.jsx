import { ItemCount } from "../ItemCount"

export const ItemDetail = ({product}) => {
    // console.log(product)
    return (
        <>
            <div>
                <p>Descripción:{product.desc}</p>
            </div>
            <ItemCount id={product.id} unit={product.unit} price={product.price} stock={product.stock} name={product.name} categ={product.categ} desc={product.desc} title={product.title} img={product.img} />
        </>
    )
};