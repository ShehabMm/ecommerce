const mongoose = require("mongoose")




 const ProductSchema = new mongoose.Schema({

name:{
  
 type: String,
 required
  
},
details:String, 
price:String, 
cateogty:String,
img:String,


},
{
timestamps:true
}
)

export default ProductModel = mongoose.model("products", ProductSchema)