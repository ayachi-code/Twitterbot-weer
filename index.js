const Twitter_bot = require('twit');
const fetch = require('fetch').fetchUrl;

var configuratie = require('./autho/authenticatie.js');

var T = new Twitter_bot(configuratie);

fetch("http://api.openweathermap.org/data/2.5/weather?q=amsterdam&APPID=78501d5ae347b04883a0f207550d255d&units=metric",(error,info,response) => {
    
});