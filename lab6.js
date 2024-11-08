function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
    }

function createMap() {
    var map = L.map('map').setView([32.5, -95], 6);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    lat1= getRandomInRange(30, 35, 3);
    long1= getRandomInRange(-90, -100, 3);
    lat2= getRandomInRange(30, 35, 3);
    long2= getRandomInRange(-90, -100, 3);
    lat3= getRandomInRange(30, 35, 3);
    long3= getRandomInRange(-90, -100, 3);

    var marker1 = L.marker([lat1, long1]).addTo(map);
    var marker2 = L.marker([lat2, long2]).addTo(map);
    var marker3 = L.marker([lat3, long3]).addTo(map);

    document.getElementById('marker1').innerHTML = `Marker 1: Latitude: ${lat1}, Longitude: ${long1}`;
    document.getElementById('marker2').innerHTML = `Marker 2: Latitude: ${lat2}, Longitude: ${long2}`;
    document.getElementById('marker3').innerHTML = `Marker 3: Latitude: ${lat3}, Longitude: ${long3}`;

    getLocality(lat1,long1,1)
    getLocality(lat2,long2,2)
    getLocality(lat3,long3,3)
}

function getLocality(lat, long, index) {
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`)
        .then((res) => res.json())
        .then((resJson) => {
            document.getElementById(`locality${index}`).innerHTML = `Locality ${index}: ${resJson.locality}`;
        })
}




window.onload = createMap;