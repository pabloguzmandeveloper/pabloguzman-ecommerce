import { useContext , createContext , useState } from 'react';
// 
const CreateContextAdd = createContext();
// 
export const UseContextAdd = () => useContext(CreateContextAdd);

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (objectInput) => {
        let waitingCart = [...cartList];
    
        (!(waitingCart.some((prod) => prod.item.id === objectInput.item.id)))?
        setCartList([...cartList, objectInput]):
        (waitingCart.find((prod) => prod.item.id === objectInput.item.id).quantity += objectInput.quantity)&&setCartList(waitingCart);
    // Necesitabamos concatenar el setCartList(waitingCart) para que actualice el iconCart
        console.log(cartList)
    }

    const iconCart = () => cartList.reduce((acc, cur) => acc + cur.quantity, 0);

    return (
        < CreateContextAdd.Provider value={{addToCart,cartList,iconCart}}>
            {children}
        </CreateContextAdd.Provider>
    )
    // estuvimos varias horas para hacer funcionar esto y decididamente la value que pasamos dentro de llaves a su vez si o si se necesita pasar otras llaves, tal vez es para que lo reconozca como objeto
};

