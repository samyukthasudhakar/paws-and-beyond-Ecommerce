function CartReducer( state, action){
    switch(action.type){
        case 'SET_CART':
            return action.payload
        case 'CLEAR_CART':
            return []
    }
}

export { CartReducer }