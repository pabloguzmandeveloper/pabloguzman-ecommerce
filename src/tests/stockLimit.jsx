import { useState } from "react";

export const ItemCount = (props)=>{
    let stock = props.stock;
    let cant = 0;
    let obj = {stock,cant}
    let [count, setCount] = useState(obj);

    let down = ()=>{
        if (count.stock>0){
            count>0?setCount(count.cant-1):count.cant=0
        }else {
            count.cant=0
        }
    }

    let up = ()=>{
        if (count.stock>0) {
            setCount(count.cant+1);
        }else {
            count.cant=0
        }
    }
    

    // console.log("app se renderizará");
    return (
        <>
            <p>{count} x 1 {props.unit} = ${props.price*count}</p>
            <button onClick={down}>-</button>
            <p>{count}</p>
            <button onClick={up}>+</button>
            {/* Los botones el atributo onclick sólo admite funciones sin ejecutar, tanto una anónima como una declarada*/}
        </>
    )
};
// Código testeado funcionando en forma individual