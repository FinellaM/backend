// Product SCHEMA and MODEL

const mongoose = require('mongoose')
const Schema = mongoose.Schema

// schema
const productSchema = new mongoose.Schema({
    
    flavour: {
        type: String,
    },
    images: [{ // note: [] = an array {} = an object
        type: String, 
    }],
    price: {
        type: String,
    },
    nutrition: [{ // array
        type: Schema.Types.ObjectId,
        required: true,
        // communicates this is linked to the nutrition Model in the database
        // allows us to bring in product's associated nutrition information details 
        ref: 'Nutrition' 
    }],
    rating: {
        type: Number,
    },
    size: {
        type: Number,
    },
    price: [{ //array
        type: Number,
    }],
    description: {
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