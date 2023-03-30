import React from "react";
import { Link } from "react-router-dom";


export default function Home(){
   return(
    <header style={{marginLeft:'30%',marginTop:'15%'}}>
    <div >
        <h1>Welcome to Home Page </h1>
    </div> 
    <Link to="/About">
        <button>Go to About</button>
    </Link>  
    </header>
   ) ;
}