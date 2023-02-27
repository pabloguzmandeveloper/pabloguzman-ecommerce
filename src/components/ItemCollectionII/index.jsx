import { useParams , Link } from "react-router-dom";
import { useState , useEffect } from "react";
import { addDoc , collection , getFirestore , doc , updateDoc } from "firebase/firestore";

export const ItemCollectionII = ({cartList }) => {
    // ruta parametrizada ?
    const {updateId} = useParams();
    console.log(updateId)
    // 1 Creamos estados en ordenes
    // const [ orderId , setOrderId ] = useState;
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(`Nombre: ${nombre}, Teléfono: ${telefono}, Email: ${email}`);
    };

// 2 Creamos función para generar ordenes de compras
    // const purchaseOrder = ({dataOrder}) => {
    //     console.log("función purchaseOrden ejecutada")
    //     const orderUser = {
    //         id:"elegir",
    //         buyer:{name:"Pepe", phone:"111", email:"a@a.com"},
    //         items:[{name:"Bicicleta", price:1000}],
    //         total:1000
    //     };
    //     const db = getFirestore();
    //     const ordersCollection = collection(db,"orders");
    //     addDoc(ordersCollection,orderUser).then(({id})=>setOrderId(id))
    // };

// LAS DOS FUNCIONES LA HEMOS PROBADO DENTRO DEL useEffect DEL COMPONENTE ItemCollectionI Y FUNCIONA, ACÁ NO FUNCIONA APARENTEMENTE PORQUE NO ESTA LIGADO A UNA RUTA O COMPONENTES CON RUTAS, SINO EXISTE EN LAS RUTAS ESTE ARCHIVO CON SUS FUNCIONES NI SE EJECUTAN EN LA COMPILACIÓN.

// 3 Creamos función para actualizar orden
    // const updatePurchaseOrder = ({dataOrder}) => {
    //     const db = getFirestore();
    //     const orderDoc = doc(db,"orders",orderId);
    //     updateDoc(orderDoc,{total:4000});
    // };
// useEffect(()=>{
//     purchaseOrder()
// },[updateId])

    return (
      <>
        <p>Para finalizar el pedido por favor complete los siguientes datos de contacto</p>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              value={nombre}
              onChange={(event) => setNombre(event.target.value)}
            />
          </label>
          <br />
          <label>
            Teléfono:
            <input
              type="tel"
              value={telefono}
              onChange={(event) => setTelefono(event.target.value)}
            />
          </label>
          <br />
          <label>
            Correo electrónico:
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <br />
        </form>
        <button>Finalizar pedido</button>
        <Link to="/">Cancelar y volver a la lista de productos</Link>
      </>
    )
};
