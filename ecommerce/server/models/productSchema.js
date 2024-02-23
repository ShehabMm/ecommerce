const mongoose = require("mongoose")




 const ProductSchema = new mongoose.Schema({

name:String,
details:String, 
price:String, 
cateogry:String,
img:String,


},
{
timestamps:true
}
)

const All = mongoose.model("All", ProductSchema)
module.exports = All