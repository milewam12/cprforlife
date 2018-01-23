const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const registrationSchema = new Schema ({
    eventId: { type:String},
    name : { type:String},
    email : { type:String},
    address : { type:String},
    address2 : { type:String},
    telephone : { type:Number},
    city:{ type:String},
    state: { type:String},
    startDate: { type:String}

});

const Registration = mongoose.model ("Registration", registrationSchema);

module.exports = Registration;