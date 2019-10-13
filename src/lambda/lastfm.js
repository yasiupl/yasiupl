import fetch from "node-fetch";
const lastfm = process.env.lastfmAPI;

const API_ENDPOINT = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=yasiupl&format=json&limit=1&api_key=${lastfm}`;

exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT, { headers: { "Accept": "application/json" } })
    .then(response => response.json())
    .then(data => ({
        statusCode: 200,
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json'
        }
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
