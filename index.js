const Twitter_bot = require('twit');
const fetch = require('fetch').fetchUrl;
const configuratie = require('./autho/authenticatie.js');
const T = new Twitter_bot(configuratie);
const stream_event = T.stream("user");

fetch("http://api.openweathermap.org/data/2.5/weather?q=amsterdam&APPID=78501d5ae347b04883a0f207550d255d&units=metric",(error,info,response) => {
    let begin1 = response.toString()
    let response_json_formaat = JSON.parse(begin1);
    let data = {
        graden: response_json_formaat.main.temp,
        naam: response_json_formaat.name
    }
    let random_getal = Math.floor(Math.random() * 10)

    setInterval(tweethet,1000*20)

    function tweethet () {
        T.post('statuses/update',{status: "Het is in " + data.naam + " " + data.graden + " Graden celcius " + "Speciale indentieke nummer: " + random_getal},(err) => {
            if (err) {
                console.log("Hmm er is een error... " + err)
            } else {
                console.log("yay")
            }
        })
    }

});

