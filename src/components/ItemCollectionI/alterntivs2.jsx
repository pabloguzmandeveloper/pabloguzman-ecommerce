import { ItemList } from '../ItemList';
import { useState , useEffect } from 'react';
import { useParams , Link } from "react-router-dom";
import { collection , getDocs , deleteDoc , doc } from "firebase/firestore"; //métodos de firestore para crear los módulos de consulta y pedidos a firestore
import { dbComosano } from '../../firebaseConfig/firebase.js';

export const ItemCollection = (props) => {
    const {categoryId} = useParams();
    // 1 configurarmos hooks
    const [ loading , setLoading] = useState([false]);
    const [ error , setError ] = useState([null]);
    const [ categories, setCategories ] = useState([]);
    // 2 referenciamos la db de firestore
    const dbComosanoFirestore = collection(dbComosano,"comosanoProductos")
    // 3 funcion para mostrar todos los docs
    // const getProducts = async () => {
    //     try {
    //         setLoading(true);
    //         const data = await getDocs(dbComosanoFirestore);
    //         setCategories(data.docs.map((doc) =>({...doc.data(),id:doc.id})));
    //         setLoading(false);
    //     } catch (error) {
    //         setLoading(false);
    //         setError(error);
    //     }
    // }
    // console.log(categories)
    // useEffect(() => {
    //     const data1 = getProducts()
    //     if(categoryId) {
    //         data1.then(resultado => {
    //             const nuevaLista = resultado.filter(item=>item.categ === categoryId);
    //             setCategories(nuevaLista)
    //             console.log(nuevaLista)
    //         })
    //             .catch(err => {setError(err); console.log(err)})
    //     } else {
    //         data1.then(resultado => {
    //             setCategories(resultado)
    //         })
    //             .catch(err => {setError(err);console.log(err)})
    //     }

    // }, [categoryId])

    // useEffect(() => {
    //     const promesa = await getProducts()
                    
    //     promesa.then(resultado=>{            
    //         if(!categoryId){                
    //             setCategories(resultado)
    //         } else{
    //             console.log(resultado)
    //             const nuevaLista = resultado.filter(item=>item.categ === categoryId);
    //             setCategories(nuevaLista)
    //             console.log(nuevaLista)
    //         }
    //     })
        
    // },[categoryId])


    // ahora funciona todo con esta alternativa de abajo, resulta que la función getProducts creada en un principio para usarla dentro del useEffect 
    // El método filter puede trabajar con una promesa, pero el problema en este caso es que la función getProducts no devuelve una promesa explícita, sino que utiliza la sintaxis async/await para manejar la promesa internamente.

// En otras palabras, la función getProducts no devuelve una promesa que se pueda usar para encadenar métodos de promesa adicionales, como then y catch. En su lugar, utiliza la palabra clave await para esperar que se resuelva la promesa internamente.

// Por lo tanto, en el useEffect, la constante promesa es en realidad el valor devuelto por la función getProducts, que es undefined, en lugar de la promesa real que se espera.

// En lugar de eso, deberías utilizar el enfoque de async/await dentro del useEffect, en lugar de intentar encadenar promesas. Algo como esto:
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await getDocs(dbComosanoFirestore);
                const categories = data.docs.map((doc) =>({...doc.data(),id:doc.id}));
                setCategories(categories.filter(item => !categoryId || item.categ === categoryId));
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(error);
            }
        };
    
        fetchData();
    }, [categoryId]);

    // los detalles se rompen porque la ruta de renderizado está vinculada a ItemListContainer?

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

// getProducts.then(resultado => {
//     if(!categoryId){                
//         setCategories(resultado)
//     } else{
//         // console.log(resultado)
//         const nuevaLista = resultado.filter(item=>item.categ === categoryId);
//         setCategories(nuevaLista)
//         console.log(nuevaLista)
//     }
// })
// },[categoryId])