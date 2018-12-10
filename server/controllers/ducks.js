const mongoose = require("mongoose");
const Duck = mongoose.model("Duck");

class DucksController {
    getAll(req, res){
        Duck.find({}, function(err, ducks){
            res.json({ducks: ducks})
        });
    }
    create(req, res){
        let duck = new Duck(req.body);
        duck.save(function(err){
            console.log(err);
            res.json({status: "ok"});
        });
    }
    remove(req, res){
        Duck.remove({_id: req.params._id}, function(err){
            console.log(err);
            res.json({status: "ok"});
        });
    }
}

module.exports = new DucksController();