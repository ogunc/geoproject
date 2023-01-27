// Full Screen Map View
var mapId = document.getElementById('map');
function fullScreenView() {
    if (mapId.requestFullscreen) {
        mapId.requestFullscreen();
    } else if (mapId.webkitRequestFullscreen) { /* Safari */
        mapId.webkitRequestFullscreen();
    } else if (mapId.msRequestFullscreen) { /* IE11 */ 
        mapId.msRequestFullscreen(); 
    }
}

// Leaflet Browser Print Function
var browserControl = L.control.browserPrint({ position: 'topright' }).addTo(map);

// Leaflet Search
L.Control.geocoder().addTo(map);

// Leaflet Measure
L.control.measure({
    primaryLengthUnit: 'meters', 
    secondaryLengthUnit: 'kilometers',
    primaryAreaUnit: 'acres', 
    secondaryAreaUnit: 'hectares'
}).addTo(map);

// Zoom to Layer
$('.zoom-to-layer').click(function() {
    map.setView([38.9573415, 35.240741], 6)
})