import React from 'react';

import './cart.css'
import { Header, Footer, ProductCard, CartCard, EmptySection } from '../../components'
import { emptyBag } from '../../assets/images';
import { useCart } from '../../context'

function CartPage(){

    const { cartItems } = useCart()
    let productsCount = cartItems.length

    return(
        <div>
            <Header/>
            <div>
            {
                (productsCount===0)?(
                    <div className='mg-tb-3'>
                    <EmptySection name="bag" image={emptyBag}/>
                    </div>
                ):(
                    <div className="flex-column mg-tb-1">
                    <h2 className="cart-heading">Cart Summary {`( ${productsCount} products)`}</h2>
                    <div className="flex-layout space-around">
                        <div className="product-list mg-rl-1" style={{marginLeft:"3rem"}}>
                        {
                            cartItems.map( product => {
                                return (<CartCard key={product.id} product={product}/>)
                            })
                        }
                        </div>
                        <div className="cart-bill" style={{width:'22rem'}}>
                            <div className="coupon-container">
                                <h3>Coupons</h3>
                                <button className="cta-btn"><i className="fa fa-tag"></i> Apply coupons</button>
                            </div>
                            <div className="flex-col-layout mg-tb-1">
                                <h3>Price Details</h3>
                                <div className="flex-space-btwn mg-tb-1">
                                    <span>Total MRP</span>
                                    <span>₹5076.00</span>
                                </div>
                                <div className="flex-space-btwn mg-tb-1">
                                    <span>Discount on MRP</span>
                                    <span>₹1308.28</span>
                                </div>
                                <div className="flex-space-btwn mg-tb-1">
                                    <span>Convenience Fee</span>
                                    <span>₹99</span>
                                </div>
                                <div className="flex-space-btwn mg-tb-1">
                                    <span>Total Amount</span>
                                    <span>₹3767.72</span>
                                </div>
                            </div>
                            <button className="checkout-btn">Checkout</button>
                        </div>
                    </div>
                    </div>
                )}
        
            </div>
           <Footer />
        </div>
    )
}

export { CartPage }