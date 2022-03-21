import React from 'react'
import { Link } from "react-router-dom";

import { Header, Footer, Input } from '../../components';
import { authBG } from '../../assets/images';

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
                        <Input type={'text'} placeholder={'First Name'}/>
                        <Input type={'text'} placeholder={'Last Name'}/>
                        <Input type={'text'} placeholder={'Email'}/>
                        <Input type={'text'} placeholder={'Password'}/>
                        <div className="flex-layout width-100" style={{justifyContent:'space-between',width:'100%',verticalAlign:'center'}}>
                            <div className="flex-layout">
                                <input type="checkbox"/> 
                                <label className="fs-13px">Remember me</label>
                            </div>
                            <Link className="link-txt" to="*">Forgot Password ?</Link>    
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