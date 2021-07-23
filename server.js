// SERVER FILE - contains code to run the server

// dependencies required to run server ---------------------------------------------------------
require("dotenv").config() // bring in variables stored in .env file
const mongoose = require("mongoose") // for connecting backend to MongoDB database
const express = require("express")
const cors = require("cors")
// connection to server (port 3000 will be used when running server on local machine)
const port = process.env.PORT || 3000
// allows express server to handle file uploads
const fileUpload = require('express-fileupload') 


// database connection -------------------------------------------------------------------------
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
    .then(() => console.log("db connected!"))
    .catch(err => console.error("db connection failed ", err))
    

// express app setup - configure express -------------------------------------------------------
// store express app in variable 'express'
const app = express()
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('*', cors()) // (cross origin resource sharing)
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 }
  }))


// ROUTES --------------------------------------------------------------------------------------
  // set up routes using express app 
  // modules imported from routes folder
  // anyone who goes to /xyz, use the xyzRouter

// Homepage route (dummy route to view on Heroku/for testing)
app.get('/', (req, res) => {
    res.send("This is the homepage")
})

// Product route
/*app.get('/product', (req, res) => {
    res.send("Listing all products")
}) */
// completed 
const productRouter = require('./routes/product')
app.use('/product', productRouter)

// Message (contact form) route
/*app.get('/message', (req, res) => {
    res.send("Listing all messages")
}) */
// completed/incomplete 
const messageRouter = require('./routes/message')
app.use('/message', messageRouter)

// Stockist  route
// still to be completed 
app.get('/stockist', (req, res) => {
    res.send("Listing all stockists")
})


// run app (on configured port) -----------------------------------------------------------------
// (using port variable from dependencies)
app.listen(port, () => {
    console.log("App is running on port", port)
})
 