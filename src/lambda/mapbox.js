import fetch from "node-fetch";
const mapbox = process.env.mapbox;


exports.handler = async (event, context) => {
  const lat = event.queryStringParameters.lat;
  const lon = event.queryStringParameters.lon;
  const zoom = event.queryStringParameters.zoom;
  return fetch(`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${lon},${lat},${zoom},0/512x512?access_token=${mapbox}`, { headers: { "Accept": "application/json" } })
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
