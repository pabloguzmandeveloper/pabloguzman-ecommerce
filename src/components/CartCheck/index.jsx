import { Link , useParams } from 'react-router-dom';
import { CartContextApp } from '../../CartContext';

export const CartCheck = ({children}) => {
    const {totalPrice,deletItem,removeList,cartList} = CartContextApp();
    const {check} = useParams();
console.log(check);

    return (
        <ul>
            {cartList.map((prodItem)=>{
                return(
                    <div key={prodItem.item.id}>
                    {console.log(prodItem)}
                        <li >
                            <p>Nombre: {prodItem.item.name}</p>
                            <p>Subtotal: {prodItem.item.price} x {prodItem.quantity}{prodItem.item.unit} = ${(prodItem.item.price)*(prodItem.quantity)}</p>                            
                            <button onClick={()=>deletItem(prodItem.item.id)}>Eliminar</button>
                        </li>                        
                    </div>
                )
            })}
{console.log(check)}
            {cartList.length > 0?
            <>
                <button onClick={removeList}>Borrar todos los productos</button>
                <p>TOTAL: ${totalPrice}</p>
                {check==="check"?
                    <Link to={`/cartorders/order`}>ENVIAR PEDIDO POR WHATSAPP</Link>:
                    "" 
                }
            {/*===========*/}
                {children}
            {/*===========*/}
            </>:
            <Link to="/">Carrito de compras está vacío!! - Ir a listado de productos</Link>
            }            
        </ul>
    )
};










// Acá tal vez necesitemos crear la funcionalidad de registrar en la base de datos la orden con al menos el nombre el email y el telefono, y disponer de un botón de confirmar la compra para generarla, tal vez por whatsapp.
// Anterior a esto disponer tal vez de otra coleccion con la orden armada de donde se extraen los datos de todos los productos y el total a mostrar en este componente Cart, y en lugar de volver a enviar todos los datos duplicando la misma orden podemos agregar a la misma orden un nuevo campo de compra_enviada:true.
// Leyendo bien las consignas todas estas operaciones de creación de carrito deben estar dentro de ItemCollectionII, el asunto es que ni le veo sentido sino se puede revisar la data de todo lo que estamos comprando, para mí que la operación de envío de ese objeto order necesariamente debe estar acá en Cart, igual insisto que se puede lograr como lo dicen las consignas tal vez 