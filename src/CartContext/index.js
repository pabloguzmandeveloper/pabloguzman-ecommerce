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
        (waitingCart.find((prod) => prod.item.id === objectInput.item.id).quantity += objectInput.quantity);
    // CUIDADO! ver si hay conflictos en no concatenar el setCartList(waitingCart)
        console.log(cartList)
    }

    return (
        < CreateContextAdd.Provider value={{addToCart}}>
            {children}
        </CreateContextAdd.Provider>
    )
    // estuvimos varias horas para hacer funcionar esto y decididamente la value que pasamos dentro de llaves a su vez si o si se necesita pasar otras llaves, tal vez es para que lo reconozca como objeto
};

