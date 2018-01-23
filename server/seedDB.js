const mongoose = require("mongoose");
const db = require("./models");
var moment = require("moment");
mongoose.Promise = global.Promise;


mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/cprforlife",
    {
        useMongoClient: true
    }
);

const eventSeed = [

    {
        event: "CPR Certification",
        date: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
        hour: "6:00 pm",
        duration: "90 mins"
    },

    {
        event: "CPR and First Aid Certification",
        date: new Date(Date.now()),
        hour: "8:00 pm",
        duration: "120 mins"
    },

    {
        event: "CPR Certification",
        date: new Date(Date.now()),
        hour: "6:00 pm",
        duration: "60 mins"
    },

    {
        event: "CPR and First Aid Certification",
        date: new Date(Date.now()),
        hour: "8:00 pm",
        duration: "120 mins"
    },

    {
        event: "CPR Certification",
        date: new Date(Date.now()),
        hour: "6:00 pm",
        duration: "60 mins"
    },
];

db.Event
    .remove({})
    .then(() => db.Event.collection.insertMany(eventSeed))
    .then (data => {
        console.log (data.insertedIds.length + " events inserted");
        process.exit(0);
    })
    .catch(err => {
        console.log (err);;
        process.exit(1)
    });
