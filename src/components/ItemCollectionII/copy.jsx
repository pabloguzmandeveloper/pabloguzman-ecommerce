import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import { addDoc , collection , getFirestore , doc , updateDoc } from "firebase/firestore";

// const {updateId} = useParams();
// 1 Creamos un estado de ordenes
const [orderId,setOrderId] = useState;

// 2 Creamos función para generar ordenes de compras
const purchaseOrder = () => {
    console.log("función purchaseOrden ejecutada")
    const order = {
        buyer:{name:"Pepe", phone:"111", email:"a@a.com"},
        items:[{name:"Bicicleta", price:1000}],
        total:1000
    };
    const db = getFirestore();
    const ordersCollection = collection(db,"orders");
    addDoc(ordersCollection,order).then(({id})=>setOrderId(id))
};

// LAS DOS FUNCIONES LA HEMOS PROBADO DENTRO DEL useEffect DEL COMPONENTE ItemCollectionI Y FUNCIONA, ACÁ NO FUNCIONA APARENTEMENTE PORQUE NO ESTA LIGADO A UNA RUTA O COMPONENTES CON RUTAS, SINO EXISTE EN LAS RUTAS ESTE ARCHIVO CON SUS FUNCIONES NI SE EJECUTAN EN LA COMPILACIÓN.

// 3 Creamos función para actualizar orden
const updatePurchaseOrder = () => {
    const db = getFirestore();
    const orderDoc = doc(db,"orders",orderId);
    updateDoc(orderDoc,{total:4000});
};
// useEffect(()=>{
//     purchaseOrder()
// },[updateId])

// SEGUIREMOS IMPLEMENTANDO UN USEEFFECT LIGADO AL COMPONENTE QUE AGREGA PRODUCTOS
