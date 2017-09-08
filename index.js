// const SyslogServer = require("syslog-server");
// const server = new SyslogServer();
 var log=  require("noogger");

// server.on("message", (m) => {
//     log.debug(m);
//     console.log(m);
//     var logData= '{'+m.date+'} ['+m.host+'] _'+m.protocol+'_ ::'+m.message;
//     log.notice(logData);
// });

// server.on('start', function () {
//     log.info("Server Started");
// });

// server.on('stop', function () {
//     log.info("Server Stop");
// });


// server.start();


var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/syxlog');


var LogLine=  require('./models/LogLine');
var logdb= LogLine.deviceLog('device1');

var Syslogd = require('syslogd');

Syslogd(function(data) {
    data.severity=  data.severity || 0;

    log.debug(data);
    logdb.create(data, function (err,res) {
        if (err) log.error(err);
    })

}).listen(514, function(err) {
    console.log('start')
})