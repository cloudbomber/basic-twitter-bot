console.log("The bot was launched...")

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);


var params = 
{
    q: 'Donald Trump', //q: query string 
    count: 3  //the number of records/ tweets to return
}

//  get the list of tweets with Donald Trump 
T.get('search/tweets', params, gotData); 

function gotData(err, data, response) 
{
    var fs = require('fs');
    var tweets = data.statuses;
    for  (var i = 0; i < tweets.length; i++){

    var text = tweets[i].text;
    var name = tweets[i].user.screen_name;
    var description = tweets[i].user.description;
    var retweet_status = tweets[i].retweeted_status.text;

    var arr = [text, name, description, retweet_status];

    var logger = fs.createWriteStream('log.txt', {
        flags: 'a'
    })
   
     arr.forEach(function(value){
        logger.write(value)
    });
    
    // logger.write(text + ' ' + '\r\n' + name + ' ' + '\r\n' + description + ' ' + '\r\n' + retweet_status + '\r\n')
    // console.log(text + ' ' + '\n' + name + ' ' + '\n' + description + ' ' + '\n' + retweet_status + ' ');
    // function tweeted(eventMsg){
 
//  var json = JSON.stringify(eventMsg, null, 2);
//  fs.writeFile("tweet.json", json);

  }
}


// tweetIt();
// setInterval(tweetIt, 1000*50) // run the tweetIt function every 60 secs



// function tweetIt(){

//     var ran = Math.floor(Math.random()*100); //find a random number from 0 - 100 and store it in a variable


//     var tweet = {
        
//         status: '#jaybott loves # ' + ran + ' !'
//     }

//     T.post('statuses/update', tweet, tweeted);

//     function tweeted(err, data, response)
//     {
//         if(err)
//         {
//             console.log('Has errors');
//         }
//         else
//         {
//             console.log(data);
//         }
//     }
// }
