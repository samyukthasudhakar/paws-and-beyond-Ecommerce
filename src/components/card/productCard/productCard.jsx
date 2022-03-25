import React from 'react';
import { Link } from 'react-router-dom';

import './productCard.css'
import { bag } from '../../../assets/icons'
import { useWishList, useCart } from '../../../context'


function ProductCard ( { product } ){
    const { badge, image, discount, name, price, addedToWishList } = product

    const { wishList ,setWishList } = useWishList()
    const { cartItems, setCartItems } = useCart()
    
    const addedToCart = cartItems.filter(item => item._id===product._id)
    
    return (
        <div className="product-card">
            <img className="product-image" src={image}
            alt="product image"/>
            {badge?(<span className="card-badge">{badge}</span>):(null)}
            <button className="card-like" onClick={ () => setWishList({type:'TOGGLE_WISHLIST',payload:product}) }>
                {
                    (wishList.findIndex(item => item._id==product._id)<0)?(
                        <i className='fa fa-heart-o'></i>
                    ):(
                        <i className='fa fa-heart'></i>
                    )
                }
            </button>
            <p className="product-title">{name}</p>
            <div className="product-pricing">
                <div className="flex-space-btwn flex-center">
                    <div>
                    {
                        (discount!='') ? (
                            <div>
                                <span className="card-product-price">{`₹${price-((price*discount)/100)}`}</span>
                                <span className="card-product-actual-price">{`₹${price}`}</span>
                            </div>
                        ):(
                            <span className="card-product-price">{`₹${price}`}</span>
                        )
                    }
                    </div>
                </div>
            </div>
            {
                (cartItems.findIndex(item => item._id==product._id)<0) ?
                (
                    <button className="addToCart-btn" title="Add to Bag" onClick={() => setCartItems({type:'ADD_TO_CART', payload: product})}>
                        <div className='flex-layout flex-center' style={{verticalAlign:'center'}}>
                            <span style={{margin:'0 8px'}}>Add to Bag</span>
                            <img className="button-img" src={ bag } alt="bag icon"/>
                        </div>
                    </button>
                ):(
                    <Link to='/cart'>
                    <button className="addedToCart-btn" title="Go to Bag">
                        <div className='flex-layout flex-center' style={{verticalAlign:'center'}}>
                            <span style={{margin:'0 8px'}}>Go to Bag</span>
                            <img className="button-img" src={ bag } alt="bag icon"/>
                        </div>
                    </button>
                    </Link>
                )
            }
            
        </div>
    );
}

export { ProductCard }