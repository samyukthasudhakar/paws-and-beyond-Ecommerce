import React from 'react';

import './productCard.css'

import { bag } from '../../../assets/icons'

function ProductCard ( {product} ){
    const { name, image, badge, price, inStock } = product;
    return (
        <div className="product-card">
            <img className="product-image" src={image}
            alt="product image"/>
            {badge.active?(<span className="card-badge">{badge.type}</span>):(null)}
            <button className="card-like"><i className="fa fa-heart-o"></i></button>
            <span className="product-title">{name}</span>
            <div className="product-pricing">
                <div className="flex-space-btwn flex-center">
                    <div>
                        <span className="card-product-price">{price['current']}</span>
                        <span className="card-product-actual-price">{price.actual}</span>
                    </div>
                </div>
            </div>
            <button className="checkout-btn" title="Add to Bag">
            
                <div className='flex-layout flex-center' style={{verticalAlign:'center'}}>
                    <span style={{margin:'0 8px'}}>Add to Bag</span>
                    <img className="button-img" src={ bag } alt="bag icon"/>
                </div>
                
            </button>
        </div>
    );
}

export { ProductCard }