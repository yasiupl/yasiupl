var Twitter = require('twitter');
const twitterAPI = process.env.twitter;

exports.handler = (event, context, callback) => {
    let twitter = new Twitter(JSON.parse(twitterAPI));
    twitter.get('statuses/user_timeline', {
        screen_name: 'yasiupl',
        count: 1
    }, function (error, tweets, response) {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify(tweets),
            headers: {
                'Content-type': 'application/json'
            }
        });
    });
};