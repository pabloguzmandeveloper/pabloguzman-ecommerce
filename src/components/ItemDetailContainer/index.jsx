import { imagesMap } from '../../images/imagesMap.js';
import './index.css';
import { useEffect , useState } from 'react';
import { useParams , Link , useNavigate } from 'react-router-dom';//cuidado que retorna numeros en strings
import { ItemDetail } from '../ItemDetail';
import { CartContextApp } from '../../CartContext';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
    const navigate = useNavigate();
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.product.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img className='img-detail' src={imagesMap[props.product.categ]} alt={props.product.categ} />
            <ItemDetail product={props.product} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>navigate(`/category/${props.product.categ}`)}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    );
};

export const ItemDetailContainer = () => {
    const {dataCollection} = CartContextApp();
    const {productId} = useParams();
    // 1 configurarmos hooks
    const [loading,setLoading] = useState([false]);
    const [error,setError] = useState([null]);
    const [item,setItem] = useState([]);
    const [modalShow,setModalShow] = useState(true);
// console.log(item)
    // 3 la funcion para mostrar todos los docs la creamos dentro del hook por ahorrar pasos de asincronía
    useEffect(() => {
        const fetchDataId = async () => {
            try {
                setLoading(true);
                const items = dataCollection.docs.map((doc) =>({...doc.data(),id:doc.id}));
                // console.log(items)
                let productos= items.filter(producto => !productId || producto.id === productId);
                // console.log(productos[0])
                setItem(productos)
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(error);
            }
        };
    
        fetchDataId();
    }, [productId]);

    return(        
    <>
        {item.map((producto)=>{
            return (
                <div key={producto.id}>
                    <MyVerticallyCenteredModal
                        product={producto}
                        show={modalShow}
                    />            
                </div>
            )
        })}            
    </>
    )
};