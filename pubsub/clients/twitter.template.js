const Twit = require('twit');

module.exports = new Twit({
    consumer_key: '...',
    consumer_secret: '...',
    access_token: '...',
    access_token_secret: '...',
    timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
});
