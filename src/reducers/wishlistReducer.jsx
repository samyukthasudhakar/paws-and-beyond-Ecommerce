function WishListReducer(state, action){
    switch(action.type){
        case 'SET_WISHLIST':{
            return action.payload
        }
        case 'CLEAR_WISHLIST':
            return []
    }
}

export { WishListReducer }