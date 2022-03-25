import './emptySection.css'
import {Link} from 'react-router-dom'

function EmptySection( { name, image} ){
    return(
        <div className='flex-column flex-center empty-container'>
            <img src={image} alt={`Empty ${name} image`} className='empty-image' />
            <h3 className='empty-heading'>There are no products in your {name}.</h3>
            <Link to="/products" className="cta-btn">Browse Products</Link>
        </div>
    )
}

export {EmptySection}