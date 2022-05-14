const mongoose = require('mongoose')

const {Schema,model} = mongoose

const contactSchema = new Schema ({
    name:{
        type:String,
        required:true
    },
    phone:Number,
    email:{
        type:String,
        required:true
    }
})

module.exports = Conatct = model('Contact', contactSchema)
