import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../context';
import {useAsyncServerCall} from '../../utils/hooks/useAsyncServerCall'
import './categories.css'
import { GET_CATEGORIES } from '../../utils/constants/apiEndPoints'

function Categories(){

    const { data:{ categories }, productsDispatch } = useProducts()
    useAsyncServerCall(GET_CATEGORIES, productsDispatch, 'GET_CATEGORIES')

    const navigateTo = useNavigate()

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
                                alt="category icon"/>
                                <span className="txt-bold">{category}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export { Categories }