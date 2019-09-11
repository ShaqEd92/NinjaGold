const mongoose = require('mongoose');
require('../models/ninja')
const Ninja = mongoose.model('Ninja');

module.exports = {

    farm: function (req, res) {
        let gold = Math.floor(Math.random() * 10 + 11)
        res.json({ message: "Success", data: gold })
    },

    cave: function (req, res) {
        let gold = Math.floor(Math.random() * 5 + 6)
        res.json({ message: "Success", data: gold })
    },

    house: function (req, res) {
        let gold = Math.floor(Math.random() * 2 + 4)
        res.json({ message: "Success", data: gold })
    },

    casino: function (req, res) {
        let coin = Math.floor(Math.random() * 101)
        if (coin <= 50) {
            outcome = 1;
        }
        else {
            outcome = -1;
        }
        let gold = Math.floor(Math.random() * 51) * outcome;
        res.json({ message: "Success", data: gold })
    },

    users: function (req,res){
        Ninja.find({}, function(err, users){
            if (err){
                res.json({message: "Error", error: err})
            }
            else{
                res.json({ message: "Success", data: users })
            }
        })
    },

    user: function (req,res){
        Ninja.findOne({_id: req.params.id}, function(err, user){
            if (err){
                res.json({message: "Error", error: err})
            }
            else{
                res.json({ message: "Success", data: user })
            }
        })
    },

    new: function (req,res){
        var newUser = new Ninja({ Name: req.body.Name })
        newUser.save(function(err){
            if (err){
                res.json({message: "Error", error: err})
            }
            else{
                res.redirect('/')
            }
        })
    },

    update: function (req, res) {
        Ninja.findOne({_id : req.params.id}, function(err, theNinja){
            if(err){
                res.json({message: "Error", error: err})
            }
            else{
                theNinja.Gold = req.body.Gold;
                theNinja.save(function(err){
                    console.log(err)
                })
                res.redirect('/')
            }
        })
    },

    delete: function (req, res) {
        Ninja.deleteMany({Gold : req.params.gold}, function(err, theNinja){
            if(err){
                res.json({message: "Error", error: err})
            }
            else{
                res.redirect('/user')
            }
        })
    }
}


