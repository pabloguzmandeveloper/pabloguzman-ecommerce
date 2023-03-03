// import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';
import { ItemCollectionI } from "../ItemCollectionI";

export const ItemListContainer = ()=>{
    return(
        <ItemCollectionI style={{color: "orange",
        background: "green",
        textAlign: "center",
        fontSize: "18px"}} greeting={"Hola!!! buenos días!! Bienvenido a nuestro E-CommerceSano!!"} />
    )
};

// El consumo de data de firestore se hace diferente al de una APIRest tal vez donde en una sola consulta o pedido te puedes traer toda la data completa debido a que es mas complejo manipular ese objeto de tipo QuerySnapshot entonces lo convertimos con un .map(), si se necesitan extraer los datos de forma completa es pasando los criterios de cada documento que pertences a la coleccíon, firestore espera siempre estos criterios para entregar los datos a convertir, estos documentos se los denomina DocumentSnapshots y los resultados de consultas es un objeto de tipo QuerySnapshot

// collection : En este método se reciben dos parámetros, uno es el nombre de la variable creada y exportada en la configuarción de vinculo con firestore, en este caso esta en la carpeta firebaseConfig/firebase.js y el segundo parámetro es el nombre raiz que tiene la colección (subfichero podemos decirle) para extraer la data precisa ejm.: const dbComosanoFirestore = collection(dbComosano,"comosanoProductos")
// getDocs : 
// deleteDoc :
// doc : 
