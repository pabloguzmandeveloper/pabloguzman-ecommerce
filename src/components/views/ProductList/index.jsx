import { ItemListContainer } from '../../ItemListContainer';

export const ProductsList = () => {
    return (
        <>
            <h2 className='navbar__menu--prodList'>COMPONENTE PRODUCTSLIST</h2>
            <ItemListContainer style={{color: 'orange',background: 'green',textAlign: 'center',fontSize: '18px'}} greeting={"Hola!!! buenos días!! Bienvenido a nuestro E-Comosano!!"}/>
        </>

    )
};