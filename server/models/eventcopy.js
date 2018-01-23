const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const eventSchema = new Schema ({
    // _id: mongoose.Schema.Types.ObjectId,
    event: { type:String},
    date:  { type: String},
    hour: { type: String},
    duration: { type: String}
});


const Event = mongoose.model("Event", eventSchema);

module.exports = Event;