const mongoose = require('mongoose');
require("../config/mongoose")

var NinjaSchema = new mongoose.Schema({
    Name: { type: String },
    Gold: { type: Number, default: 0 }
}, { timestamps: true })
mongoose.model('Ninja', NinjaSchema);