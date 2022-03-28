import React, { useEffect } from 'react';
import { Header, Footer, ProductCard, FilterSideBar } from '../../components/'
import { useProducts } from '../../context/productsContext'
import useScrollToTop from '../../utils/scrollToTop'
import getFilteredProducts from '../../utils/filterFunctions'
import {useAsyncServerCall} from '../../utils/hooks/useAsyncServerCall'
import {GET_PRODUCTS} from '../../utils/constants/apiEndPoints'

import './productListing.css'


function ProductListing(){
    let {data:{ products, sortByPrice, categoryFilters, typeFilters, ratingFilter }, productsDispatch} = useProducts()

    useAsyncServerCall(GET_PRODUCTS, productsDispatch, 'GET_PRODUCTS')
    
    useScrollToTop()
    
    const filteredProducts = getFilteredProducts( products, sortByPrice, categoryFilters, typeFilters, ratingFilter )
    return(
        <div>
          <Header />
          <div className="flex-layout">
            <FilterSideBar />
            <main className="flex-column flex-start productlist-container">
                <div className="flex-center">
                    <h3>Showing all Products</h3>
                    <p className="mg-rl-1">{`( Showing ${filteredProducts.length} products )`}</p>
                </div>
                <div className="flex-layout " style={{flexWrap:'wrap',width:'60rem'}}>
                {   
                    filteredProducts.length > 0 ?
                    filteredProducts.map(product => {
                        return <ProductCard key={product.id} product={product} />
                    }):
                    <h4>We do not have products matching the filters at the moment. Please try other filters 👈🏽</h4>
                }
                </div>
            </main> 
          </div>
          <Footer /> 
        </div>
    );
}

export { ProductListing }