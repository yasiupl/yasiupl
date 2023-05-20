import fetch from "node-fetch";
const mapbox = process.env.mapbox;


exports.handler = async (event, context) => {
  const lat = event.queryStringParameters.lat;
  const lon = event.queryStringParameters.lon;
  const zoom = event.queryStringParameters.zoom;
  return fetch(`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${lon},${lat},${zoom},0/512x512?access_token=${mapbox}`, { headers: { "Accept": "image/avif,image/webp,*/*" } })
    .then(data => ({
        statusCode: 200,
        body: data,
        headers: {
            'Content-type': 'image/avif,image/webp,*/*'
        }
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
