import React from 'react'
import { useCart } from 'react-use-cart';
import CartCard from '../components/CartCard';
import StripeCheckout from 'react-stripe-checkout';

const CartScreen = () => {
    const {
        isEmpty, items, updateItemQuantity, removeItem
    } = useCart();

    const calculatePrice = () => {
        let totalPrice = items.reduce((acc, item) => acc + item.itemTotal, 0);
        return Math.trunc(totalPrice) * 50;
    }

    const makePayment = async (token) => {
        console.log("Enter1")
        const body = {
            token,
            items,
            totalPrice: calculatePrice(),
        }
        try {
            const response = await fetch("http://localhost:1234/payment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            })
            const jsonObj = await response.json();
            return jsonObj; 
        } catch (error) {
            console.log(error.message)
        }
    }
    console.log(items)
    if (isEmpty) return <p className="text-center fw-bold fs-3 mt-3">Your cart is empty</p>;
    return (
        <div className="container-fluid mb-2 cart-screen">
            <div className="row">
                <div className="col-12 col-md-8 cart-card-screen">
                {
                    items.map((item, index) => (<CartCard item={item} key={index} updateItemQuantity={updateItemQuantity} removeItem={removeItem} />))
                }
                </div>
                <div className="col-12 col-md-4">
                    <div className="w-100 mt-2 rounded-0">
                        <ul className="list-group rounded-0">
                            <li className="list-group-item">
                                <span className="fw-bold">Price : </span> 
                                <span className="fw-bold">{calculatePrice()} ₹</span>
                            </li>
                            <li className="list-group-item">
                                <StripeCheckout stripeKey={process.env.REACT_APP_PublishKEY} 
                                token={makePayment} name={`Pay ${calculatePrice()} ₹`}>
                                    <button className="btn btn-primary w-100 rounded-0">Checkout</button>
                                </StripeCheckout>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartScreen
