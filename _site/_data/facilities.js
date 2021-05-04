const fetch = require('node-fetch');

module.exports = async function() {

return fetch('https://data.cityofnewyork.us/api/views/9wwi-sb8x/rows.json')
  .then(res => res.json())
  .then(json => {
    return {
      info: json
    }
  })
}