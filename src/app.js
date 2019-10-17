fetch(".netlify/functions/lastfm?t=" + Date.now(), {
    headers: {
      "Accept": "application/json"
    }
  })
  .then(response => response.json())
  .then(data => {
    if (!data.recenttracks.track[0]["@attr"]) {
      var ago = Math.ceil((Date.now() / 1000 - data.recenttracks.track[0].date.uts) / 60);
    }

    document.getElementById("album-cover").src = data.recenttracks.track[0].image[3]["#text"] || "./assets/unknown-artist.png";
    document.getElementById("track").innerHTML = `${data.recenttracks.track[0].artist["#text"] || "Unknown Artist"}: ${data.recenttracks.track[0].name || "A beautiful song"}`;
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
  })
  
fetch(".netlify/functions/twitter?t=" + Date.now(), {
    headers: {
      "Accept": "application/json"
    }
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById("tweet").innerHTML = data[0].text.split("…")[0] + "...";
  })