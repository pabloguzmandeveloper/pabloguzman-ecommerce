import { useParams , useNavigate } from "react-router-dom";
import { useState } from "react";
import { CartContextApp } from '../../CartContext';
import {collection,getDocs,doc,updateDoc,addDoc} from "firebase/firestore";
import { dbComosano } from '../../firebaseConfig/firebase.js';
import Swal from 'sweetalert2';
import {Form, Button , Container} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export const ItemCollectionII = () => {
    const navigate = useNavigate();
    const {totalPrice,deletItem,removeList,cartList,setCartList} = CartContextApp();
console.log(cartList)
    const {order} = useParams();
    console.log("id ruta de ItemCollectionII "+order)
    // 1 Creamos estados en ordenes
    const [ loading , setLoading] = useState([false]);
    const [ error , setError ] = useState([null]);
    const [ nombre , setNombre] = useState("");
    const [ telefono , setTelefono] = useState("");
    const [ email , setEmail] = useState("");
    // const [formIncomplete, setFormIncomplete] = useState(false);

console.log(nombre, telefono, email)
    const dbOrders = collection(dbComosano,"orders")
// creamos objeto para capturar los Form.Controls
    const orderUser = {
        buyer:{name:nombre, phone:telefono, email:email},
        items:cartList,
        total:totalPrice
    };
// agregamos a firestore el objeto de los Form.Controls
    const purchaseOrder = async () => {
        console.log("función purchaseOrden ejecutada");
        await addDoc(dbOrders,orderUser)
    };
// capturamos el id de firestore para mostrarlo al user
    const fetchOrders = async ()=> {
      let lastId=""
      try {
          setLoading(true);
          const data = await getDocs(dbOrders);
          const orders1 = data.docs.map((doc) =>({...doc.data(),id:doc.id}));
          let lastorder=orders1.findLast(el=>el.id)
          console.log(lastorder);
          lastId = lastorder.id;
          console.log(lastId);
          setLoading(false);
      } catch (error) {
          setLoading(false);
          setError(error);
      }
      Swal.fire({
        title: 'COMPRA EXITOSA!',
        text: "GRACIAS POR SU CONFIANZA!",
        icon: 'success',
        confirmButtonColor: '#3085d6',            
        confirmButtonText: 'Continuar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            `Guarde su código de compra: ${lastId}`,
            'A la brevedad procesaremos su compra',
            'success',
            navigate('/')
          )
        }
      })
      setCartList([])
    };
// función del botón para activar los procesos de arriba
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(orderUser);
        purchaseOrder();
        fetchOrders();

    };

    return (
      <Card
        bg={'success'}
        key={'success'}
        text={'success' === 'light' ? 'dark' : 'white'}
        style={{ width: '18rem' }}
        className="mb-2"
      >
        <Card.Header>Por favor complete los siguientes datos de contacto</Card.Header>
        <Card.Body>
          <Card.Title>Datos para registrar su pedido</Card.Title>
          <Container>
            <Form >
              <Form.Group>
                Nombre:
                <Form.Control
                  type="text"
                  value={nombre}
                  onChange={(event) => setNombre(event.target.value)}
                />
              </Form.Group>
              <br />
              <Form.Group>
                Teléfono:
                <Form.Control
                  type="tel"
                  value={telefono}
                  onChange={(event) => setTelefono(event.target.value)}
                />
              </Form.Group>
              <br />
              <Form.Group>
                Correo electrónico:
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Form.Group>
              <br />
            </Form>
            <Button onClick={handleSubmit}>Finalizar pedido</Button>
            <br></br>
            <Button onClick={()=>navigate('/')}>Cancelar y volver a la lista de productos</Button>
          </Container>
        </Card.Body>
      </Card>
    )
};