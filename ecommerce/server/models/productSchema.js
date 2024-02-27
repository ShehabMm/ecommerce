const mongoose = require("mongoose")
const Scheme = mongoose.Schema;



 const allSchema = new mongoose.Schema({

name:String,
details:String, 
cateogry:String,
price:Number,
rating:Number,
img:String,

},
{
timestamps:true
}
)

const All = mongoose.model("lily", allSchema)
module.exports = All