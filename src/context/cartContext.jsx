import { createContext, useContext, useReducer } from 'react';
import { CartReducer } from '../reducers/cartReducer';

const cartContext = createContext(null);

function CartProvider( { children } ){

    const [ cartItems, setCartItems ] = useReducer(CartReducer, [])

    return (
        <cartContext.Provider value={{ cartItems, setCartItems}}>
            { children }
        </cartContext.Provider>
    )
}

const useCart = () => useContext(cartContext)

export { CartProvider, useCart }