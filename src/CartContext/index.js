import { useContext , createContext , useState } from 'react';
import { ItemCount } from "../components/ItemCount/copy";
// 
export const CreateContextAdd = createContext();
// 
export const UseContextAdd = () => useContext(CreateContextAdd);

export const CartContextProvider = () => {
    // let stock = props.stock;
    let stock = 10;
    
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
    };

    return (
        < CreateContextAdd.Provider value={{stock,down,up,onAdd,count}}>
            <ItemCount />
        </CreateContextAdd.Provider>
    )
};

