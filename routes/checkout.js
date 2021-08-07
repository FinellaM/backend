// CHECKOUT ROUTE
// fetch requests from CheckoutAPI (frontend) will come here
const express = require("express")
const router = express.Router()
const Cart = require('./../models/Cart')
const Product = require('./../models/Product') 
const path = require('path')

// checkout route
router.get('/', (req, res) => {
    
    // check if cart is set already (in session store)
    if (!req.session.cart) {
        return res.status(400).json({
            message: "Your cart is empty"
        })
    }
    // cart exists:
    var cart = new Cart(req.session.cart); // create a new cart off the one stored in the session
    res.json(cart);
});

// checkout POST route

// EXPORT the router object 
// (imported in server.js in 'ROUTES' section)
module.exports = router