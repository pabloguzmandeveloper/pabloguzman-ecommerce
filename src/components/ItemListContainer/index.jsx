import { useState , useEffect } from 'react';
import { useParams , Link } from "react-router-dom";
import { arrayplano } from '../../helpers/arrayplano';
import { collection , getDocs , deleteDoc , doc } from "firebase/firestore"; //métodos de firestore para crear los módulos de consulta y pedidos a firestore
import { dbComosano } from '../../firebaseConfig/firebase';
// import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';
import { ItemList } from '../ItemList';


//Este componente agrupa las 7 categorías. Componente PADRE
export const ItemListContainer = (props)=>{
    const {categoryId} = useParams();
    const [categories, setCategories] = useState([]);

    const dbComosanoFirestore = collection(dbComosano,"comosanoProductos")
    const getProducts = async () => {
        const data = await getDocs(dbComosanoFirestore)
        //console.log(data.docs);
        setCategories(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    }

    // const deleteProduct = async () => {
    //     const ProductDoc = doc(dbComosanoFirestore,"comosanoProducts",id);
    //     await deleteDoc(ProductDoc)
    //     getProducts()
    // }

    const promesa = new Promise((resolve, reject)=>{
        resolve(arrayplano);
    })

    useEffect(()=>{
        promesa.then(resultado=>{            
            if(!categoryId){                
                setCategories(resultado)
            } else{
                // console.log(resultado)
                const nuevaLista = resultado.filter(item=>item.categ === categoryId);
                setCategories(nuevaLista)
                console.log(nuevaLista)
            }
        })
    },[categoryId])

    return(
        <div className="item-list-container">
            <h2 style={props.style}>{props.greeting}</h2>
            {console.log(categoryId)}
            
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
};

// El consumo de data de firestore se hace diferente al de una APIRest tal vez donde en una sola consulta o pedido te puedes traer toda la data completa debido a que es mas complejo manipular ese objeto de tipo QuerySnapshot entonces lo convertimos con un .map(), si se necesitan extraer los datos de forma completa es pasando los criterios de cada documento que pertences a la coleccíon, firestore espera siempre estos criterios para entregar los datos a convertir, estos documentos se los denomina DocumentSnapshots y los resultados de consultas es un objeto de tipo QuerySnapshot

// collection : En este método se reciben dos parámetros, uno es el nombre de la variable creada y exportada en la configuarción de vinculo con firestore, en este caso esta en la carpeta firebaseConfig/firebase.js y el segundo parámetro es el nombre raiz que tiene la colección (subfichero podemos decirle) para extraer la data precisa ejm.: const dbComosanoFirestore = collection(dbComosano,"comosanoProductos")
// getDocs : 
// deleteDoc :
// doc : 
