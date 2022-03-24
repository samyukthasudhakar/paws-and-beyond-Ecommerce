import React from 'react'
import { Link } from "react-router-dom";

import './header.css'
import {  bag, heart, home, pbLogo, user  } from '../../assets/icons'
import { useWishList, useCart } from '../../context'

function Header(){
    const { wishList } = useWishList()
    const { cartItems } = useCart()

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
                <Link to="/login" className="nav-pill" ><img className="nav-pill-img" src={ user } alt="user icon"/></Link>
            </nav>
        </header>
    );
}

export { Header }