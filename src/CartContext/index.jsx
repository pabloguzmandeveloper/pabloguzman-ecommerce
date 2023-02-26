import { useContext , createContext , useState } from 'react';
import { useParams } from 'react-router-dom';
import { updateDoc, doc } from "firebase/firestore";
import { dbComosano } from '../firebaseConfig/firebase';
// import { useParams } from 'react-router-dom';
// 
const CreateContextAdd = createContext();
// Función que se usa para desestructurar en donde elijamos (en cualquier otro componente) requerir variables o funciones de la función cartCotextProvider
export const UseContextAdd = () => useContext(CreateContextAdd);

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);
    const [stock, setStock] = useState(0);
    const [ item, setItem ] = useState([]);
    let {prodId} = useParams();
    
    const addToCart = (objectInput) => {
        let waitingCart = [...cartList];
    
        (!(waitingCart.some((prod) => prod.item.id === objectInput.item.id)))?
        setCartList([...cartList, objectInput]):
        (waitingCart.find((prod) => prod.item.id === objectInput.item.id).quantity += objectInput.quantity)&&setCartList(waitingCart);
    // Necesitabamos concatenar el setCartList(waitingCart) para que actualice el iconCart

    const update = async ()=>{
        const product = doc(dbComosano,"comosanoProductos",parseInt(prodId))
        const data= {
            stock:stock
        }
        await updateDoc (product,data)
    }

        console.log(cartList)
    }

    const iconCart = () => cartList.reduce((acc, cur) => acc + cur.quantity, 0);

    return (
        < CreateContextAdd.Provider value={{addToCart,cartList,iconCart,stock,setStock,item,setItem}}>
            {children}
        </CreateContextAdd.Provider>
    )
    // estuvimos varias horas para hacer funcionar esto y decididamente la value que pasamos dentro de llaves a su vez si o si se necesita pasar otras llaves, tal vez es para que lo reconozca como objeto
};

