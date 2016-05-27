var exec = require('child_process').exec;

const coreTempCmd = 'vcgencmd measure_temp'; //command to get core temperature  
const coreVoltCmd = 'vcgencmd measure_volts core'; //command to get core voltage

function getcoreT(callback){  
    //get core temperature from the shell
    exec(coreTempCmd , function(err , stdout , stderror){
        callback(null, stdout); //don't forget the callback
    });
}

function getcoreV(callback){  
    //get core voltage from the shell
    exec(coreVoltCmd , function(err , stdout , stderror ){
        callback(null , stdout); //don't forget the callback
    });
}

exports.getcoreV = getcoreV; //make sure to export the functions  
exports.getcoreT = getcoreT;  