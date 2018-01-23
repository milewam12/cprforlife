const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const contactfooterSchema = new Schema ({
    name : { type:String},
    email : { type:String},
    comments : { type:String}
});

const Contactfooter = mongoose.model ("Contactfooter", contactfooterSchema);

module.exports = Contactfooter;