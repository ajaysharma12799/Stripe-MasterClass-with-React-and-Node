import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Card = ({product}) => {
    const {name, image, price} = product;

    const makePayment = async (token) => {
        const body = {
            token,
            product
        }

        const response = await fetch("http://localhost:4321/payment", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        const data = await response.json();
        console.log(data)
        if(data.status === "succeeded") {
            console.log("Thanks for Purchasing");
        }
        else {
            console.log("Payment Failed");
        }
        return data;
    }

    return (
        <div className="card rounded-0 mt-2 mb-2 ms-2 me-2" style={{width: "20rem"}}>
            <img src={image} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text badge bg-success rounded-0">
                    $ {price}
                </p>
                <StripeCheckout
                    stripeKey={process.env.REACT_APP_STRIPE_PUBLISH_KEY}
                    token={makePayment}
                    name={name}
                >
                <button 
                    className="btn btn-primary rounded-0 w-100">Purchase</button>
                </StripeCheckout>
            </div>
        </div>
    )
}

export default Card
