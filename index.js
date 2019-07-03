//#!/usr/bin/env nodejs
var auth = require('./auth.json');
var express = require('express');
var compression = require('compression');
var request = require('request');
var Twitter = require('twitter');


var app = express();
app.use(function(req, res, next) {
  res.set({
    //'Content-Security-Policy': "default-src data: blob: https: 'unsafe-inline' 'unsafe-eval'; connect-src https:; frame-src http: https:",
    'Strict-Transport-Security': 'max-age=2592000; includeSubDomains; preload',
    'Referrer-Policy': 'same-origin',
    'X-Content-Type-Options': 'nosniff',
    'X-XSS-Protection': '1',
    'Access-Control-Allow-Origin': 'https://yasiu.pl',
    'Cache-Control': 'max-age=86400'
  });
  next();
});
app.use(compression());
app.use(express.static('static'));
app.listen(8081);


app.get('/discord', function(req, res) {
  res.redirect(301, 'https://discord.gg/cExSaKZ');
});

app.get('/reddit', function(req, res) {
  res.redirect(301, 'https://www.reddit.com/user/marcysvoneylau');
});

app.get('/twitter', function(req, res) {
  res.redirect(301, 'https://twitter.com/yasiupl');
});

app.get('/instagram', function(req, res) {
  res.redirect(301, 'https://instagram.com/yasiu.pl');
});

app.get('/patreon', function(req, res) {
  res.redirect(301, 'https://patreon.com/yasiu');
});

app.get('/youtube', function(req, res) {
  res.redirect(301, 'https://www.youtube.com/channel/UCqFJAKOMWvS_oKHk9ppMC8w');
});

app.get('/facebook', function(req, res) {
  res.redirect(301, 'https://www.facebook.com/Yasiupl-1743941845840016');
});


app.route('/metadata/lastfm.json').get(function(req, res) {
  request('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=yasiupl&format=json&limit=1&api_key=' + auth.lastfm).pipe(res);
});

app.route('/metadata/trakttv.json').get(function(req, res) {
  request({
    headers: {
      'Content-Type': 'application/json',
      'trakt-api-version': 2,
      'trakt-api-key': auth.trakttv
    },
    uri: 'https://api.trakt.tv/users/marcysvoneylau/history/',
    method: 'GET'
  }).pipe(res);
});

app.route('/metadata/twitter.json').get(function(req, res) {
  var twitter = new Twitter(auth.twitter);


  twitter.get('statuses/user_timeline', {screen_name: 'yasiupl', count: 1}, function(error, tweets, response) {
    res.json(tweets || error);
  });
});

app.route('/projects/satellite/proxy/*').get(function(req, res) {
  request({
    headers: {
      'Authorization':'Basic' + auth.sat
    },
    uri: 'http://www.sat.dundee.ac.uk/' + req.url.split("projects/satellite/proxy/")[1],
    method: 'GET'
  }).pipe(res);
});
