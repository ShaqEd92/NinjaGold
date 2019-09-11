var path = require('path');
var fs = require('fs');
var models_path = path.join(__dirname, './../models');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ninja_gold', { useNewUrlParser: true });

fs.readdirSync(models_path).forEach(function (file) {
    if (file.indexOf('.js') >= 0) {
        require(models_path + '/' + file);
    }
})
