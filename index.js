const express = require('express');
const cors = require("cors");

if(process.env.NODE_ENV === 'development') {
    require("dotenv").config();
}

const PORT = process.env.PORT || 4321;
const app = express();

app.use(cors());
app.use(express.json());

// Route
app.post("/payment", async (req, res) => {
    try {

        const stripe = require("stripe")(process.env.SECRETKEY);
        const {token, product} = req.body; // Extract token and price from body object
        console.log(`Token: ${JSON.stringify(token)}`);
        // Creating Customer
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id,
            name: token.card.name
        });

        const charge = await stripe.charges.create({
                amount: parseInt(product.price) * 100,
                description: `Payment for ${product.name}`,
                currency: "INR",
                customer: customer.id
        });

        res.status(200).send(charge);

    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
})

app.listen(PORT, (error) => {
    if(error) {
        console.log(error.message);
    }
    console.log(`Server Running on ${PORT} Port`);
});