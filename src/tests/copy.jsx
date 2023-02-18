import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import productsDB from '../components/productsDB.json';
import { ItemList } from '../components/ItemList';
// import { useParams } from "react-router-dom";

//Este componente agrupa las 7 categorías. Componente PADRE
export const ItemListContainer = (props)=>{
    // const {productCategory} = useParams();

    let [categories,setCategories] = useState([]);   //estuvimos horas y al pasar un array vacío funcionó, hay que aclarar que se espera un array vacío, ya que si pasamos un objeto utiliza eso, sino espera un array de dependencias
    
    

    const getCategory = (db)=>{
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(db);
            }, 2000);
        })
    }

    useEffect(() => {
        let promesa = async () => {
            let data = await getCategory(productsDB);
            setCategories(data)
            console.log(data)
        }
        console.log(getCategory(productsDB));
        
        promesa()
    },[])

    return (
        <>
            <h2 style={props.style}>{props.greeting}</h2>
            <ul>
                {categories.map((category)=>{
                    return (
                        <li key = {category.id}>  {/*la key es sobre el contenedor*/}
                            {/* <p>Comp ItemListContainer</p> */}
                            <>                                
                                <Link to={`/category/${category.id}`}>
                                    <h3>{category.categ}</h3>
                                </Link>
                            </>
                            <ItemList products={category}/>
                        </li>
                    )
                })}
            </ul>
        </>
    )        
};