require('dotenv').config()
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')(process.env.SecretKEY)
const { v4: uuid } = require('uuid')

const app = express()
const PORT = 1234 || process.env.PORT

// Middleware
app.use(express.json())
app.use(cors())

// Routes
app.post("/payment", async (req, res) => {
    let status;
    let error;

    try {
        const {items, token, totalPrice} = req.body;
        console.log("Product: ", items)
        console.log("Price: ", totalPrice)

        const idempotencyKey = uuid();
        console.log("Idempontency Key: ", idempotencyKey)
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        })
        console.log("Customer: ", customer)
        const charge = await stripe.charges.create({
                amount: totalPrice * 100,
                currency: 'inr',
                customer: customer.id,
                receipt_email: token.email,
                description: `Purchased the ${items.name}`,
                shipping: {
                    name: token.card.name,
                    address: {
                        country: token.card.address_country
                    }
                }
            }, 
            { idempotencyKey }
        )
        console.log("Charge:", { charge });
        status = "success";
    } catch (error) {   
        console.error("Error:", error);
        status = "failure";
    }
    res.json({error, status});
})

// Server
app.listen(PORT, () => {
    console.log(`Server Running at ${PORT} Port`)
})