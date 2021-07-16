// PRODUCT ROUTES
// fetch requests from ProductAPI (frontend) will come here


// express has it's own router we can use. Store in variable 'router'
const express = require("express")
const router = express.Router()
const Product = require('./../models/Product')
const path = require('path')

// GET route - get all products
router.get('/', (req, res) => {
    
    /*const products = [
        {
            _id: 1,
            firstName: "John",
            lastname: "Doe"
        }
    ]
    res.json(products) */

    // get all products from the Product model (so all products in the MongoDB product collection) using the find() method
    Product.find()
        // if successful will return json object containing list of all products (products)
        .then((products) => {
            res.json(products)
            // console.log(products)
        })
        // runs when there's an error
        // print error message + info in error object in console log
        .catch((err) => {
            console.log("problem getting products", err)
        })
})


// EXPORT the router object 
// (imported in server.js in 'ROUTES' section)
module.exports = router