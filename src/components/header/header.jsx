import React from 'react'
import { Link } from "react-router-dom";
import {  bag, heart, home, pbLogo, user  } from '../../assets/icons'

import './header.css'

function Header(){
    return(
        <header className="flex-space-btwn header-container">
            <div className="flex-center">
                <img className="p-b-logo" src={pbLogo}
                    alt="paws and beyond logo"/>
                <span className="p-lg">paws<span className="txt-accent">&</span>beyond</span><span className="txt-accent txt-bold p-lg">.</span>
            </div>
            <div className="flex-center flex-space-btwn search-bar">
                <input className="search-input p-sm" 
                    placeholder="Let's find what you are looking for..."/>
                <i class="fa fa-search search-icon"></i>
            </div>
            <nav className="flex-layout">
                <Link to="/" className="nav-pill active-nav-pill" ><img className="nav-pill-img" src={ home } alt="home icon"/></Link>
                <Link to="/wishlist" className="nav-pill" ><img className="nav-pill-img" src={ heart } alt="heart icon"/></Link>
                <Link to="/cart" className="nav-pill" ><img className="nav-pill-img" src={ bag } alt="bag icon"/></Link>
                <Link to="*" className="nav-pill" ><img className="nav-pill-img" src={ user } alt="user icon"/></Link>
            </nav>
        </header>
    );
}

export { Header }