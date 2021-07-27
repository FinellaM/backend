// Nutrition ROUTES
// fetch requests from NutritionAPI (frontend) will come here


// express has it's own router we can use. Store in variable 'router'
const express = require("express")
const router = express.Router()
const Nutrition = require('./../models/Nutrition')
const path = require('path')

// GET - get all nutrition information documents
router.get('/', (req, res) => {
    
        
  // get all products from the Nutrition model using the find() method
  Nutrition.find()
      // if successful will return json object containing list of all messages (messages)
      .then((nutritions) => {
          res.json(nutritions)
      })
      // runs when there's an error
      // print error message + info in error object in console log
      .catch((err) => {
          console.log("problem getting nutrition information", err)
      })

})

// EXPORT the router object 
// (imported in server.js in 'ROUTES' section)
module.exports = router