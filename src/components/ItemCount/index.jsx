import { UseContextAdd } from "../../CartContext";



export const ItemCount = (props)=>{
    // let stock = props.stock;

    // const down = UseContextAdd();
    // const up = UseContextAdd();
    // const onAdd = UseContextAdd();
    // const count = UseContextAdd();

    const {down,up,onAdd} = UseContextAdd();
    const [count,setCount] = UseContextAdd();
    const [cart,setCart] = UseContextAdd();

    return (
        <>
            <p>{count} x 1 {props.unit} = ${props.price*count}</p>
            <button onClick={down}>-</button>
            <p>{count}</p>
            <button onClick={up}>+</button>
            <button onClick={onAdd}>Agregar al Carrito</button>
            
        </>
    )
};