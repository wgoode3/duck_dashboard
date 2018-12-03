const express = require("express"),
         path = require('path'),
           bp = require("body-parser"),
     mongoose = require("mongoose"),
          app = express(),
         port = 8000;

app.use(bp.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost/ducks');

var DuckSchema = new mongoose.Schema({
    name: String,
    gender: String,
    age: Number,
    favpond: String
   })
mongoose.model('Duck', DuckSchema); 
var Duck = mongoose.model('Duck') 

app.get("/", function(req, res){
    Duck.find({}, function(err, ducks){
        res.render("index.ejs", {ducks: ducks})
    })
});

app.post("/duck", function(req, res){
    let duck = new Duck(req.body);
    duck.save(function(err){
        console.log(err);
        res.redirect("/");
    });
});

app.listen(port, function() {
    console.log(`listening on port ${port}`);
})