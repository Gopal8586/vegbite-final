const mongoose = require("mongoose");
const mainSchema = new mongoose.Schema({

firstname: {
    type: String,
    require: true
},
lastname:{
    type: String,
    require: true
},
email:{
    type: String,
    require: true,
    unique: true
},
phone: {
    type: Number,
    required: false,
    sparse: true,
},
password: {
    type: String,
    required: false,
},

cnfpassword: {
    type: String,
    required: false
},
profilePic: {
    type: String,
    required: false
}
});

const Details = new mongoose.model("Information", mainSchema);
module.exports = Details;







const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
  });
  
  const User = mongoose.model('User', userSchema);