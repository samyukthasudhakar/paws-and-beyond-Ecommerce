import React from 'react';

import './cart.css'
import { Header, Footer, CartCard, EmptySection } from '../../components'
import { emptyBag } from '../../assets/images';
import { useCart } from '../../context'

function CartPage(){
    
    const { cartItems, setCartItems } = useCart()
    let cartProductsCount = cartItems.length
    let totalAmount = cartItems ? cartItems.reduce((acc, curr) => acc + curr.price * curr.cartCount, 0) : 0;
    let discountAmount = cartItems ? cartItems.reduce((acc, curr) => acc + ((curr.price * curr.discount)/100)*curr.cartCount, 0) : 0;
    let convenienceFee = 100

    return(
        <div>
            <Header />
            <div>
            {
                cartProductsCount > 0 ? (
                    <div className="flex-column mg-tb-1">
                    <div className="cart-header">
                        <h3 className="cart-heading" style={{margin:0}}>Cart Summary {`( ${cartProductsCount} products)`}</h3>
                        <button className="cta-btn" onClick={()=>setCartItems({type:'CLEAR_CART'})}>Clear Cart</button>
                    </div>
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
                                    <span>{`₹${totalAmount}`}</span>
                                </div>
                                <div className="flex-space-btwn mg-tb-1">
                                    <span>Discount on MRP</span>
                                    <span>{`₹${discountAmount}`}</span>
                                </div>
                                <div className="flex-space-btwn mg-tb-1">
                                    <span>Convenience Fee</span>
                                    <span>{`₹${convenienceFee}`}</span>
                                </div>
                                <div className="flex-space-btwn mg-tb-1">
                                    <span>Total Amount</span>
                                    <span>{ `₹${totalAmount - discountAmount + convenienceFee }` }</span>
                                </div>
                            </div>
                            <button className="checkout-btn">Checkout</button>
                        </div>
                    </div>
                    </div>
                ):(
                    <div className='mg-tb-3'>
                    <EmptySection name="bag" image={emptyBag}/>
                    </div>
                )
            }
        
            </div>
           <Footer />
        </div>
    )
}

export { CartPage }