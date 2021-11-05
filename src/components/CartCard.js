import React from 'react'

const CartCard = ({item, updateItemQuantity, removeItem}) => {
    return (
        <div className="card rounded-0 mt-2 mb-2 w-100">
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <div className="form-control rounded-0 d-flex">
                <button
                    className="btn btn-success w-25 rounded-0"
                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                    -
                </button>
                <p className="w-50 text-center ps-1 rounded-0">{item.quantity}</p>
                <button
                    className="btn btn-success w-25 rounded-0"
                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                    +
                </button>
                </div>
                <button 
                    className="btn btn-danger rounded-0 mt-2 w-100" 
                    onClick={() => removeItem(item.id)}
                >
                    Remove From Cart
                </button>
            </div>
        </div>
    )
}

export default CartCard
