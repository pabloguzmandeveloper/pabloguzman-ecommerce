import { useState } from "react";

export const ItemCount = (props)=>{
    let stock = props.stock;
    
    let [count, setCount] = useState(0);
    let [cart,setCart] = useState(0)

    let down = ()=>{
        if (stock>0&count<=stock){
            count>0?setCount(count-1) :count=0;
            setCart(count);
        }else {
            count=0
            setCart(count)
        }
    };

    let up = ()=>{
        if (stock>0&count<stock) {
            setCount(count+1)
            setCart(count);
        }else {
            count=stock
            setCart(count)
        }
    };

    let onAdd = ()=>{
        if (cart>0) {
            
            setCart(count)
            
            setCount(0)
            console.log(cart)
            console.log(count)
        }else {
            setCart(0)            
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