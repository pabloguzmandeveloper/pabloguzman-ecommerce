import { useState } from "react";
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkSquare } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import CartWidget from '../CartWidget';
import Logo from '../../images/logo.png';
import LogoWhite from '../../images/logoWhite.png';
import { Link , useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const NavigationBar = ({ visible }) => {
    const navigate = useNavigate();    
    return (
    <div id="navbar__menu" className={visible ? 'slideIn swing' : 'slideOut'} >
        <div className="menu__container">
            <img className="logoWhite" src={LogoWhite} alt="COMOSANO" />

            <ButtonGroup vertical>
                <Button onClick={()=>navigate("/cartcheck")}>
                    Comprar por Whatsapp
                </Button>
                <Button onClick={()=>navigate("/productslist")}>
                    Lista de productos
                </Button>
                <Button onClick={()=>navigate('/stores')}>
                    Sucursales
                </Button>
                <Button onClick={()=>navigate('/aboutus')}>
                    Acerca de nosotros
                </Button>
            </ButtonGroup>
        </div>   
    </div>)
};

function NavBar (){
    const [ visibility , setVisibility ] = useState(false);
    const handleClick = ()=>{ setVisibility(!visibility);
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