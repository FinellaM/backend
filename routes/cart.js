// CART ROUTES
// fetch requests from CartAPI (frontend) will come here


// express has it's own router we can use. Store in variable 'router'
const express = require("express")
const router = express.Router()
const Cart = require('./../models/Cart')
const Product = require('./../models/Product') 
const path = require('path')

// add product to cart (store in user session, will be stored in a cart object)
router.get('/:id', (req, res) => {

    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    Product.findById(productId)

    .then((product) => {
        // check if product with that id exists
        // if it's false/product not found, send status code + json mesage
        if(!product) {
            res.status(400).json({
                message: "problem adding product to your cart"
            })
        // now normal json response will only run if product object is found successfully
        }else{
            //console.log(product);
            cart.add(product, product.id);
            req.session.cart = cart; // store in cart object in session (express-session saves it automatically)
            res.json(cart);
            //console.log(cart);
        }
    })
    .catch((err) => {
        console.log("problem adding product to your cart", err)
            res.status(500).json({ // error response sent to user
                message: "pproblem adding product to your cart",
                error: err
        })
    })
   
    // Up to: Build a Shopping Cart - #12 Cart Model
    /*var productId = req.params.id;
    // new cart created each time a new item is added
    var cart = new Cart(req.session.cart ? req.session.cart : {items: {}}); // access session to pass in old cart - if it exists (otherwise an empty object is passed)

    // use mongoose to find the product by id (product id accessed via url paramater)
    Product.findbyId(productId, function(err, product) {
        if (err) {
            console.log("problem getting products in your cart", err);
            return res.redirect('/');
        }
        // runs if there are no errors
        cart.add(product, product.id);
        req.session.cart = cart; // store in cart object in session (express-session saves it automatically)
        //res.json(cart);
        console.log(req.session.cart);
        res.redirect('/'); // ** NEED TO CHANGE TO REDIRECT TO SHOP PAGE
    }); */

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
});


// EXPORT the router object 
// (imported in server.js in 'ROUTES' section)
module.exports = router