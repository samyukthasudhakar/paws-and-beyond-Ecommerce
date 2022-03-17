import React from 'react';
import { heroImage } from '../../assets/images';

import './heroImage.css'

function HeroImage() {
    return (
        <div class="glass-container">
            <img class="flex-center mg-1 banner-img" src={ heroImage }
            alt="hero image" />
        </div>
    );
}

export { HeroImage }