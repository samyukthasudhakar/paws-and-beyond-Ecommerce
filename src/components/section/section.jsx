import React from 'react';

import './section.css'
import { ProductCard } from '../card/productCard/productCard';
import { productsData } from '../../data/products'

function Section(props){
    return (
        <div class="flex-column glass-container product-showcase">
            <div class="flex-column flex-center">
                <h3>{props.heading}</h3>
                <div class="flex-layout flex-wrap flex-center">
                {
                    productsData.map( product => {
                        return <ProductCard key={product.id} product={product}/>
                    })
                }
                <button class="cta-btn" >See More <i class="fa fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
        
    )
}

export { Section }