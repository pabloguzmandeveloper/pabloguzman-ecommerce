import { useContext , createContext , useState } from 'react';

const CreateContextAdd = createContext();
// Función que se usa para desestructurar en donde elijamos (en cualquier otro componente) requerir variables o funciones de la función cartCotextProvider
export const CartContextApp = () => useContext(CreateContextAdd);

export const CartContextProvider = ({children}) => {
    const [dataCollection, setDataCollection] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [cartList, setCartList] = useState([]);
    
    const addToCart = (objectInput) => {
        let waitingCart = [...cartList];
    
        (!(waitingCart.some((prod) => prod.item.id === objectInput.item.id)))?
        setCartList([...cartList, objectInput]):
        (waitingCart.find((prod) => prod.item.id === objectInput.item.id).quantity += objectInput.quantity)&&setCartList(waitingCart);
    };

    const removeList = () => setCartList([]);

    const deletItem = (idProd) => {
        setCartList(cartList.filter((waitingItem) => waitingItem.item.id !== idProd));
    };

    const totalPrice = cartList.reduce((total, item) => {
        const { price } = item.item;
        const { quantity } = item;
        const itemTotalPrice = price * quantity;
        return total + itemTotalPrice;
    }, 0);

    const iconCart = () => cartList.reduce((acc, cur) => acc + cur.quantity, 0);

    return (
        < CreateContextAdd.Provider value={{
            allProducts,
            setAllProducts,
            dataCollection,
            setDataCollection,
            cartList,
            setCartList,
            iconCart,
            addToCart,
            removeList,
            deletItem,
            totalPrice
        }}>
            {children}
        </CreateContextAdd.Provider>
    )
    // estuvimos varias horas para hacer funcionar esto y decididamente la value que pasamos dentro de llaves a su vez si o si se necesita pasar otras llaves, tal vez es para que lo reconozca como objeto
};

