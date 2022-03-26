import { createContext, useContext, useReducer } from "react";
import { ProductsReducer } from "../reducers/productsReducer";

const productsContext = createContext(null);

function ProductsProvider({ children }){

    const [data, productsDispatch] = useReducer(ProductsReducer,{
        products: [],
        sortByPrice: '',
        categoryFilters: [],
        typeFilters: [],
        ratingFilter: 0
    })

    return(
        <productsContext.Provider value={{data, productsDispatch}}>
            {children}
        </productsContext.Provider>
    )

}

const useProducts = () => useContext(productsContext)

export {ProductsProvider, useProducts}