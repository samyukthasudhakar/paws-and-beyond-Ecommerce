import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../context';
import './categories.css'
import { categories } from '../../data/categories'

function Categories(){

    const navigateTo = useNavigate()
    const { productsDispatch } = useProducts()

    const CategoryClickHandler = category => {
        productsDispatch({type:'CLEAR_ALL_FILTERS',payload:null})
        productsDispatch({type:'SET_FILTER_BY_CATEGORY',payload:category})
        navigateTo('/products')
    }

    return (
        <div class="flex-column flex-center " style={{margin: '2rem'}}>
            <h2 className="mg-tb-1">Categories</h2>
            <div className='flex-layout'>
                {
                    categories.map( ({icon, category}) => (
                        <div className="category-container flex-column flex-center" style={{width: '10rem'}} onClick={() => CategoryClickHandler(category)}>
                            <img className="category-img" src= {icon}
                                alt="dog icon"/>
                                <span className="txt-bold">{category}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export { Categories }