const express = require('express')
const app = express()
const mongoose = require("mongoose")
const cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const All = require("./models/productSchema");

app.get("/", (req, res) => {
  res.send("API is running");
  console.log("API is running ok");
});




mongoose.connect("mongodb://shehab:12345@ac-u1jqkwp-shard-00-00.g4yolth.mongodb.net:27017,ac-u1jqkwp-shard-00-01.g4yolth.mongodb.net:27017,ac-u1jqkwp-shard-00-02.g4yolth.mongodb.net:27017/lily?ssl=true&replicaSet=atlas-1berg0-shard-0&authSource=admin&retryWrites=true&w=majority&appName=newEcommerce").then(() => {


  app.listen(3001, () => {

    console.log('server runs perfectly')


  })

  console.log('connected')


}).catch((err) => {
  console.log(err.message)
  console.log("no")
})

app.get("/productAll", (req, res) => {

  All.find().then((result) => {
    console.log(result)
  })








})

app.get("/apiiii", async (req, res) => {

  try {

    const ali = await All.find({})

    res.send({ data: ali })

  } catch (error) {

  }
})

app.get("/apiiii/:id", async (req, res) => {

  try {
    const { id } = req.params
    const ali = await All.findById({_id:id})
    res.send({ data: ali })

  } catch (error) {

  }
})
