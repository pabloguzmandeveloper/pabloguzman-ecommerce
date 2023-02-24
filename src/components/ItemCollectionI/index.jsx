import { ItemList } from '../ItemList';
import { useState , useEffect } from 'react';
import { useParams , Link } from "react-router-dom";
import { collection , getDocs } from "firebase/firestore"; //métodos de firestore para crear los módulos de consulta y pedidos a firestore
import { dbComosano } from '../../firebaseConfig/firebase.js';

export const ItemCollectionI = (props) => {
    const {categoryId} = useParams();
    // 1 configurarmos hooks
    const [ loading , setLoading] = useState([false]);
    const [ error , setError ] = useState([null]);
    const [ categories, setCategories ] = useState([]);
    // 2 referenciamos la db de firestore
    const dbComosanoFirestore = collection(dbComosano,"comosanoProductos")
    // 3 la funcion para mostrar todos los docs la creamos dentro del hook por ahorrar pasos de asincronía
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await getDocs(dbComosanoFirestore);
                const categories1 = data.docs.map((doc) =>({...doc.data(),id:doc.id}));
                setCategories(categories1.filter(item => !categoryId || item.categ === categoryId));
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(error);
            }
        };
        fetchData();
    }, [categoryId]);

    // los detalles se rompen porque la ruta de renderizado está vinculada a ItemListContainer? Ahora con esta solución no, desconocemos, será porque solucionamos la falla en la asincronía

    return(
        <div className="item-list-container">
            <h2 style={props.style}>{props.greeting}</h2>
            {console.log(categoryId)}
            {console.log(categories)}
            
            <Link to={'/category/harinas'}>HARINAS DE MAIZ Y VARIOS</Link>
            <ul>
                {categoryId==="harinas"? categories.map((category)=>{
                    //la key unicamente la puedo establecer donde etá el .map() no dentro del componente ItemList
                    return ( 
                        <li key={category.id}>  
                            <ItemList productsList={category}/>
                        </li>
                    )
                }):""}
            </ul>

            <Link to={'/category/frutas'}>FRUTAS</Link>
            <ul>
                {categoryId==="frutas"?categories.map((category)=>{
                    return (                            
                        <li key={category.id}>
                            <ItemList productsList={category}/>
                        </li>                        
                    )
                }):""}
            </ul>

            <Link to={'/category/quesos'}>QUESOS</Link>
            <ul>
                {categoryId==="quesos"?categories.map((category)=>{
                    return (
                        <li key={category.id}>
                            <ItemList productsList={category}/>
                        </li>
                    )
                }):""}
            </ul>

            <Link to={'/category/salsas_y_cremas'}>SALSAS Y CREMAS</Link>
            <ul>
                {categoryId==="salsas_y_cremas"?categories.map((category)=>{
                    return (
                        <li key={category.id}>
                            <ItemList productsList={category}/>
                        </li>
                    )
                }):""}
            </ul>

            <Link to={'/category/bebidas'}>BEBIDAS Y MÁS</Link>
            <ul>
                {categoryId==="bebidas"?categories.map((category)=>{
                    return (
                        <li key={category.id}>
                            <ItemList productsList={category}/>
                        </li>
                    )
                }):""}
            </ul>

            <Link to={'/category/golosinas'}>GOLOSINAS</Link>
            <ul>
                {categoryId==="golosinas"?categories.map((category)=>{
                    return (
                        <li key={category.id}>
                            <ItemList productsList={category}/>
                        </li>
                    )
                }):""}
            </ul>

            <Link to={'/category/varios'}>VARIOS</Link>
            <ul>
                {categoryId==="varios"?categories.map((category)=>{
                    return (
                        <li key={category.id}>
                            <ItemList productsList={category}/>
                        </li>
                    )
                }):""}
            </ul>
            
        </div>
    )
}