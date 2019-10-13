function getJSON(g, h) {
    try {
      var k = new XMLHttpRequest();
      k.onreadystatechange = function() {
        if (k.readyState === 4) {
          if (k.responseText.split()[0] == "{" || k.status == 200) {
            var a = JSON.parse(k.responseText);
            a.timestamp = Date.now();
            h(a)
          } else {
            var a = {
              timestamp: Date.now(),
              status: (k.status || "error"),
              code: k.statusText,
              msg: k.responseText
            };
            h(a);
            console.log(a)
          }
        }
      };
      k.open("GET", g);
      k.send()
    } catch (e) {
      console.log(e)
    }
  };

  (function() {
    getJSON("https://yasiu.pl/metadata/lastfm.json?t=" + Date.now(), function(data) {
      if (!data.recenttracks.track[0]["@attr"]) {
        var ago = Math.ceil((Date.now() / 1000 - data.recenttracks.track[0].date.uts) / 60);
      }

      document.getElementById("album-cover").src = data.recenttracks.track[0].image[3]["#text"] || "./assets/unknown-artist.jpg";
      document.getElementById("track").innerHTML = data.recenttracks.track[0].artist["#text"] +
        ": " + data.recenttracks.track[0].name;
      if (data.recenttracks.track[0]["@attr"] && data.recenttracks.track[0]["@attr"].nowplaying) {
        document.getElementById("track-status").innerHTML = "I'm listening to…"
        document.getElementById("track-ago").innerHTML = "Right now"
      } else if (0 < ago && ago < 60) {
        document.getElementById("track-status").innerHTML = "I just stopped listening to…"
        document.getElementById("track-ago").innerHTML = ago + " Minutes ago"
      } else if (ago > 60) {
        document.getElementById("track-status").innerHTML = "Last played…"
        document.getElementById("track-ago").innerHTML = Math.round(ago / 60) + " Hours ago"
      } else {
        document.getElementById("track-status").innerHTML = "Last song I've listened to…"
      }
    });
    getJSON("https://yasiu.pl/metadata/twitter.json?t=" + Date.now(), function(data) {
      document.getElementById("tweet").innerHTML = data[0].text.split("…")[0] + "...";
    })
  })()