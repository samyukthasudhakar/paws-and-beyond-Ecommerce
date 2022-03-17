import React from 'react';
import { Link } from "react-router-dom";

import './categories.css'
import { categories } from '../../data/categories'

function Categories(){
    return (
        <div class="flex-column flex-center " style={{margin: '2rem'}}>
            <h3 className="mg-tb-1">Categories</h3>
            <div className='flex-layout'>
                {
                    categories.map( category => (
                        <div className="category-container" style={{width: '8rem'}}>
                            <Link to="/products" className="flex-column flex-center">
                                <img className="category-img" src= {category.icon}
                                alt="dog icon"/>
                                <span className="txt-bold">{category.category}</span>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export { Categories }