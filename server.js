const express = require('express')
const app = express()
    // require('dotenv').config({ path: "./config/.env" })
const connectDB = require('./config/connectdb')

app.use(express.json())


const router = express.Router()
const { getAllContacts, addContact, updateContacts, deleteContacts, getOneContacts } = require('./controllers/contactControllers')

//get
router.get('/allcontacts', getAllContacts)

//post
router.post('/addcontact', addContact)

//Put
router.put('/editcontact', updateContacts)

//delete
router.delete('/deletecontact', deleteContacts)

//getOneContacts
router.get('/getonecontacts/:id', getOneContacts)

connectDB()
app.use('/api/contacts', router)

const port = 5000
app.listen(port, (err) => err ? console.log('errroorr!!', err) : console.log(`server is running on port : ${port}`))