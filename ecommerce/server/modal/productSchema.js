const mongoose = require("mongoose")




 const ProductSchema = new mongoose.Schema({

name:String, 
details:String, 
price:Number, 
cateogty:String,


})

export default ProductModel = mongoose.model("users", ProductSchema)