const express = require('express')
const app = express()
const mongoose = require("mongoose")



app.listen(3001, ()=>{

console.log('server runs perfectly')


})

mongoose.connect('mongodb+srv://shehab:1234@newEcommerce.g4yolth.mongodb.net/newEcommerce?retryWrites=true&w=majority').then(()=>{

console.log('connected')


}).catch((err)=>{
console.log(err.message)
console.log("no")
})