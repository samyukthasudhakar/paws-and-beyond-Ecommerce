function WishListReducer(state, action){
    
    switch(action.type){
        case 'TOGGLE_WISHLIST':{
            if (state.findIndex(item => item._id==action.payload._id)<0){
                return [...state, action.payload]
            }else{
                return [...state.filter(item => item._id!=action.payload._id)]
            }
    }}
}

export { WishListReducer }