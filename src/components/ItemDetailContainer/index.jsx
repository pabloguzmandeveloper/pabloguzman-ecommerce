import { imagesMap } from '../../images/imagesMap.js';
import './index.css';
import { useEffect , useState } from 'react';
import { useParams , Link } from 'react-router-dom';//cuidado que retorna numeros en strings
import { ItemDetail } from '../ItemDetail';
import { CartContextApp } from '../../CartContext';

export const ItemDetailContainer = () => {
    const {dataCollection} = CartContextApp();
    const {productId} = useParams();
    // 1 configurarmos hooks
    const [ loading , setLoading] = useState([false]);
    const [ error , setError ] = useState([null]);
    const [ item, setItem ] = useState([]);
// console.log(item)
    // 3 la funcion para mostrar todos los docs la creamos dentro del hook por ahorrar pasos de asincronía
    useEffect(() => {
        const fetchDataId = async () => {
            try {
                setLoading(true);
                const items = dataCollection.docs.map((doc) =>({...doc.data(),id:doc.id}));
                // console.log(items)                
                let productos= items.filter(producto => !productId || producto.id === productId);
                // console.log(productos[0])
                setItem(productos)
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(error);
            }
        };
    
        fetchDataId();
    }, [productId]);

    return(        
    <>
        {item.map((producto)=>{
            return (
                <div key={producto.id}>
                    <Link to={'/'} >
                        <h3>{"Volver a la lista - seguir comprando!!"}</h3>
                    </Link>
            
                    <img className='img-detail' src={imagesMap[producto.categ]} alt={producto.categ} />
                    <h4>{producto.name}</h4>
                    <ItemDetail product={producto} />            
                </div>
            )
        })}            
    </>
    )
};