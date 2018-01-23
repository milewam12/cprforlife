const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const registerSchema = new Schema ({
    name : { type:String},
    email : { type:String},
    comments : { type:String}
});

const Register = mongoose.model ("Register", registerSchema);

module.exports = Register;