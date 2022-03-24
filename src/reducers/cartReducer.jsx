
function CartReducer( state, action){

    switch(action.type){
        case 'ADD_TO_CART':
            return [...state, {...action.payload, addedToCart:true, cartCount:1}]
        case 'REMOVE_FROM_CART':
            return [...state.filter(product => product._id!==action.payload._id)]
        case 'INCREMENT_PRODUCT_COUNT':
            currentCount = product.cartCount
            return [...state.map(product => (product._id===action.payload._id)?{return({...product, cartCount: product.cartCount+1})}:{return (product)})]
        case 'DECREMENT_PRODUCT_COUNT':
            return [...state.map(product => (product._id===action.payload._id)?{...product, cartCount: product.cartCount-1}:product)]
    }
}

export { CartReducer }