import React from 'react';
import { Header, HeroImage, Footer, WhyUsSection, Categories, Deals, Trending } from '../../components'

import './home.css'

function HomePage(){
    return(
        <div className="home-bg">
            <Header />
            <div className="mg-1 flex-center flex-column">
            <HeroImage />
            <WhyUsSection />
            <Categories />
            <Deals />
            <Trending />
            <Footer />
            </div>
        </div>
    );
    
}

export { HomePage }