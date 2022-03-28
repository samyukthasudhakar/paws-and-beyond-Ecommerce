import React from 'react';

import './cartCard.css'
import { useWishList, useCart } from '../../../context'

function CartCard({product}){
    const { image, discount, name, price, cartCount, description } = product
    const { wishList, toggleWishList } = useWishList()
    const { setCartItems } = useCart()
    let totalPrice = discount ? (price-((price*discount)/100))*cartCount : (price*cartCount)

    function moveToWishList(product){
        toggleWishList(product)
        setCartItems({type:'REMOVE_FROM_CART',payload:product})
    }

    return(
        <div>
            <div className="flex-space-btwn cart-item-pink">
            <div>
                <img className="cart-item-img" src={image}
                alt="product image"/>
            </div>
            <div className="mg-tb-1 flex-col-space-btwn" style={{width:'15rem'}}>
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
            <div className="flex-column flex-center" style={{width:'15rem', justifyContent:'space-around',padding:'3rem 0 0 0'}}>
                <div className='flex-layout space-between' style={{width:'15rem'}}>
                    <div>
                        <button className="qty-btn" onClick={()=>setCartItems({type:'DECREMENT_PRODUCT_COUNT',payload:product})}>-</button>
                        <span className="mg-rl-1 qty-value">{cartCount}</span>
                        <button className="qty-btn" onClick={()=>setCartItems({type:'INCREMENT_PRODUCT_COUNT',payload:product})}>+</button>
                    </div>
                    <div className="cart-total-price flex-center txt-bold"> {totalPrice} </div>
                </div>
                {
                    wishList.findIndex(item => item._id==product._id)<0 && (<button className='moveToWishList' style={{alignSelf:'flex-end'}} onClick={()=>moveToWishList(product)}>Move to WishList</button>)
                }
            </div>
            <div className="flex-layout">
                <button className="cart-card-dismiss" onClick={()=>setCartItems({type:'REMOVE_FROM_CART',payload:product})}><i className="fa fa-times"></i></button>
            </div>
            </div>
        </div>
    )
}

export { CartCard }