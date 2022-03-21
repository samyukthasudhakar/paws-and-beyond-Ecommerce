import React from 'react'
import { Link } from "react-router-dom";

import { Header, Footer } from '../../components';
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
                        <span className="p-md form-heading">Login</span>
                        <input className="form-control mg-tb-1 form-input" type="text" placeholder="Email"/>
                        <input className="form-control mg-tb-1 form-input" type="password" placeholder="Password"/>
                        <div className="flex-layout width-100" style={{justifyContent:'space-between',width:'100%',verticalAlign:'center'}}>
                            <div className="flex-layout">
                                <input type="checkbox"/> 
                                <label className="fs-13px" style={{fontSize:'13px'}}>Remember me</label>
                            </div>
                            <Link className="link-txt" to="">Forgot Password ?</Link>    
                        </div>
                        <div className="mg-1 w-100">
                        <button className="auth-btn">Login</button>
                        <button className="auth-btn-secondary">Login as Guest</button>
                        </div>
                        <Link className="link-txt" to="signup.html">Create New Account</Link>
                    </div>
                </form>
            </div>
        </div>
            <Footer />
        </div>
    )
}

export { Login }