import { ItemListContainer } from '../../ItemListContainer';

export const ToBuy = () => {
    return (
        <>
            <h1 className='navbar__menu--buy'>COMPONENTE COMPRA POR WHATSAPP</h1>
            <ItemListContainer style={{color: 'orange',background: 'green',textAlign: 'center',fontSize: '18px'}} greeting={"Hola!!! buenos días!! Bienvenido a nuestro E-Comosano!!"}/>
        </>
    )
    
}