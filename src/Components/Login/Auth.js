import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import login from './login.css';
import logo from './../../pictures/auth_logo.png';
class Auth extends Component {

    render() {
        return (
            <div className= "main"> 
    <div className='bigholder'>
        <img src = {logo} alt = ""/>
            <div className = 'inputs'>
        </div> <p className='label'>
        UserName
        </p>
            <input className='input' type="text" name="firstname"/>
               <p className='label'>Password</p> 
         <input className='input' type="password" name="password"/>
        
                <div className='buttons'>
                <Link to='/Dashboard'>
                 <button className='login'>Login</button>
                 </Link>
                 <Link to= '/Dashboard'>
                <button className= 'register'>Register</button>
                
                </Link>
                </div>
    </div>
            </div>
        );
    }
}

export default Auth;