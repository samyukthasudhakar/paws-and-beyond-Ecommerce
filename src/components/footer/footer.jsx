import React from 'react';
import { Link } from "react-router-dom";

import './footer.css'

function Footer(){
    return(
        <footer className="flex-column flex-center footer-container">
            <div className="flex-space-btwn footer-links-container">
                <div className="flex-column">
                    <span className="p-sm txt-bold">Get to Know Us</span>
                    <Link className="footer-link" to="#">About Us</Link>
                    <Link className="footer-link" to="#">Careers</Link>
                    <Link className="footer-link" to="#">Press Releases</Link>
                    <Link className="footer-link" to="#">p&b cares</Link>
                    <Link className="footer-link" to="#">Gift a smile</Link>  
                </div>
                <div className="flex-column">
                    <span className="p-sm txt-bold">Connect with Us</span>
                    <Link className="footer-link" to="#">Facebook</Link>
                    <Link className="footer-link" to="https://twitter.com/samyuktha7300">Twitter</Link>
                    <Link className="footer-link" to="#">Instagram</Link>  
                </div>
                <div className="flex-column">
                    <span className="p-sm txt-bold">Make Money with Us</span>
                    <Link className="footer-link" to="#">Sell on p&b</Link>
                    <Link className="footer-link" to="#">Become an Affiliate</Link>
                    <Link className="footer-link" to="#">Advertise your Products</Link>
                </div>
                <div className="flex-column">
                    <span className="p-sm txt-bold">Let us help you</span>
                    <Link className="footer-link" to="#">Returns Center</Link>
                    <Link className="footer-link" to="#">100% Purchase Protection</Link>
                    <Link className="footer-link" to="#">Help</Link>  
                </div>
            </div>
            
            <div className="txt-center footer-credits">
                <span>made with ❤️ by <Link className="footer-link fs-1rem" to="https://github.com/samyukthasudhakar">Samyuktha Sudahkar</Link> | © 2022 all rights reserved</span>
            </div>
        </footer>
    );
}

export { Footer }