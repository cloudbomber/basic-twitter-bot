console.log("The Followed bot launched...")

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);

//Setting up a user stream
var stream = T.stream('user');

//Anytime someone follows me run followed function
stream.on('follow', followed);

function followed(eventMsg){
    var name = eventMsg.source.name;
    var screenName = eventMsg.source.screen_name;
    tweetIt('.@' + screenName + 'Thank you for following me..');
}

function tweetIt(txt){

    var tweet = {
        
        status: txt
    }

    T.post('statuses/update', tweet, tweeted);

    function tweeted(err, data, response)
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
