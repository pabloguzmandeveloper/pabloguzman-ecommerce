import { useState } from "react";
import { UseContextAdd } from '../../CartContext';

// un punto importante que nos llevó todo el día fue que el dato propagado por context NO puede ESTAR AFUERA de la FUNCIÓN COMPONENTE sino no se rompe completamente la app. (addToCart en este caso)

export const ItemCount = (props)=>{
    const {addToCart} = UseContextAdd()

    let stock = props.stock;
    
    let [count, setCount] = useState(0);

    let down = ()=>{
        if (stock>0&count<=stock){
            count>0?setCount(count-1) :setCount(count)
        }else {
            setCount(0)
        }
    };

    let up = ()=>{
        if (stock>0&count<stock) {
            setCount(count+1)
        }else {
            setCount(stock)
        }
    };


    let onAdd = ()=>{
        if (count>0) {
            addToCart({item:props,quantity:count})           
            setCount(0)
            console.log(count)
        }else {
            setCount(0)            
        }
        console.log("se agregó al carrito "+ count)
    }
    // console.log("app se renderizará");
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