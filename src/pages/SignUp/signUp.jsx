import React, { useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

import { Header, Footer, Input } from '../../components';
import { authBG } from '../../assets/images';
import { useInputHandler } from '../../customHooks/inputHandler';

import './signUp.css'

function SignUp(){
    return(
        <div>
            <Header />
            <div className="flex-space-btwn flex-center space-around login-parent">
                
                <img className="auth-landing-img" src={authBG} alt="illustration of pets being together"/>
                
                <div>
                <form className="flex-column glass-card login-form">
                    <div className="flex-column flex-center">
                        <h3 className='form-heading'>SignUp</h3>
                        <Input type='text' name='firstName' placeholder='First Name'/>
                        <Input type='text' name='lastName' placeholder='Last Name'/>
                        <Input type='text' name='email' placeholder='Email'/>
                        <Input type='password' name='password' placeholder='Password'/>
                        <div className="flex-layout w-100 space-between">
                            <div className="flex-layout">
                                <input id='terms' type="checkbox"/> 
                                <label for='terms' className="fs-13px">I agree to all the terms and conditions.</label>
                            </div>   
                        </div>
                        <div className="mg-1 w-100">
                        <button className="auth-btn">SignUp</button>
                        </div>
                        <Link className="link-txt" to="/login">Login with existing account</Link>
                    </div>
                </form>
            </div>
        </div>
        <Footer />
        </div>
    )
}

export { SignUp }