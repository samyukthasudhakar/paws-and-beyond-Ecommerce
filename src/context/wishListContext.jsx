import { createContext, useContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom'
import { WishListReducer } from '../../src/reducers/wishlistReducer';
import { useAuth } from './authContext'

const wishListContext = createContext(null);

function WishListProvider( { children } ){

    const [ wishList, setWishList ] = useReducer( WishListReducer, [])
    const { authState:{ isLoggedIn } } = useAuth()
    const navigateTo = useNavigate()

    function toggleWishList(product){
        isLoggedIn ? setWishList({type:'TOGGLE_WISHLIST',payload:product})
        : navigateTo("/login");
    }

    return (
        <wishListContext.Provider value={{ wishList, toggleWishList, setWishList }}>
            { children }
        </wishListContext.Provider>
    )
}

const useWishList = () => useContext(wishListContext)

export { WishListProvider, useWishList}