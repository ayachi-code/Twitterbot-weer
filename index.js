const Twitter_bot = require('twit');

var configuratie = require('./authenticatie.js');

var T = new Twitter_bot(configuratie);