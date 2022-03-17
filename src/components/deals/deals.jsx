import React from 'react';

import './deals.css'
import { ProductCard } from '../card/productCard/productCard';
import { productsData } from '../../data/products'

function Deals(){
    return (
        <div class="flex-column glass-container product-showcase">
            <div class="flex-column flex-center">
                <h3>Today's Deals</h3>
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

export { Deals }