// CART ROUTES
// fetch requests from CartAPI (frontend) will come here


// express has it's own router we can use. Store in variable 'router'
const express = require("express")
const router = express.Router()
const Cart = require('./../models/Cart')
const path = require('path')

// add product to cart (store in user session, will be stored in a cart object)
router.get('/cart/:id', (req, res) => {
    
    // Up to: Build a Shopping Cart - #12 Cart Model
    var productId = req.params.id;
    

    // get all products from the Cart model (so all products in the user's MongoDB cart collection) using the find() method
    /*Cart.find()
        // if successful will return json object containing list of all products (cartItems)
        .then((cartItems) => {
            res.json(cartItems)
            console.log(cartItems)
        })
        // runs when there's an error
        // print error message + info in error object in console log
        .catch((err) => {
            console.log("problem getting products in your cart", err)
        }) */
})


// EXPORT the router object 
// (imported in server.js in 'ROUTES' section)
module.exports = router