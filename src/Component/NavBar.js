import React from 'react';
import { Link } from "react-router-dom"; 
import nav from './NavBar.module.css';



export default function NavBar() {
   
  
    return (
        <>
            <nav className={nav.TopNav}>

            <div className={nav.cont}>
            
                <div className= {nav.left}>

                    <ul>
                        <li>
                        <Link to="/Home">Home</Link>
                        </li> 
                        <li>
                        <Link to="/About">About</Link>
                        </li>
                        <li>
                        <Link to="/Login">Login</Link>
                        </li>
                        <li>
                        <Link to="/Registration">Register</Link>
                        </li>

                    </ul>        
                </div>

                </div>


            </nav>
        </>
    )
}