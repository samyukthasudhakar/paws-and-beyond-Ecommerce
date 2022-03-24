import React from 'react';
import { Header, Footer, ProductCard } from '../../components/'
import { products } from '../../backend/db/products'

import './productListing.css'

function ProductListing(){
    
    let productsCount = products.length

    return(
        <div>
          <Header />
          <div className="flex-layout">
            <aside className="filter-menu">
                <div className="flex-space-btwn">
                    <h4>Filters</h4>
                    <button className="text-button txt-bold">Clear</button>
                </div>
                <div className="mg-tb-1">
                    <h4>Price</h4>
                    <input type="range" min="100" max="10000" value="50" />
                </div>
                <div className="mg-tb-1">
                    <h4>Category</h4>
                    <div className="flex-column">
                        <label><input type="checkbox" name="category" />Accessories</label>
                        <label><input type="checkbox" name="category" />Food</label>
                        <label><input type="checkbox" name="category" />Medicine</label>
                        <label><input type="checkbox" name="category" />Toys</label>
                        <label><input type="checkbox" name="category" />Treats</label>
                    </div>
                </div>
                <div className="mg-tb-1">
                    <h4>Rating</h4>
                    <div className="flex-column">
                        <label><input type="radio" name="rating" />4 stars & above</label>
                        <label><input type="radio" name="rating" />3 stars & above</label>
                        <label><input type="radio" name="rating" />2 stars & above</label>
                        <label><input type="radio" name="rating" />1 star & above</label>
                    </div>
                </div>
                <div className="mg-tb-1">
                    <h4>Sort By</h4>
                    <div className="flex-column">
                        <label><input type="checkbox" />Price - Low to High</label>
                        <label><input type="checkbox" />Price - High to Low</label>
                    </div>
                </div>
                <div className="mg-tb-1">
                    <h4>Discount</h4>
                    <div className="flex-column">
                        <label><input type="radio" />50% and above</label>
                        <label><input type="radio" />40% and above</label>
                        <label><input type="radio" />30% and above</label>
                        <label><input type="radio" />20% and above</label>
                        <label><input type="radio" />10% and above</label>
                    </div>
                </div>
            </aside>
            <main className="flex-column flex-start productlist-container">
                <div className="flex-center">
                    <h3>Showing all Products</h3>
                    <p className="mg-rl-1">{`( Showing ${productsCount} products )`}</p>
                </div>
                <div className="flex-layout " style={{flexWrap:'wrap',width:'60rem'}}>
                {
                    products.map(product => {
                        return <ProductCard key={product.id} product={product} />
                    })
                }
                </div>
            </main> 
          </div>
          <Footer /> 
        </div>
    );
}

export { ProductListing }