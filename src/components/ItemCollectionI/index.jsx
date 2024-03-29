import './index.css';
import { ItemList } from '../ItemList';
import { useState , useEffect } from 'react';
import { useNavigate , useParams } from "react-router-dom";
import { collection , getDocs } from "firebase/firestore"; //métodos de firestore para crear los módulos de consulta y pedidos a firestore
import { dbComosano } from '../../firebaseConfig/firebase.js';
import { CartContextApp } from '../../CartContext';
import Accordion from 'react-bootstrap/Accordion';

export const ItemCollectionI = (props) => {
    const navigate = useNavigate();
    const {categoryId} = useParams();
    const [activeCategory, setActiveCategory] = useState(categoryId);

    const handleAccordionClick = (eventKey) => {
        // redirigir a la ruta deseada
        navigate(`/category/${eventKey}`);
    }

    const {dataCollection,setDataCollection} = CartContextApp();
    const {allProducts,setAllProducts} = CartContextApp();

    // 1 configurarmos hooks
    const [ loading , setLoading] = useState([false]);
    const [ error , setError ] = useState([null]);    
    const [ categories, setCategories ] = useState([]);
    // 2 referenciamos la db de firestore
    const dbComosanoFirestore = collection(dbComosano,"comosanoProductos");
    // 3 la funcion para mostrar todos los docs la creamos dentro del hook por ahorrar pasos de asincronía
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await getDocs(dbComosanoFirestore);
                const allProds = data.docs.map((doc) =>({...doc.data(),id:doc.id}));
                console.log(allProds)
                setDataCollection(data);
                setAllProducts(allProds)
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(error);
            }
        };
        fetchData();
        
    },[]);console.log(allProducts)

    useEffect(() => {
        const fetchDataId = async () => {
            try {
                setLoading(true);
                const categories1 = dataCollection.docs.map((doc) =>({...doc.data(),id:doc.id}));
                setCategories(categories1.filter(item => !categoryId || item.categ === categoryId));
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(error);
            }
        };
        fetchDataId();
        setActiveCategory(categoryId);
        {console.log(categoryId)}
    }, [categoryId]);

    return(        
        <div className="item-list-container">
            <h2 style={props.style}>{props.greeting}</h2>{console.log(categories)}
            <Accordion>
            <Accordion.Item eventKey="harinas">
                <Accordion.Header onClick={() => handleAccordionClick('harinas')}>
                    HARINAS DE MAIZ Y VARIOS
                </Accordion.Header>
                <Accordion.Body>                    
                        {activeCategory==="harinas"? categories.map((category)=>{
// la key unicamente la puedo establecer donde etá el .map() no dentro del componente ItemList
                            return (
                                <div key={category.id}>
                                    <ItemList productsList={category}/>
                                </div>
                            )  
                        }):""}
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="frutas">
                <Accordion.Header onClick={() => handleAccordionClick('frutas')}>
                    FRUTAS
                </Accordion.Header>
                <Accordion.Body>
                        {categoryId==="frutas"?categories.map((category)=>{
                            return (                            
                                <div key={category.id}>
                                    <ItemList productsList={category}/>
                                </div>                        
                            )
                        }):""}
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="quesos">
                <Accordion.Header onClick={() => handleAccordionClick('quesos')}>
                    QUESOS
                </Accordion.Header>
                <Accordion.Body>
                        {activeCategory==="quesos"?categories.map((category)=>{
                            return (
                                <div key={category.id}>
                                    <ItemList productsList={category}/>
                                </div>
                            )
                        }):""}
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="salsas_y_cremas">
                <Accordion.Header onClick={() => handleAccordionClick('salsas_y_cremas')}>
                    SALSAS Y CREMAS
                </Accordion.Header>
                <Accordion.Body>
                        {activeCategory==="salsas_y_cremas"?categories.map((category)=>{
                            return (
                                <div key={category.id}>
                                    <ItemList productsList={category}/>
                                </div>
                            )
                        }):""}
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="bebidas">
                <Accordion.Header onClick={() => handleAccordionClick('bebidas')}>
                    BEBIDAS Y MÁS
                </Accordion.Header>
                <Accordion.Body>
                        {activeCategory==="bebidas"?categories.map((category)=>{
                            return (
                                <div key={category.id}>
                                    <ItemList productsList={category}/>
                                </div>
                            )
                        }):""}
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="golosinas">
                <Accordion.Header onClick={() => handleAccordionClick('golosinas')}>
                    GOLOSINAS
                </Accordion.Header>
                <Accordion.Body>
                        {categoryId==="golosinas"?categories.map((category)=>{
                            return (
                                <div key={category.id}>
                                    <ItemList productsList={category}/>
                                </div>
                            )
                        }):""}
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="varios">
                <Accordion.Header onClick={() => handleAccordionClick('varios')}>
                    VARIOS
                </Accordion.Header>
                <Accordion.Body>
                        {categoryId==="varios"?categories.map((category)=>{
                            return (
                                <div key={category.id}>
                                    <ItemList productsList={category}/>
                                </div>
                            )
                        }):""}
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
    )
};