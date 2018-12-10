const Ducks = require("../controllers/ducks");

module.exports = function(app){
    app.get("/ducks", Ducks.getAll);
    app.post("/ducks", Ducks.create);
    app.delete("/duck/:_id", Ducks.remove);
}