const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const eventSchema = new Schema ({
    // _id: mongoose.Schema.Types.ObjectId,
    // eventId: { type:String},
    name : String,
    email : String
    // address : { type:String},
    // address2 : { type:String},
    // telephone : { type:Number},
    // city:{ type:String},
    // state: { type:String},
    // startDate: { type:String}
});


const Event = mongoose.model("Event", eventSchema);

module.exports = Event;