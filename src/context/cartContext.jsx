import { createContext, useContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartReducer } from '../reducers/cartReducer';
import {useAuth} from '../context/authContext'

const cartContext = createContext(null);

function CartProvider( { children } ){

    const [ cartItems, setCartItems ] = useReducer(CartReducer, [])
    const { authState:{ isLoggedIn } } = useAuth()
    const navigateTo = useNavigate()

    function addToBag(product){
        isLoggedIn ? setCartItems({type:'ADD_TO_CART',payload:product})
        : navigateTo("/login");
    }

    return (
        <cartContext.Provider value={{ cartItems, setCartItems, addToBag}}>
            { children }
        </cartContext.Provider>
    )
}

const useCart = () => useContext(cartContext)

export { CartProvider, useCart }