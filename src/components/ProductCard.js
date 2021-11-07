import React from 'react'
import { useCart } from 'react-use-cart';

const ProductCard = ({product}) => {
    const {title, price, image} = product
    const {addItem} = useCart()

    return (
        <div className="card rounded-0 mt-2 mb-2">
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h5 className="card-text fw-light badge bg-success fw-bold rounded-0">Price: {Math.trunc(price) * 50} ₹</h5>
                <button 
                    className="btn btn-primary rounded-0 mt-2 w-100" 
                    onClick={() => addItem(product)}
                >
                    Add To Cart
                </button>
            </div>
        </div>
    )
}

export default ProductCard
