var syslog = require("syslog-client");

var client = syslog.createClient("127.0.0.1");
 

setInterval(function () {
    client.log("example message");
    
},1500);