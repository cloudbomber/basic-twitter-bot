
basic Twitter bot app
------------------------------------------
This is a basic Twitter bot app
which **auto replies** with a message once someone has followed your profile.

Setup the config file
------------------------------------------

```javascript 
npm install
```
* create a file named "config.js".
* To get the keys and tokens, please follow these steps:


* go to --> https://apps.twitter.com/
* click --> Create New App
* fill in the  the blanks
* select the "Keys and Access Tokens" tab
* click --> Generate Consumer key and Secret
* copy the generated codes into the "config.js" you created

```javascript
module.exports = {

 consumer_key:          '',
  consumer_secret:      '',
  access_token:         '',
  access_token_secret:  '',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
}
```
