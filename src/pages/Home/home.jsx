import React from 'react';
import { Header, HeroImage, Footer, WhyUsSection, Categories, Section } from '../../components'

import './home.css'

function HomePage(){
    return(
        <div className="home-bg">
            <Header />
            <div className="mg-1 flex-center flex-column">
            <HeroImage />
            <WhyUsSection />
            <Categories />
            <Section heading={"Today's Deals"}/>
            <Section heading={"Treding Products"}/>
            <Footer />
            </div>
        </div>
    );
    
}

export { HomePage }