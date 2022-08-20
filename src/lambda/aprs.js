import fetch from "node-fetch";
const aprsfiAPI = process.env.aprsfi;
const callsign = process.env.aprsCallsign;

const API_ENDPOINT = `https://api.aprs.fi/api/get?name=${callsign}&what=loc&apikey=${aprsfiAPI}&format=json`;

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
