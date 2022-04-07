import React, { useState } from 'react'
import { Link } from "react-router-dom";

import { Header, Footer, Input } from '../../components';
import { authBG } from '../../assets/images';
import { useAuth } from '../../context/'
import useDocumentTitle from '../../utils/hooks/useDocumentTitle';

import './signUp.css'

function SignUp(){
    
    useDocumentTitle('Paws & Beyond | SignUp')
    
    const [user, setUser] = useState({firstName:'',lastName:'',email:'',password:''})
    const { signupHandler } = useAuth()

    const show = {type: "text", icon: ""}
    const hide = {type: "password", icon: "-slash"}
    const [passwordToggle, setPasswordToggle] = useState(hide)

    return(
        <div>
            <Header />
            <div className="flex-space-btwn flex-center space-around login-parent">
                
                <img className="auth-landing-img" src={authBG} alt="illustration of pets being together"/>
                
                <div>
                <form className="flex-column glass-card login-form" onSubmit={(e)=>signupHandler(e, user)}>
                    <div className="flex-column flex-center">
                        <h3 className='form-heading'>SignUp</h3>
                        <input type="text" placeholder="First Name" className='form-input mg-tb-1' onInput={(e)=>setUser({...user, firstName: e.target.value})} />
                        <input type="text" placeholder="Last Name" className='form-input mg-tb-1' onInput={(e)=>setUser({...user, lastName: e.target.value})} />
                        <input type="text" placeholder="Email" className='form-input mg-tb-1' onInput={(e)=>setUser({...user, email: e.target.value})} />
                        <div className='flex-layout flex-center space-between form-input mg-tb-1'>
                        <input type={passwordToggle.type} placeholder="Password" className='form-password' onInput={(e)=>setUser({...user, password:e.target.value})} value={user.password}/>
                        <i className={`fa fa-eye${passwordToggle.icon}`} onClick={()=>setPasswordToggle(passwordToggle.type==='text'?hide:show)}/>
                        </div>
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