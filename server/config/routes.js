const ninjas = require('../controllers/ninjas');
    
module.exports = function (app) {

    app.get('/farm', function (req, res) {
        ninjas.farm(req, res);
    })

    app.get('/cave', function (req, res) {
        ninjas.cave(req, res);
    })

    app.get('/house', function (req, res) {
        ninjas.house(req, res);
    })

    app.get('/casino', function (req, res) {
        ninjas.casino(req, res);
    })

    app.get('/user', function (req,res){
        ninjas.users(req, res);
    })

    app.get('/user/:id', function (req,res){
        ninjas.user(req, res);
    })

    app.post('/user', function (req,res){
        ninjas.new(req, res);
    })

    app.put('/user/:id', function(req,res){
        ninjas.update(req, res);
    })

    app.get('/delete_all_users/:gold', function(req,res){
        ninjas.delete(req, res);
    })

}