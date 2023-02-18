import React from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkSquare } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import CartWidget from '../components/CartWidget';
import Logo from '../images/logo.png';
import LogoWhite from '../images/logoWhite.png';


const NavigationBar = ({ visible }) => ( 
    <div id="navbar__menu" className={visible ? 'slideIn swing' : 'slideOut'} >
        <ul>
            <li className='navbar__menu--buy'>Compra por   WhatsApp
                {/* <a href="/"></a> */}
            </li>
            <li className='navbar__menu--stores'>Sucursales
                {/* <a href="/"></a> */}
            </li>
            <li className='navbar__menu--prodList'>Productos
                {/* <a href="/"></a> */}
            </li>
            <li className='navbar__menu--aboutUs'>Acerca de nosotros
                {/* <a href="/"></a> */}
            </li>
        </ul>
        <div className='menuLogo'>
            <img className="logoWhite" src={LogoWhite} alt="COMOSANO" />
        </div>    
    </div>
);

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = { visible: false }
    }

    handleClick() {
        this.setState(prev => ({ visible: !prev.visible }))
    }
    
    render() {
        return (            
            <div id="NavBar">
                <div className="nbContainer">
                    <img className="logo" src={Logo} alt="COMOSANO"/>
                    <CartWidget className="cart"/>
                    <button className="btnMenu" type="button" onClick={this.handleClick}>
                        {this.state.visible ? <FontAwesomeIcon icon={faXmarkSquare} size="2x" color="green"/> : <FontAwesomeIcon icon={faBars} size="2x" color="green"/>}
                    </button>
                </div>
                <NavigationBar visible={this.state.visible}/>
            </div>
        )
    }
};
export default NavBar;

