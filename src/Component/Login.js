import React from 'react'
import Registration from './Registration.js';
import { Link } from 'react-router-dom';



export default function Login() {

    return (
        <>

           
            <div style={{marginLeft:'30%',marginTop:'15%'}}>
                <h1>Welcome to Login page</h1>
                <div >
                    <Link to='/home'>
                        <button type="submit">Login</button>
                    </Link>
                </div>

                <p>Don't have an account?</p>
                <div className='login-btn'>
                    <Link to='/Registration'>
                        <button type="submit">Register</button>
                    </Link>
                </div>
            </div>


        </>
    );
}