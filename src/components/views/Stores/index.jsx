import styled from 'styled-components';

const StyledCard = styled.div`
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 2px 2px 5px #ccc;
    background-color: #e8f5e9;
    padding: 20px;
`;

export const Stores = () => {
    return (
        <StyledCard>
            <br />
            <h1>NUESTRAS SUCURSALES EN CABA</h1>
            <br />
            <h2>SUCURSAL RECOLETA</h2>
            <p> Arenales 2029, C1124AAE CABA</p>
            <h2>SUCURSAL BELGRANO</h2>
            <p>Av. Monroe 2102, C1428 CABA</p>
        </StyledCard>
    );
};