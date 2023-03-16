import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContextApp } from '../../CartContext';
import { ItemCollectionII } from '../ItemCollectionII';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';

const StyledCard = styled.div`
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 2px 2px 5px #ccc;
    background-color: #e8f5e9;
    padding: 20px;
`;

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Último paso!!!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ItemCollectionII/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export const CartCheck = () => {
    const {totalPrice,deletItem,removeList,cartList} = CartContextApp();
    const [modalShow, setModalShow] = useState(false);

    return (
        <ul>
            {cartList.map((prodItem)=>{
                return(
                    <div key={prodItem.item.id}>
                    {console.log(prodItem)}
                        <li >
                            <p>Nombre: {prodItem.item.name}</p>
                            <p>Subtotal: {prodItem.item.price} x {prodItem.quantity}{prodItem.item.unit} = ${(prodItem.item.price)*(prodItem.quantity)}</p>                            
                            <button onClick={()=>deletItem(prodItem.item.id)}>Eliminar</button>
                        </li>                        
                    </div>
                )
            })}
            {cartList.length > 0?
            <>
                <button onClick={removeList}>Borrar todos los productos</button>
                <p>TOTAL: ${totalPrice}</p>

                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Enviar pedido por Whatsapp
                </Button>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />                
            </>:
            <StyledCard>
              
              <Link to="/"><h2>Carrito de compras está vacío!! - Ir a listado de productos</h2></Link>
            </StyledCard>
            
            }            
        </ul>
    )
};