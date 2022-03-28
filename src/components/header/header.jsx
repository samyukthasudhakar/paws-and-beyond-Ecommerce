import React from 'react'
import { Link, useNavigate } from "react-router-dom";

import './header.css'
import {  bag, heart, home, pbLogo, user  } from '../../assets/icons'
import { useWishList, useCart, useAuth } from '../../context'

function Header(){
    const { wishList, setWishList } = useWishList()
    const { cartItems, setCartItems } = useCart()
    const { authState:{isLoggedIn}, authDispatch } = useAuth()
    const navigateTo = useNavigate()

    function logOutHandler (){
        
        setCartItems({type:'CLEAR_CART'})
        setWishList({type:'CLEAR_WISHLIST'})
        authDispatch({type:'LOG_OUT',payload:''})
        window.confirm('You are logging out. Choose "Ok" if you are sure.') ?
        navigateTo("/")
        : alert("Continuing with your session.")
        
    }

    return(
        <header className="flex-space-btwn header-container">
            <Link to='/'>
            <div className="flex-center">
                <img className="p-b-logo" src={pbLogo}
                    alt="paws and beyond logo"/>
                <span className="p-lg" style={{color:'white'}}>paws<span className="txt-accent">&</span>beyond</span><span className="txt-accent txt-bold p-lg">.</span>
            </div>
            </Link>
            <div className="flex-center flex-space-btwn search-bar">
                <input className="search-input p-sm" 
                    placeholder="Let's find what you are looking for..."/>
                <i class="fa fa-search search-icon"></i>
            </div>
            <nav className="flex-layout">
                <Link to="/" className="nav-pill active-nav-pill" ><img className="nav-pill-img" src={ home } alt="home icon"/></Link>
                <Link to="/wishlist" className="nav-pill" >
                    {
                        wishList.length ? (
                            <div className='flex-layout badge-container'>
                                <img className="nav-pill-img" src={ heart } alt="heart icon"/>
                                <span class="flex-center badge count-badge">{wishList.length}</span>
                            </div>
                        ): (<img className="nav-pill-img" src={ heart } alt="heart icon"/>)
                    }    
                </Link>  
                <Link to="/cart" className="nav-pill" >
                    {
                        cartItems.length ? (
                            <div className='flex-layout badge-container'>
                                <img className="nav-pill-img" src={ bag } alt="bag icon"/>
                                <span class="flex-center badge count-badge">{cartItems.length}</span>
                            </div>
                        ):(<img className="nav-pill-img" src={ bag } alt="bag icon"/>)
                    }  
                </Link>
                {!isLoggedIn ? 
                <Link to="/login" className="nav-pill" ><img className="nav-pill-img" src={ user } alt="user icon"/></Link>
                :<button class="nav-pill" style={{backgroundColor:'transparent', border:'none'}} title="LogOut" onClick={logOutHandler}><img className="nav-pill-img" src={ user } alt="user icon"/></button>
                }     
                </nav>
        </header>
    );
}

export { Header }