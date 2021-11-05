import React from 'react'
import { useCart } from 'react-use-cart';
import CartCard from '../components/CartCard';

const CartScreen = () => {
    const {
        isEmpty, items, updateItemQuantity, removeItem,
    } = useCart();

    const calculatePrice = () => {
        return items.reduce((acc, item) => acc + item.price, 0);
    }

    if (isEmpty) return <p>Your cart is empty</p>;
    return (
        <div className="container-fluid mb-2 cart-screen">
            <div className="row">
                <div className="col-12 col-md-6">
                {
                    items.map((item, index) => (<CartCard item={item} key={index} updateItemQuantity={updateItemQuantity} removeItem={removeItem} />))
                }
                </div>
                <div className="col-12 col-md-6">
                    <div className="card w-100 mt-2 rounded-0">
                        <ul className="list-group rounded-0">
                            <li className="list-group-item">
                                <span className="fw-bold">Price : </span> 
                                <span className="fw-bold">{calculatePrice()} $</span>
                            </li>
                            <li className="list-group-item">
                                <button className="btn btn-primary w-100 rounded-0">CheckOut</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartScreen
