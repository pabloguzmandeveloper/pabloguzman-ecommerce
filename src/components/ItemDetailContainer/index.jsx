import {arrayplano} from '../../helpers/arrayplano';
import './index.css';
import { useEffect , useState } from 'react';
import { useParams , Link } from 'react-router-dom';//cuidado que retorna numeros en strings
import { ItemDetail } from '../ItemDetail';


// HIJO 1-3
export const ItemDetailContainer = () => {
    const {productId} = useParams();
console.log(productId)
    const [item, setItem] = useState({});

    const getItem = (id)=>{
        return new Promise((resolve, reject)=>{
            const filtro = arrayplano.find(item=>item.id === parseInt(id))
            console.log(filtro)
            resolve(filtro)
        })
    }

    useEffect(()=>{
        const getProducto = async()=>{
            const producto = await getItem(productId);
            setItem(producto);
        }
        getProducto();
    },[productId])

    return(
        <>
        {console.log(item)}
            <Link to={`/category/${item.categ}`} ><h3>{item.title +" - seguir comprando"}</h3></Link>
            
            <img className='img-detail' src={item.img} alt={item.img} />
            <h4>{item.name}</h4>
            <ItemDetail product={item} />
        </>
    )
}