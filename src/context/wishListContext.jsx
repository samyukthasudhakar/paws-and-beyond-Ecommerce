import { createContext, useContext, useReducer } from 'react';
import { WishListReducer } from '../../src/reducers/wishlistReducer';

const wishListContext = createContext(null);

function WishListProvider( { children } ){

    const [ wishList, setWishList ] = useReducer( WishListReducer, [])

    return (
        <wishListContext.Provider value={{ wishList, setWishList }}>
            { children }
        </wishListContext.Provider>
    )
}

const useWishList = () => useContext(wishListContext)

export { WishListProvider, useWishList}