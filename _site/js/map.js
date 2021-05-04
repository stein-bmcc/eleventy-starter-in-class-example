var mymap = L.map('mapid').setView([40.718041, -74.012119], 13);
// var mymap = L.map('mapid').setView([51.505, -0.09], 13);
var Stadia_OSMBright = L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
});
Stadia_OSMBright.addTo(mymap);

var circle = L.circle([40.718041, -74.012119], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

circle.bindPopup("<b>Hello world!</b><br>I am a popup.I am a circle.");