import React from 'react';

import './productCard.css'
import { bag } from '../../../assets/icons'
import { useWishList, useCart } from '../../../context'


function ProductCard ( { product } ){
    const { badge, image, discount, name, price, addedToWishList } = product

    const { addToWishList } = useWishList()
    const { setCartItems } = useCart()
    
    return (
        <div className="product-card">
            <img className="product-image" src={image}
            alt="product image"/>
            {badge?(<span className="card-badge">{badge}</span>):(null)}
            <button className="card-like" onClick={ () => addToWishList(product) }><i className={addedToWishList?('fa fa-heart'):('fa fa-heart-o')}></i></button>
            <span className="product-title">{name}</span>
            <div className="product-pricing">
                <div className="flex-space-btwn flex-center">
                    <div>
                        <span className="card-product-price">{`₹${price-((price*discount)/100)}`}</span>
                        <span className="card-product-actual-price">{`₹${price}`}</span>
                    </div>
                </div>
            </div>
            <button className="addToCart-btn" title="Add to Bag" onClick={() => setCartItems({type:'ADD_TO_CART', payload: product})}>
                <div className='flex-layout flex-center' style={{verticalAlign:'center'}}>
                    <span style={{margin:'0 8px'}}>Add to Bag</span>
                    <img className="button-img" src={ bag } alt="bag icon"/>
                </div>
            </button>
        </div>
    );
}

export { ProductCard }