import React from 'react';

import './cartCard.css'
import { useCart } from '../../../context'

function CartCard({product}){
    const { image, discount, name, price, cartCount, description } = product
    const { setCartItems } = useCart()

    return(
        <div>
            <div className="flex-space-btwn cart-item-pink">
            <div>
                <img className="cart-item-img" src={image}
                alt="product image"/>
            </div>
            <div className="mg-tb-1 flex-col-space-btwn">
                <div>
                    <h3>{name}</h3>
                    <p className='card-description'>{ description }</p>
                </div>
                <div>
                    {
                        (discount!='') ? (
                            <div>
                                <span className="card-product-price price-lg">{`₹${price-((price*discount)/100)}`}</span>
                                <span className="card-product-actual-price">{`₹${price}`}</span>
                                <span className="card-offer-percent">{`${discount}% off`}</span>
                            </div>
                        ):(
                            <span className="card-product-price price-lg">{`₹${price}`}</span>
                        )
                    }
                    
                </div>
            </div>
            <div className="flex-center">
                <button className="qty-btn">-</button>
                <span className="mg-rl-1">{cartCount}</span>
                <button className="qty-btn" onClick={()=>setCartItems({type:'INCREMENT_PRODUCT_COUNT',action:product})}>+</button>
            </div>
            <div className="cart-item-price flex-center txt-bold"> 7000 </div>
            <div className="flex-layout">
                <button className="cart-card-dismiss" onClick={()=>setCartItems({type:'REMOVE_FROM_CART',payload:product})}><i className="fa fa-times"></i></button>
            </div>
            </div>
        </div>
    )
}

export { CartCard }