$(document).ready(function() {

    //JS For Leaflet Map
    let map = L.map("mapid", {center: [40.72992, -74.00114], zoom: 12});
    var Stadia_OSMBright = L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', {
                                maxZoom: 20,
                                attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                            });
    Stadia_OSMBright.addTo(map);


    var circle = L.circle([40.718041, -74.012119], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);
    
    circle.bindPopup("<b>Hello world!</b><br>I am a popup.I am a circle.");
    
});
//end document ready                    

