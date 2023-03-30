import React from "react";
import { Link } from "react-router-dom";


export default function About(){
    return (
    <>
    <div style={{marginLeft:'30%',marginTop:'15%'}}>
        <h1 >Welcome to About Page...</h1>
   
    <Link to='/login'>
        <button>Go to Login</button>
    </Link>
    </div>
    </>
    )
}