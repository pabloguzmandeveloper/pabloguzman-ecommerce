import { ItemListContainer } from '../../ItemListContainer';
import styled from 'styled-components';

const StyledCard = styled.div`
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 2px 2px 5px #ccc;
    background-color: #e8f5e9;
    padding: 20px;
`;

export const ProductsList = () => {
    return (
        <>
            <StyledCard><h1>TU LISTA DE PRODUCTOS POR CATEGORÍAS</h1></StyledCard>
            <ItemListContainer style={{color: 'orange',background: 'green',textAlign: 'center',fontSize: '18px'}} greeting={"Hola!!! buenos días!! Bienvenido a nuestro E-Comosano!!"}/>
        </>
    )
};