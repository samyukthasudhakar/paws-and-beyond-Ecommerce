import { createContext, useContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartReducer } from '../reducers/cartReducer';
import {useAuth} from '../context/authContext'
import axios from 'axios'
import { CART_PATH } from "../utils/constants/apiEndPoints"
const cartContext = createContext(null);

function CartProvider( { children } ){

    const [ cartItems, setCartItems ] = useReducer(CartReducer, [])
    const { authState:{ isLoggedIn, token } } = useAuth()
    const navigateTo = useNavigate()

    const addToBag = async(product) => {
        if(isLoggedIn){
            try{
            const response = await axios.post(CART_PATH,
            {
                product: product
            },
            {
                headers: {
                    authorization: token,
                },
            })
            setCartItems({type: "SET_CART", payload:response.data.cart})
        }
            catch(error){
                console.log(error)
            }
        } 
        else{
            navigateTo("/login")
        }
    }

    const removeFromBag = async(product) => {
        try{
        const response = await axios.delete(`${CART_PATH}/${product._id}`,
        {
            headers: {
                authorization: token,
            },
        })
        setCartItems({type: "SET_CART", payload:response.data.cart})
    }
        catch(error){
            console.log(error)
        }
    }
    
    const updateBag = async(action, product) => {
        try{
            if(product.qty===1 && action==="decrement"){
                removeFromBag(product)
            }else{
            const response = await axios.post(`${CART_PATH}/${product._id}`,
            {
                action: {
                  type: action
                }
            },
            {
                headers: {
                    authorization: token,
                },
            })
            setCartItems({type: "SET_CART", payload:response.data.cart})
        }}
        catch(error){
            console.log(error)
        }
    }

    return (
        <cartContext.Provider value={{ cartItems, setCartItems, addToBag, removeFromBag, updateBag }}>
            { children }
        </cartContext.Provider>
    )
}

const useCart = () => useContext(cartContext)

export { CartProvider, useCart }