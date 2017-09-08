var mg = require('mongoose');
var Schema = mg.Schema;

var logLineSchema =  Schema({
    time: Date,
    severity: {type: Number, default: 0},
    facility: {type: Number, default: 0},
    hostname: String,
    address: String,
    family: String,
    port: Number,
    tag: String,
    msg: String
});

exports.deviceLog = function (modelName) {
    
    return mg.model('logline_'+modelName,logLineSchema);
}





