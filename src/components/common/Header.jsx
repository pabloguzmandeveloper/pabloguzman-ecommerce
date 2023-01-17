import React from "react";
import {Link} from "react-router-dom";

export default function Header() {
    return(
        <>
            <header className='main__header'>
                <div className='main__header--home'>
                    <nav className='home'>
                        <div className='home-button'>
                            <Link to='#'><i className="fas fa-bars"></i></Link>
                        </div>
                    </nav>
                    <nav className="navbar">
                        <Navbar/>
                    </nav>                
                </div>              
            </header>
        </>
    )
};