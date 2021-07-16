// PRODUCT ROUTES
// fetch requests from ProductAPI (frontend) will come here


// express has it's own router we can use. Store in variable 'router'
const express = require("express")
const router = express.Router()
const path = require('path')

// GET route - get all products
router.get('/', (req, res) => {
    const products = [
        {
            _id: 1,
            firstName: "John",
            lastname: "Doe"
        }
    ]
    res.json(products)
})


// EXPORT the router object 
// (imported in server.js in 'ROUTES' section)
module.exports = router