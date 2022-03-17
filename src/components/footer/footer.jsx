import React from 'react';

import './footer.css'

function Footer(){
    return(
        <footer className="flex-column flex-center footer-container">
            <div className="flex-space-btwn footer-links-container">
                <div className="flex-column">
                    <span className="p-sm txt-bold">Get to Know Us</span>
                    <a className="footer-link" href="#">About Us</a>
                    <a className="footer-link" href="#">Careers</a>
                    <a className="footer-link" href="#">Press Releases</a>
                    <a className="footer-link" href="#">p&b cares</a>
                    <a className="footer-link" href="#">Gift a smile</a>  
                </div>
                <div className="flex-column">
                    <span className="p-sm txt-bold">Connect with Us</span>
                    <a className="footer-link" href="#">Facebook</a>
                    <a className="footer-link" href="https://twitter.com/samyuktha7300">Twitter</a>
                    <a className="footer-link" href="#">Instagram</a>  
                </div>
                <div className="flex-column">
                    <span className="p-sm txt-bold">Make Money with Us</span>
                    <a className="footer-link" href="#">Sell on p&b</a>
                    <a className="footer-link" href="#">Become an Affiliate</a>
                    <a className="footer-link" href="#">Advertise your Products</a>
                </div>
                <div className="flex-column">
                    <span className="p-sm txt-bold">Let us help you</span>
                    <a className="footer-link" href="#">Returns Center</a>
                    <a className="footer-link" href="#">100% Purchase Protection</a>
                    <a className="footer-link" href="#">Help</a>  
                </div>
            </div>
            
            <div className="txt-center footer-credits">
                    <span>made with ❤️ by <a className="footer-link fs-1rem" href="https://github.com/samyukthasudhakar">Samyuktha Sudahkar</a> | © 2022 all rights reserved</span>
            </div>
        </footer>
    );
}

export { Footer }