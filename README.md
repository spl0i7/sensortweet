# sensortweet
NodeJS bot to tweet sensor data from raspberry pi , with few modification it should work with any sensor

## How to run ?

clone this repository 

```
$ git clone https://github.com/spl0i7/sensortweet.git
```

Install NodeJS if you haven't already from https://nodejs.org/en/download/package-manager/

Get Twitter keys and tokens from http://apps.twitter.com/ after creating a Twitter Application.

Provide valid values for 
```
access_token_key:"your access token here",
access_token_secret:"your access token here",
consumer_key:"your consumer key here",
consumer_secret:"your consumer secret here"
```
in **twitter.js** file

Modify sensor reading method in **sensor.js** if you want to. 

Modify tweet in **bot.js**.

Modify *updateTime* in **bot.js** for correct update interval time.

finally run it by

```
$ node bot.js
```
