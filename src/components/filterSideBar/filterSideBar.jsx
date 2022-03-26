import {useProducts} from '../../context/productsContext'

function FilterSideBar(){

    const { data:{sortByPrice, categoryFilters, typeFilters, ratingFilter}, productsDispatch } = useProducts()
    const categories = ['Dogs', 'Cats', 'Birds', 'Fishes', 'Bunnies']
    const productType = ['Accessory', 'Food', 'Medicine', 'Treat', 'Toy']

    return <aside className="filter-menu">
                <div className="flex-space-btwn">
                    <h4>Filters</h4>
                    <button className="text-button txt-bold" onClick={()=>productsDispatch({type:'CLEAR_ALL_FILTERS',payload:null})}>Clear</button>
                </div>
                <div className="mg-tb-1">
                    <h4>Price (Sort By)</h4>
                    <div className="flex-column">
                        <label><input type="radio" name='sortBy' onClick={()=>productsDispatch({type:'SET_SORT_BY_PRICE',payload:'low to high'})} checked={sortByPrice==="low to high"}/>Low to High</label>
                        <label><input type="radio" name='sortBy' onClick={()=>productsDispatch({type:'SET_SORT_BY_PRICE',payload:'high to low'})} checked={sortByPrice==="high to low"}/>High to Low</label>
                    </div>
                </div>
                <div className="mg-tb-1">
                    <h4>Category</h4>
                    <div className="flex-column">
                        {
                            categories.map(category => {
                                return(<label><input type="checkbox" name="category" onClick={()=>productsDispatch({type:'SET_FILTER_BY_CATEGORY',payload:category})} checked={categoryFilters.includes(category)}/>{category}</label>)
                            })
                        }
                    </div>
                </div>
                <div className="mg-tb-1">
                    <h4>Product Type</h4>
                    <div className="flex-column">
                        {
                            productType.map(type => {
                                return(<label><input type="checkbox" name="type" onClick={()=>productsDispatch({type:'SET_FILTER_BY_TYPE',payload:type})} checked={typeFilters.includes(type)}/>{type}</label>)
                            })
                        }
                    </div>
                </div>
                <div className="mg-tb-1">
                    <h4>Rating</h4>
                    <input type="range" id="rating" min="1" max="5" step="1" onChange={(e)=>productsDispatch({type:'SET_RATING_FILTER',payload:e.target.value})}/>
                </div>
            </aside>
}

export { FilterSideBar }