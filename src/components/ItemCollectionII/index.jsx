import { Link , useParams , useNavigate } from "react-router-dom";
import { useState , useEffect } from "react";
import { CartContextApp } from '../../CartContext';
import {collection,getDocs,doc,updateDoc,addDoc} from "firebase/firestore";
import { dbComosano } from '../../firebaseConfig/firebase.js';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';



export const ItemCollectionII = () => {
    const navigate = useNavigate();
    const {totalPrice,deletItem,removeList,cartList,setCartList} = CartContextApp();
console.log(cartList)
    const {order} = useParams();
    console.log(order)
    // 1 Creamos estados en ordenes
    const [ loading , setLoading] = useState([false]);
    const [ error , setError ] = useState([null]);
    const [ orderId , setOrderId ] = useState(99);
    const [ nombre , setNombre] = useState("");
    const [ telefono , setTelefono] = useState("");
    const [ email , setEmail] = useState("");
    const [ purchase , setPurchase ] = useState([]);
    const [formIncomplete, setFormIncomplete] = useState(false);

console.log(nombre, telefono, email, orderId)
    const dbOrders = collection(dbComosano,"orders")

    const orderUser = {
        buyer:{name:nombre, phone:telefono, email:email},
        items:cartList,
        total:totalPrice
    };    

    useEffect (() => {
      purchaseOrder();

      const fetchOrders = async ()=> {
        try {
            setLoading(true);
            const data = await getDocs(dbOrders);
            const orders1 = data.docs.map((doc) =>({...doc.data(),id:doc.id}));
            let lastorder=orders1.findLast(el=>el.id)
            console.log(lastorder);
            let lastId = lastorder.id;
            console.log(lastId);
            setOrderId(lastId);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };
    fetchOrders();

    Swal.fire({
      title: 'COMPRA EXITOSA!',
      text: "GRACIAS POR SU CONFIANZA!",
      icon: 'success',
      confirmButtonColor: '#3085d6',
      
      confirmButtonText: 'Continuar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          ' Numero de compra',
          'A la brevedad procesaremos su compra',
          'success',
          navigate('/')
        )
      }
    })
    },[purchase]);

    const handleSubmit = (event) => {
      event.preventDefault();
      
        console.log(orderUser);
        setPurchase(orderUser);
        
        // 
      

    };

// 2 Creamos función para guardar ordenes de compras en la base de datos
    const purchaseOrder = async () => {
        console.log("función purchaseOrden ejecutada");
        // const ordersCollection = collection(dbComosano,"orders");
        await addDoc(dbOrders,purchase)
    };
                    //.then(({id})=>setOrderId(id))

// LAS DOS FUNCIONES LA HEMOS PROBADO DENTRO DEL useEffect DEL COMPONENTE ItemCollectionI Y FUNCIONA, ACÁ NO FUNCIONA APARENTEMENTE PORQUE NO ESTA LIGADO A UNA RUTA O COMPONENTES CON RUTAS, SINO EXISTE EN LAS RUTAS ESTE ARCHIVO CON SUS FUNCIONES NI SE EJECUTAN EN LA COMPILACIÓN.

    return (
      <>
        <p>Para finalizar el pedido por favor complete los siguientes datos de contacto</p>
        <form >
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
        <button onClick={handleSubmit}>Finalizar pedido</button>
        <Link to="/">Cancelar y volver a la lista de productos</Link>
      </>
    )
};