var sensor = require('./sensor.js');
var twitterConfig = require('./twitter.js');

var twitter = require('twitter');
var async = require('async');

var twitterClient = new twitter(twitterConfig.twitterAPI);

var updateTime = 1000*60; // Time in milliseconds

var updatestatus = function() {
async.series([
function(callback){
    sensor.getcoreT(function(err , coreT ){
        coreT = coreT.substr(coreT.indexOf('=')+1 , coreT.length); // trim temperature
        callback(null , coreT);
    });
} ,

function(callback) {
    sensor.getcoreV(function(err , coreV){
        coreV = coreV.substr(coreV.indexOf('=')+1 , coreV.length); //trim voltage
        callback(null , coreV);
    });
}],
function(err , results) {
    var coreT = results[0].trim();
    var coreV = results[1].trim();

    twitterClient.post('statuses/update' ,
        {status : `PredatorPi has core temp of ${coreT} and core voltage of ${coreV}` },
         function(err , tweet , response){
            if(err) console.log(err);
            else console.log(tweet);
    });
});
};


setInterval(updatestatus , updateTime);


