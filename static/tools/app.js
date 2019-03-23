 apps = [{
   "name": "Base64 Encode/Decode",
   "url": "//tools.yasiu.pl/base64",
   "by": "yasiu.pl"
 }, {
   "name": "URL Encode/Decode",
   "url": "//tools.yasiu.pl/dencoder",
   "by": "yasiu.pl"
 }, {
   "name": "Obfuscator",
   "url": "//tools.yasiu.pl/obfuscate",
   "by": "yasiu.pl"
 }, {
   "name": "HLS Player",
   "url": "//tools.yasiu.pl/hlsplayer",
   "by": "yasiu.pl"
 }, {
   "name": "Proxy",
   "url": "//tools.yasiu.pl/proxy",
   "by": "yasiu.pl"
 }, {
   "name": "Whois Lookup",
   "url": "//who.is",
   "by": "who.is"
 }, {
   "name": "Internet Archive",
   "url": "//archive.org",
   "by": "archive.org"
 }];

load = function() {
   for (var i in apps)
     document.getElementById("here").innerHTML += '<div class="col s12 m6 l3"><div class="card"><div class="card-content"><h5 class="header black-text truncate">' + apps[i].name + '</h5><a>by ' + apps[i].by + '</a></div><div class="card-action"><a class="waves-effect waves-light btn deep-orange hoverable" href="' + apps[i].url + '">Open</a></div></div>'
 }
