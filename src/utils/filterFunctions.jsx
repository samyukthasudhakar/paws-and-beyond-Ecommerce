function sortByPrice( products, sortType ){
    if (sortType==='low to high'){
        return [...products].sort((a,b)=>a.price -b.price)}
    if (sortType==='high to low'){
        return [...products].sort((a,b)=>b.price - a.price )}
    return products
}

function filterByCategory( products, categoryFilters ){
    return (categoryFilters.length > 0 ?
    products.filter( product => categoryFilters.includes( product.category )):
    products)
}

function filterByProductType ( products, typeFilters ){
    return (typeFilters.length > 0?
    products.filter( product => typeFilters.includes( product.type )):
    products)
}

function filterByRating( products, ratingFilter ){
    return (ratingFilter != 0 ?
    products.filter( product => product.rating >= ratingFilter):
    products)

}

export default function getFilteredProducts( products, sortBy, categoryFilters, typeFilters, ratingFilter ){
    
    const filteredByRating = filterByRating( products, ratingFilter )
    const filteredByType = filterByProductType( filteredByRating, typeFilters)
    const filteredByCategory = filterByCategory( filteredByType, categoryFilters )
    const sortedByPrice = sortByPrice( filteredByCategory, sortBy)
    
    return sortedByPrice
}