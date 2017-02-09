console.log("The Reply bot started...")

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);

//Setting up a user stream
var stream = T.stream('user');

//Anytime someone follows me run followed function
stream.on('tweet', tweeted);

function tweeted(eventMsg){
//  var fs = require('fs');
//  var json = JSON.stringify(eventMsg, null, 2);
//  fs.writeFile("tweet.json", json);

var replyto = eventMsg.in._reply_to_screen_name;
var text = eventMsg.text;
var from = eventMsg.user.screen_name;

console.log(replyto + ' ' + from);//testing data
    if(replyto === 'jaybott'){
        var newTweet = '@' + from + 'Blessed!!';
        tweetIt(newTweet);
    }   
}

//
function tweetIt(txt){

    var tweet = {
      status: txt //store function parameter in tweet status
    }

    T.post('statuses/update', tweet, tweeted); // connect to twitter and update status

    function tweeted(err, data, response)//
    {
        if(err)
        {
            console.log('Has errors');
        }
        else
        {
            console.log(data);
        }
    }
}
