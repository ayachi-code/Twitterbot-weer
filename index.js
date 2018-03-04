const Twitter_bot = require('twit');

var configuratie = require('./autho/authenticatie.js');

var T = new Twitter_bot(configuratie);