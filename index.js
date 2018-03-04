const Twitter_bot = require('twit');
const fetch = require('whatwg-fetch');

var configuratie = require('./autho/authenticatie.js');

var T = new Twitter_bot(configuratie);