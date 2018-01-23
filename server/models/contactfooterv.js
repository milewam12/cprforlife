const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const contactfootervSchema = new Schema ({
    name : { type:String},
    email : { type:String},
    comments : { type:String}
});

const Contactfooterv = mongoose.model ("Contactfooterv", contactfootervSchema);

module.exports = Contactfooterv;