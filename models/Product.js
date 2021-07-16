// Product SCHEMA and MODEL

const mongoose = require('mongoose')
const Schema = mongoose.Schema

// schema
const productSchema = new mongoose.Schema({
    
    flavour: {
        type: String,
    },
    image: {
        type: String,
    },
    price: {
        type: String,
    },
    nutritionInfo: {
        type: String,
    },
    rating: {
        type: Number,
    },
    size: {
        type: Number,
    },
    description: {
        type: String,
    },
    ingredients: {
        type: String,
    },
    splashImage: {
        type: String,
    }
})

// create model
const productModel = mongoose.model('Product', productSchema)

// export model
module.exports = productModel 