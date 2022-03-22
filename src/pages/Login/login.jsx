import React from 'react'
import { Link } from "react-router-dom";

import { Header, Footer, Input } from '../../components';
import { authBG } from '../../assets/images';

import './login.css'

function Login(){
    return(
        <div>
            <Header />
            <div className="flex-space-btwn flex-center space-around login-parent">
                
                <img className="auth-landing-img" src={authBG} alt="illustration of pets being together"/>
                
                <div>
                <form className="flex-column glass-card login-form">
                    <div className="flex-column flex-center">
                        <h3 className='form-heading'>Login</h3>
                        <Input type="text" placeholder="Email"/>
                        <Input type="password" placeholder="Password"/>
                        <div className="flex-layout space-between w-100">
                            <div className="flex-layout">
                                <input type="checkbox"/> 
                                <label className="fs-13px">Remember me</label>
                            </div>
                            <Link className="link-txt" to="*">Forgot Password ?</Link>    
                        </div>
                        <div className="mg-1 w-100">
                        <button className="auth-btn">Login</button>
                        <button className="auth-btn-secondary">Login as Guest</button>
                        </div>
                        <Link className="link-txt" to="/signup">Create New Account</Link>
                    </div>
                </form>
            </div>
        </div>
            <Footer />
        </div>
    )
}

export { Login }