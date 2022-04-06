import React from 'react';
import { Header, HeroImage, Footer, WhyUsSection, Categories, Section } from '../../components'
import useDocumentTitle from '../../utils/hooks/useDocumentTitle'
import './home.css'

function HomePage(){

    useDocumentTitle('Paws & Beyond | Home')

    return(
        <div className="home-bg">
            <Header />
            <div className="mg-1 flex-center flex-column">
            <HeroImage />
            <WhyUsSection />
            <Categories />
            <Section heading={"Today's Deals"}/>
            <Section heading={"Treding Products"}/>
            </div>
            <Footer />
        </div>
    );
    
}

export { HomePage }