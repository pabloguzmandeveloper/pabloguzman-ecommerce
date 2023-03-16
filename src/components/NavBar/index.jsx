import { useState } from "react";
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkSquare } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import CartWidget from '../CartWidget';
import Logo from '../../images/logo.png';
import LogoWhite from '../../images/logoWhite.png';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const NavigationBar = ({ visible }) => (
    <div id="navbar__menu" className={visible ? 'slideIn swing' : 'slideOut'} >
        <div className="menu__container">
            <img className="logoWhite" src={LogoWhite} alt="COMOSANO" />

            <ButtonGroup vertical>
                <Button>Comprar por Whatsapp
                    <Link to='/cartorders'></Link>
                </Button>
                <Button>Lista de productos
                    <Link to='/productslist'></Link>
                </Button>
                <Button>Sucursales
                    <Link to='/stores'></Link>
                </Button>
                <Button>Acerca de nosotros
                    <Link to='/aboutus'></Link>
                </Button>
            </ButtonGroup>

        </div>   
    </div>
);

function NavBar (){
    const [ visibility , setVisibility ] = useState(false);
    const handleClick = ()=>{ setVisibility(!visibility)

    }
    return(
        <div id="NavBar">
                <div className="nbContainer">
                    <Link to="/">
                        <img className="logo" src={Logo} alt="COMOSANO"/>
                    </Link>
                    
                    <CartWidget className="cart"/>
                    <button className="btnMenu" type="button" onClick={handleClick}>
                        {visibility ? <FontAwesomeIcon icon={faXmarkSquare} size="2x" color="green"/> : <FontAwesomeIcon icon={faBars} size="2x" color="green"/>}
                    </button>
                </div>
                <NavigationBar visible={visibility}/>
            </div>
    )
}
export default NavBar;