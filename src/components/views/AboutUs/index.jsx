import styled from 'styled-components';

const StyledCard = styled.div`
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 2px 2px 5px #ccc;
    background-color: #e8f5e9;
    padding: 20px;
`;

export const AboutUs = () => {
    return (
        <StyledCard>
            <h1>ACERCA DE NOSOTROS</h1>
            <h2>Somos una empresa joven dedicada a la comercialización de productos comestibles regionales con el toque característico venezolano y otros importados desde el caribe, sus dueños originarios de Venezuela sentaron sus bases en Buenos Aires hace 7 años con el abrigo cálido de Argentina seguimos prestando la confianza y oferta de siempre sin igual. Te esperamos en nuestros locales y redes sociales!!!!</h2>
        </StyledCard>
    );
};