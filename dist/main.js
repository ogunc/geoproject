// Map Class Initialize
var map = L.map('map').setView([38.9573415, 35.240741], 6);
map.zoomControl.setPosition('topright');

// Adding OSM Tilelayer
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

// Adding Marker in The Center of Map
var singleMarker = L.marker([38.9573415, 35.240741]).bindPopup('A pretty CSS3 popup.<br> Easily customizable.').openPopup();

// Add Map Scale
L.control.scale({ position: 'bottomright' }).addTo(map);

// Map Coordinate Display
map.on('mousemove', function (e) {
    $('.coordinate').html(`Lat: ${e.latlng.lat} Lng: ${e.latlng.lng}`)
})



// GeoJSON Load
var marker = L.markerClusterGroup();
var iyte = L.geoJSON(data, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.name)
    }
});

iyte.addTo(marker);
marker.addTo(map);



// Leaflet Layer Control
var baseMaps = {
    'OSM': osm,
    '3D': Esri_WorldImagery
}

var overlayMaps = {
    'GeoJSON Markers': marker,
    'Singe Marker': singleMarker
}

L.control.layers(baseMaps, overlayMaps, { collapsed: false, position: 'topleft' }).addTo(map);

