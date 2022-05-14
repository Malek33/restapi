// const { path } = require('express/lib/application')
require('dotenv').config({ path: __dirname + '/.env' })
    // console.log(__dirname)
const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('connected to DB')
    } catch (err) {
        console.log('errooor!', err)
    }
}

module.exports = connectDB