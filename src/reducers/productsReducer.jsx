export function ProductsReducer(state, action){
    switch(action.type){
        case 'GET_PRODUCTS':
            return {...state, products: action.payload}
        case 'SET_SORT_BY_PRICE':
            return {...state, sortByPrice: action.payload}
        case 'SET_FILTER_BY_CATEGORY':
            return {...state, categoryFilters: state.categoryFilters.includes(action.payload)?state.categoryFilters.filter(category=>category!==action.payload):
            [...state.categoryFilters,action.payload]}
        case "SET_FILTER_BY_TYPE":
            return {...state, typeFilters: state.typeFilters.includes(action.payload)?state.typeFilters.filter(category=>category!==action.payload):
                [...state.typeFilters,action.payload]}
        case 'SET_RATING_FILTER':
            return {...state, ratingFilter: action.payload}
        case 'CLEAR_ALL_FILTERS':
            return {...state, sortByPrice:'', categoryFilters:[], typeFilters:[], ratingFilter: 0}
        
    }
}