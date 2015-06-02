function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    var img_center = '../img/max/center_icon.png';
    var userCoordinates = new google.maps.LatLng(latitude, longitude);
    document.getElementById("center").addEventListener("click", function () {
        document.getElementById("long").innerHTML = longitude;
        document.getElementById("lat").innerHTML = latitude;

        var center = new google.maps.Marker({
            position: userCoordinates,
            map: map,
            icon: img_center
        });
        map.setCenter({lat: latitude, lng: longitude});
    });
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}