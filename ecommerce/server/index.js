const express = require('express')
const app = express()
const mongoose = require("mongoose")
const cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", (req, res) => {
  res.send("API is running");
  console.log("API is running ok");
});




mongoose.connect("mongodb://shehab:1234@ac-smhji2v-shard-00-00.kiiwcap.mongodb.net:27017,ac-smhji2v-shard-00-01.kiiwcap.mongodb.net:27017,ac-smhji2v-shard-00-02.kiiwcap.mongodb.net:27017/productsdetails?ssl=true&replicaSet=atlas-jilp6g-shard-0&authSource=admin&retryWrites=true&w=majority").then(()=>{


app.listen(3001, ()=>{

  console.log('server runs perfectly')
  
  
  })
  
console.log('connected')


}).catch((err)=>{
console.log(err.message)
console.log("no")
})

app.get("/product", (req, res)=>{

console.log(req.body)

})