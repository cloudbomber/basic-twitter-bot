console.log("The bot was launched...")

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);




// var params = 
// {
//     q: 'Donald Trump', //q: query string 
//     count: 5  //the number of records/ tweets to return
// }

// //  get the list of tweets with Donald Trump 
// T.get('search/tweets', params, gotData); 

// function gotData(err, data, response) 
// {
//   var tweets = data.statuses;
//   for  (var i = 0; i < tweets.length; i++){
//     console.log(tweets[i].text + '\n');
//   }
// }
tweetIt();
setInterval(tweetIt, 1000*60) // run the tweetIt function every 60 secs



function tweetIt(){

    var ran = Math.floor(Math.random()*100); //find a random number from 0 - 100 and store it in a variable


    var tweet = {
        
        status: '#jaybott loves # ' + ran + ' !'
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
