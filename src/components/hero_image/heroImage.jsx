import React from 'react';
import { heroImage } from '../../assets/images';

import './heroImage.css'

function HeroImage() {
    return (
        <div className="glass-container">
            <img className="flex-center mg-1 banner-img" src={ heroImage }
            alt="hero image" />
        </div>
    );
}

export { HeroImage }