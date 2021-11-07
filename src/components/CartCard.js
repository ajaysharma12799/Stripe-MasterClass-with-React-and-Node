import React from 'react'

const CartCard = ({item, updateItemQuantity, removeItem}) => {
    return (
        <div className="cart-card rounded-0 mt-2 mb-2">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={item.image} class="img-fluid rounded-start" alt={item.image} />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{item.title}</h5>
                        <h6 class="card-text rounded-0 badge bg-success">
                            <small class="fs-5 fw-bold">
                                Price: {item.quantity === 1 ? Math.trunc(item.itemTotal) * 50 : Math.trunc(item.itemTotal) * 50} ₹
                            </small>
                        </h6>
                        <br />
                        <h6 class="card-text rounded-0 badge bg-success"><small class="fs-6 fw-bold">Quantity: {item.quantity}</small></h6>
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
            </div>
        </div>
    )
}

export default CartCard
