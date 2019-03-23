var config = {
  "gaclient": "ca-pub-2102294932376201",
  "youtube": "UCqFJAKOMWvS_oKHk9ppMC8w",
  "coinhive": "8DtFz40xQ7CukNaA6O6s1zWgaTHWGMGF",
  "analytics": {
    "rocketwatch": "UA-71778687-10"
  },
  "subdomain": {
    "rocketwatch": ["2430605979", "9814271974"]
  }
};
var d = location.host.split(".")[0];
var e = window.innerWidth < 420 ? true : false;
/*
if (typeof(Storage) !== "undefined" && localStorage.getItem("yasiu.pl/ads") && localStorage.getItem("yasiu.pl/ads").match("coinhive")) {
   var settings = JSON.parse(localStorage.getItem("yasiu.pl/ads").split("|")[1])
    var h = document.getElementsByClassName("adcontainer");
    for (var i in h) {
      h[i].innerHTML = '<div class="coinhive-miner" style="width: 336px; height: 280px" data-key="' + config.coinhive + '" data-threads="'+(settings.threads || 4)+'" data-throttle="'+(data.throttle || 0.6)+'" data-autostart="true"><em>Please disable Adblock!</em></div>';
    }
    $.getScript("https://coinhive.com/lib/miner.min.js", function() {
      miner.start({
        autoThreads: settings.autoThreads || 1,
        throttle: settings.throttle || 0.6
      });
    });

}
*/
if (config.subdomain[d]) {


  (function(a, c, f, e, b) {
    (a = window[a] || []).push({
      google_ad_client: config.gaclient,
      enable_page_level_ads: e
    })
    var ads = document.getElementsByClassName("adcontainer");
    for (var id in ads) {
      ads[id].innerHTML = '<ins class="adsbygoogle" style="display:block" data-ad-client="' + config.gaclient + '" data-ad-slot="' + config.subdomain[d][id] + '" data-ad-format="auto"></ins>';
      if ((id + 1) >= config.subdomain[d].length) {
        (a = window[a] || []).push({
          google_ad_client: config.gaclient,
          enable_page_level_ads: e
        })
        break
      }
    }

    b = e.getElementsByTagName(c)[0];
    e = e.createElement(c);
    e.async = 1;
    e.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    b.parentNode.insertBefore(e, b)
  })("adsbygoogle", "script", window, document);



  /*
          setTimeout(function() {
            var h = document.getElementsByClassName("adsbygoogle");
            for (var i in h) {
              if (!h[i].innerHTML) {
                h[i].parentElement.innerHTML = "<h4>If you want to support my work, consider turning off your adblocker ;)</h4>";
                h[i].parentElement.removeChild(h[i])
              }
            }
          }, 2000);
  */


}
if (config.analytics[d]) {

  var removeUtms = function() {
    if (window.location.search.indexOf('utm_') != -1 && history.replaceState) {
      history.replaceState({}, '', window.location.toString().replace(/(\&|\?)utm([_a-z0-9=]+)/g, ""));
    }
  };

  (function(k, i, h, j, o, l, m) {
    k.GoogleAnalyticsObject = o;
    k[o] = k[o] || function() {
      (k[o].q = k[o].q || []).push(arguments)
    }, k[o].l = 1 * new Date();
    l = i.createElement(h), m = i.getElementsByTagName(h)[0];
    l.async = 1;
    l.src = j;
    m.parentNode.insertBefore(l, m)
  })(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga");
  ga("create", config.analytics[d], "auto");
  ga('send', 'pageview', {
    'page': location.pathname + location.search + location.hash,
    'hitCallback': removeUtms
  });

  window.addEventListener("hashchange", function() {
    ga('send', 'pageview', {
      'page': location.pathname + location.search + location.hash,
      'hitCallback': removeUtms
    });
  })

}
var f = document.getElementsByClassName("facebook-button");
for (var b in f) {
  f[b].innerHTML = '<iframe src="https://www.facebook.com/plugins/like.php?layout=button_count&share=true&href=' + location.href + '" width="116" height="24" style="border:none;overflow:hidden" scrolling ="no" frameborder="0" allowtransparency="true"> </iframe>'
}
var g = document.getElementsByClassName("youtube-button");
for (var b in g) {
  g[b].innerHTML = '<iframe src="https://www.youtube.com/subscribe_embed?channelid=' + config.youtube + '" width="116" height="24" style="border:none;overflow:hidden" scrolling ="no" frameborder="0" allowtransparency="true"> </iframe>'
}
