// SERVER FILE - contains code to run the server

// dependencies required to run server ---------------------------------------------------------
require("dotenv").config() // bring in variables stored in .env file
const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
// connection to server (port 3000 will be used when running server on local machine)
const port = process.env.PORT || 3000


// database connection -------------------------------------------------------------------------


// express app setup - configure express -------------------------------------------------------
// store express app in variable 'express'
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('*', cors()) // (cross origin resource sharing)


// routes --------------------------------------------------------------------------------------
// Homepage route (dummy route to view on Heroku/for testing)
app.get('/', (req, res) => {
    res.send("This is the homepage")
})

// Contact page route
app.get('/product', (req, res) => {
    res.send("Listing all products")
})
// Stockists page route
app.get('/stockist', (req, res) => {
    res.send("Listing all stockists")
})


// run app (on configured port) -----------------------------------------------------------------
// (using port variable from dependencies)
app.listen(port, () => {
    console.log("App is running on port", port)
})
 