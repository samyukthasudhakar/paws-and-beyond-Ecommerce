import React from 'react';

import './wishList.css'
import { Header, Footer, ProductCard, EmptySection } from '../../components'
import { emptyWishList } from '../../assets/images';
import { useWishList } from '../../context'

function WishListPage(){

    const { wishList, addToWishList } = useWishList()
    let productCount = wishList.length

    return(
        <div>
           <Header />
           <div className='flex-column flex-center '>
           <p className='wishlist-heading p-lg'> My WishList {productCount!=0?(`( ${productCount} products )`):('')}</p>
           <div class="flex-layout showcase-products">
            {
                (productCount!=0) ? (

                    wishList.map( product => {
                        return (<ProductCard key={product.id} product={product}/>)
                    })):(
                    <EmptySection name="wishlist" image={emptyWishList}/>
                )
            }
            </div>
           </div>
           <Footer />
        </div>
    );
}

export { WishListPage }