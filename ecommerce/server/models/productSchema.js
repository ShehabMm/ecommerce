const mongoose = require("mongoose")
const Scheme = mongoose.Schema;



 const allSchema = new mongoose.Schema({

name:String,
details:String, 


},
{
timestamps:true
}
)

const All = mongoose.model("lily", allSchema)
module.exports = All