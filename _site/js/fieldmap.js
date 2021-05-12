$(document).ready(function() {
    

    //Function to convert multipoly
    //Thanks to https://github.com/jmilagroso/multipolygon-to-js-array for the code
    function convertPoly(multipoly){
        const array = [];

        let str = multipoly.replace('MULTIPOLYGON (((', '');
        str = str.replace(')))');

        const splittedCommaArray = str.split(', ');

        splittedCommaArray.map((splittedComma) => {
            const coordinate = splittedComma.split(' ');
            //flip coordinates since they are in wrong lat/lon order
            return array.push([parseFloat(coordinate[1]), parseFloat(coordinate[0])]);
        });
        return array;
    }

    

    //JS For Leaflet Map
    let map = L.map("mapid", {center: [40.72992, -74.00114], zoom: 12});
    var Stadia_OSMBright = L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', {
                                maxZoom: 20,
                                attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                            });
    Stadia_OSMBright.addTo(map);

    // jQuery to get the JSON file
    $.getJSON("https://data.cityofnewyork.us/api/views/9wwi-sb8x/rows.json", function(data){
        // console.log("data",data.data[0][8]); 
        let facilities = data.data;
        // return data.data;

        for(let i = 0; i < facilities.length; i++){
            if(facilities[i][41] == "SCR"){
                let poly = convertPoly(facilities[i][8]);
                let field = L.polygon(poly).addTo(map);
                let popUpHTML = "<b>Field Name:"+facilities[i][38]+"</b><br>"+
                                "Surface Type:"+facilities[i][44]+"<br>";
                field.bindPopup(popUpHTML);
           }
        }

        // let poly = convertPoly(data.data[0][8]);
        // console.log("poly",poly);


        // let polygon = L.polygon(poly).addTo(map);
    }).fail(function(){
        console.log("An error has occurred.");
    });
    
});
//end document ready                    

