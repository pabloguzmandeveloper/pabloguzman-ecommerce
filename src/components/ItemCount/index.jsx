import { useState , useEffect } from "react";
import { CartContextApp } from '../../CartContext';

// un punto importante que nos llevó todo el día fue que el dato propagado por context NO puede ESTAR AFUERA de la FUNCIÓN COMPONENTE sino no se rompe completamente la app. (addToCart en este caso)

export const ItemCount = (props)=>{
    const {addToCart} = CartContextApp();

    const [stock, setStock] = useState(0);
    const [initialStock, setInitialStock] = useState(0);
    const [currentStock, setCurrentStock] = useState(0);
    const [count, setCount] = useState(0);

    let variableStock = props.stock

    useEffect(() => {
        setInitialStock(variableStock);
        setCurrentStock(variableStock);
    }, [variableStock]);

    console.log(initialStock)
    console.log(currentStock)
    console.log(stock)

    let down = ()=>{
        if (currentStock > 0 && count > 0) {
            setCurrentStock(currentStock + 1);
            setCount(count - 1);
        }
    };

    let up = ()=>{
        if (currentStock > 0 && count < initialStock) {
            setCurrentStock(currentStock - 1);
            setCount(count + 1);
        }
    };

    let onAdd = ()=>{
        if (count > 0) {
            addToCart({item:props,quantity:count})
            setStock(currentStock);
            setCurrentStock(currentStock);
            setInitialStock(currentStock);
        }
        setCount(0)
        console.log("se agregó al carrito "+ count)
    }

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