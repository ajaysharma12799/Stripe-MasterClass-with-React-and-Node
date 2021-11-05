import React from 'react'
import { useCart } from 'react-use-cart';

const ProductCard = ({product}) => {
    const {title, price, category, image} = product
    const {addItem} = useCart()

    return (
        <div className="card rounded-0">
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <p className="card-text">{title}</p>
                <p className="card-text">{category}</p>
                <p className="card-text fw-bold">{price} $</p>
                <button onClick={() => addItem(product)} className="btn btn-primary rounded-0 w-100">Add To Cart</button>
            </div>
        </div>
    )
}

export default ProductCard
