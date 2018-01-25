// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Model = require("./models");
var path = require('path');

// var logger = require("morgan");
// var mongoose = require("mongoose");

// Create Instance of Express
var app = express();
var router = express.Router();

//port
var PORT = process.env.PORT || 4000;

mongoose.Promise = global.Promise;

// Run Morgan for Logging
// app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Enable CORS so that browsers don't block requests.
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
// // Serve files created by create-react-app.
app.use(express.static("client/build"));



// db config
var MONGODB_URI =  process.env.MONGODB_URI || "mongodb://localhost/cprforlife";
mongoose.connect(MONGODB_URI, {
  useMongoClient:true
});
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});




//setting the route path & initialize the API for CPR Classes
app.get('/api/event', function(req, res) {
  Model.Contactfooterv.find({})

  .exec(function (err, doc) {
    if (err) {
      console.log(err);
    }else {
      res.send(doc)
    }
    
  });
  
});



// })

//setting the route path & initialize the API for REGISTRATION form

app.post('/api/event', function (req, res) {
  console.log(req.body);
  console.log(req.body.name);
  console.log(req.body.telephone);
  console.log(req.body.city);
  console.log(req.body.eventId);
  console.log(typeof req.body);
  var newRegister = new Model.Registration(req.body);

  newRegister.save(function (err, doc) {
    if(err){
      console.log(err);
    }else{
      res.send(doc)
      // res.redirect("/")
    }
  })
  
});





//setting the route path & initialize the API for CONTACT FOOTER form
app.get('/api/contactfooter', function (req, res) {
  Model.Contactfooter.find({})

  .exec(function (err, doc) {
    if (err) {
      console.log(err);
    }else {
      res.send(doc)
    }
    
  });
  
});

//setting the route path to save to the API for CONTACT FOOTER  form
app.post('/api/contactfooter', function (req, res) {
  console.log(req.body);
  console.log(req.body.name);
  console.log(typeof req.body);
  var newContactFooter = new Model.Contactfooter(req.body);

  newContactFooter.save(function (err, doc) {
    if(err){
      console.log(err);
    }else{
      res.send(doc)
    }
  });
  
});

app.get("/", function (req, res) {
  res.send("<h1>Hi</h1>");
});




// Any non API GET routes will be directed to our React App and handled by React Router
app.get("*", function(req, res) {
  if ( process.env.NODE_ENV === 'production' ) {
    res.sendFile(__dirname + "/client/build/../dist/index.html");
  } else {
    res.sendFile(path.resolve(__dirname + "/client/public/../dist/index.html"));
  }
});



// -------------------------------------------------
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});