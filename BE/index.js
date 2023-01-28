var express = require('express');
var router = express.Router();
const app = express();
const path=require('path')
require('dotenv').config()
const cors = require("cors");
const mongoose = require('mongoose');
var indexRouter = require('./routes/index');
bodyParser = require('body-parser');
MongoClient = require('mongodb').MongoClient;
  
// var MONGODBURL = 'mongodb://localhost:27017/chatbot';
var MONGODBURL = process.env.MONGODB_URL ;     
app.use(cors());
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname,'public')));
app.use(express.static('public'))
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(MONGODBURL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    if (process.env.NODE_ENV !== "test") {
        console.log("Connected to %s", MONGODBURL);
    }
})
    .catch(err => {
        console.error("App starting error:", err.message);
        process.exit(1);
    });

    // app.use("/api/rooms", roomRoutes);

app.use('/api', indexRouter)


const port = process.env.PORT ;

app.listen(port, function () {
  console.log('Listening on port ' + port);
});