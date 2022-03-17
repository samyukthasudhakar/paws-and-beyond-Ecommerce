import React from 'react';

import './productCard.css'

import { blackBag as bag } from '../../../assets/icons'

function ProductCard ( {product} ){
    const { name, image, badge, price, inStock } = product;
    console.log(bag)
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
                    <button className="text-button" title="Add to Bag">
                        <img className="button-img" src={ bag } alt="bag icon"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export { ProductCard }