import { useState } from "react";
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkSquare } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import CartWidget from '../CartWidget';
import Logo from '../../images/logo.png';
import LogoWhite from '../../images/logoWhite.png';
import { Link } from "react-router-dom";

const NavigationBar = ({ visible }) => (
    <div id="navbar__menu" className={visible ? 'slideIn swing' : 'slideOut'} >
        <ul>
            <li>
                <Link to='/tobuy'>Comprar por Whatsapp</Link>
            </li>
            <li>
                <Link to='/productslist'>Lista de productos</Link>
            </li>
            <li>
                <Link to='/stores'>Sucursales</Link>
            </li>
            <li>
                <Link to='/aboutus'>Acerca de nosotros</Link>
            </li>
        </ul>
        <div className='menuLogo'>
            <img className="logoWhite" src={LogoWhite} alt="COMOSANO" />
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