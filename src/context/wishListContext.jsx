import { createContext, useContext, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { WishListReducer } from '../../src/reducers/wishlistReducer';
import { useAuth } from './authContext'
import checkIfPresent from '../utils/checkIfPresent'
import { ADD_TO_WISHLIST, DELETE_FROM_WISHLIST } from '../utils/constants/apiEndPoints'
import axios from 'axios'

const wishListContext = createContext(null);

function WishListProvider( { children } ){

    const [ wishList, wishListDispatch ] = useReducer(WishListReducer, [])
    const { authState:{ isLoggedIn, token } } = useAuth()
    const navigateTo = useNavigate()

    const addToWishList = async (item) => {
        try{
            const response = await axios.post(ADD_TO_WISHLIST, 
            {
                product: item
            },
            {
                headers: {
                    authorization: token,
                },
            })
            wishListDispatch({type: 'SET_WISHLIST', payload: response.data.wishlist})
        }catch(error){
            console.log(error)
        }
    }

    const deleteFromWishList = async (product) => {
        try{
            const response = await axios.delete(`${DELETE_FROM_WISHLIST}${product._id}`,
            {
                headers: {
                    authorization: token,
                },
            })
            wishListDispatch({type: 'SET_WISHLIST', payload: response.data.wishlist})
        }catch(error){
            console.log(error)
        }
    }

    function toggleWishList(product){
        isLoggedIn ? 
        checkIfPresent(product._id, wishList)?
        deleteFromWishList(product)
        :addToWishList(product)
        :navigateTo('/login')

    }

    return (
        <wishListContext.Provider value={{ wishList, toggleWishList, wishListDispatch }}>
            { children }
        </wishListContext.Provider>
    )
}

const useWishList = () => useContext(wishListContext)

export { WishListProvider, useWishList}