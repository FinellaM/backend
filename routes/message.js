// ROUTES file: message.js
// fetch requests from MessageAPI (frontend) come here

const express = require('express')
const router = express.Router()
const Utils = require('./../utils')
const Message = require('./../models/Message')
const path = require('path') 

// GET - get all messages
router.get('/', (req, res) => {
  // get all products from the Message model (so all messages in the MongoDB messages collection) using the find() method
  Message.find()
      // if successful will return json object containing list of all messages (messages)
      .then((messages) => {
          res.json(messages)
          // console.log(messages)
      })
      // runs when there's an error
      // print error message + info in error object in console log
      .catch((err) => {
          console.log("problem getting messages", err)
      })
})

// POST - create a new message -----------------------------------------------------
// ****need to check to ensure this works both with and without an attachement (image file) included ****

router.post('/', (req, res) => {
    // validate  - check that request body isn't empty
    if(Object.keys(req.body).length === 0){   
      return res.status(400).send({message: "Message content can't be empty"})
      // stops the code from continuing to run, user must fill out form correctly and submit again.
    }
    
    /* POST REQUEST NOT WORKING WITH IMAGE UPLOAD - TRY WITHOUT
    validate - check if image file (attachment) exists
    if(!req.files || !req.files.image){
      // return res.status(400).send({message: "Image can't be empty"})
      // image file NOT actually required
      console.log("No image file attached with this message")
    }
    
    console.log('req.body = ', req.body) 
  
    // image file exists. Upload image, then create new message
     // upload.File function: upload.File(file, uploadPath, callback) 
     // uploadPath = public folder 
     // callback: returns a uniqueFilename 
    let uploadPath = path.join(__dirname, '..', 'public')
    Utils.uploadFile(req.files.image, uploadPath, (uniqueFilename) => {    
      // create new message object (runs once image is uploaded)
      let newMessage = new Message({ 
        fullName: req.body.fullName,
        businessName: req.body.businessName, // not a required field
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message,
        attachment: uniqueFilename
      })
      */
    
      // save new message to DB
      let newMessage = new Message (req.body)
      newMessage.save()
      .then(message => {        
        // success!  
        // return 201 status with message object
        return res.status(201).json(message)
      })
      .catch(err => {
        console.log(err)
        return res.status(500).send({
          message: "Problem sending your message",
          error: err
        })
      })
  })

// export
module.exports = router