import React from 'react';
import { Link } from 'react-router-dom';

import './section.css'
import { ProductCard } from '../card/productCard/productCard';
import { products } from '../../backend/db/products'

function Section(props){
    return (
        <div class="flex-column glass-container product-showcase">
            <div class="flex-column flex-center">
                <h3>{props.heading}</h3>
                <div class="flex-layout flex-wrap flex-center">
                {   
                    products.slice(0,3).map( product => {  
                        return <ProductCard key={product.id} product={product}/>
                    })
                }
                <Link to="/products">
                <button class="cta-btn" >See More <i class="fa fa-arrow-right"></i></button>
                </Link>
                </div>
            </div>
        </div>
        
    )
}

export { Section }