import React from "react";
import {Link} from "react-router-dom";

export default function Footer() {
    return(
        <>
            <footer className='main__footer'>
                <div className='main__footer--home'>
                    <nav className='home'>
                        <div className='home-button'>
                            <Link to='#'><i className="fas fa-bars"></i></Link>
                        </div>
                    </nav>
                    <nav className="menu">
                        <Navbar/>
                    </nav>                
                </div>              
            </footer>
        </>
    )
};