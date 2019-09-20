const express = require("express");		// use to use the Express module
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quoterankdb', {useNewUrlParser: true});

app.use(express.static( __dirname + '/public/dist/public' ));
app.use(express.json());

//link to the route.js 
require('./routes')(app);


app.listen(8000, () => console.log("listening on port 8000"));