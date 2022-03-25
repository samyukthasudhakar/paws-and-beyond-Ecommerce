import { createContext, useContext, useState } from 'react';

const wishListContext = createContext(null);

function WishListProvider( { children } ){

    const [ wishList, setWishList ] = useState([])

    function addToWishList(product){
        setWishList([...wishList,{...product, addedToWishList:true}])
    }

    return (
        <wishListContext.Provider value={{ wishList, setWishList, addToWishList }}>
            { children }
        </wishListContext.Provider>
    )
}

const useWishList = () => useContext(wishListContext)

export { WishListProvider, useWishList}