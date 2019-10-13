var Twitter = require('twitter');
const twitterAPI = process.env.twitter;


exports.handler = (event, context) => {
    let twitter = new Twitter(JSON.parse(twitterAPI));
    twitter.get('statuses/user_timeline', {
        screen_name: 'yasiupl',
        count: 1
    }, function (error, tweets, response) {
        return tweets;
    });
};