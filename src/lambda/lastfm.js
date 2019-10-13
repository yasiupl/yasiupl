import fetch from "node-fetch";
const { lastfm } = process.env;

const API_ENDPOINT = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=yasiupl&format=json&limit=1&api_key=${lastfm}`;

exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT, { headers: { "Accept": "application/json" } })
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: data
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
