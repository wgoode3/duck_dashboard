const express = require("express"),
         path = require('path'),
           bp = require("body-parser"),
     mongoose = require("mongoose"),
          app = express(),
         port = 8000;

app.use(bp.json());
app.use(express.static(path.join(__dirname, './client/dist/client/')));
mongoose.connect('mongodb://localhost/ducks');

require("./server/config/mongoose");
require("./server/config/routes")(app);

app.listen(port, function() {
    console.log(`listening on port ${port}`);
})