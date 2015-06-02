var infowindow = null;

function initialize()
{
    var mapProp = {
        center: new google.maps.LatLng(47.822524, 13.175407),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    setStages(map, stages);
    setCamping(map, camps);
    setParking(map, parking);
    setEntrances(map, entrances);
    getLocation();

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


    infowindow = new google.maps.InfoWindow({
        content: "loading..."
    });


    var coordinates_main = [
        new google.maps.LatLng(47.823780, 13.175142),
        new google.maps.LatLng(47.823407, 13.174622),
        new google.maps.LatLng(47.822881, 13.175143),
        new google.maps.LatLng(47.822162, 13.175919),
        new google.maps.LatLng(47.821920, 13.176144),
        new google.maps.LatLng(47.821475, 13.176280),
        new google.maps.LatLng(47.821486, 13.176761),
        new google.maps.LatLng(47.822228, 13.176742),
        new google.maps.LatLng(47.822620, 13.176488),
        new google.maps.LatLng(47.823507, 13.175557),
        new google.maps.LatLng(47.823723, 13.175309)
    ];

    var coordinates_clubcircus = [
        new google.maps.LatLng(47.823291, 13.173913),
        new google.maps.LatLng(47.822969, 13.173379),
        new google.maps.LatLng(47.822729, 13.173574),
        new google.maps.LatLng(47.822618, 13.173814),
        new google.maps.LatLng(47.822558, 13.174118),
        new google.maps.LatLng(47.822521, 13.174505),
        new google.maps.LatLng(47.822687, 13.174864),
        new google.maps.LatLng(47.822946, 13.174509)
    ];

    var coordinates_qdance = [
        new google.maps.LatLng(47.820168, 13.175917),
        new google.maps.LatLng(47.819408, 13.176167),
        new google.maps.LatLng(47.819366, 13.176188),
        new google.maps.LatLng(47.819198, 13.174816),
        new google.maps.LatLng(47.819491, 13.174796),
        new google.maps.LatLng(47.819889, 13.174863),
        new google.maps.LatLng(47.820168, 13.174965),
        new google.maps.LatLng(47.820224, 13.175034)

    ];

    var coordinates_stonehenge = [
        new google.maps.LatLng(47.820168, 13.1759179),
        new google.maps.LatLng(47.819408, 13.1761679),
        new google.maps.LatLng(47.819366, 13.1761889),
        new google.maps.LatLng(47.819313, 13.1766959),
        new google.maps.LatLng(47.819370, 13.1770759),
        new google.maps.LatLng(47.819961, 13.1767139),
        new google.maps.LatLng(47.820108, 13.1766719),
        new google.maps.LatLng(47.820183, 13.1761659)
    ];

    var coordinates_caravanCamping = [
        new google.maps.LatLng(47.826982, 13.171333),
        new google.maps.LatLng(47.826660, 13.171068),
        new google.maps.LatLng(47.826474, 13.170558),
        new google.maps.LatLng(47.826352, 13.170304),
        new google.maps.LatLng(47.826023, 13.170127),
        new google.maps.LatLng(47.825888, 13.170405),
        new google.maps.LatLng(47.825774, 13.170575),
        new google.maps.LatLng(47.825532, 13.170683),
        new google.maps.LatLng(47.825382, 13.170767),
        new google.maps.LatLng(47.825173, 13.171105),
        new google.maps.LatLng(47.824825, 13.171390),
        new google.maps.LatLng(47.824796, 13.171931),
        new google.maps.LatLng(47.824946, 13.172407),
        new google.maps.LatLng(47.825225, 13.172628),
        new google.maps.LatLng(47.826453, 13.172281),
        new google.maps.LatLng(47.826652, 13.172102),
        new google.maps.LatLng(47.826781, 13.171628),
        new google.maps.LatLng(47.827015, 13.171343)
    ];

    var coordinates_campingNorth = [
        new google.maps.LatLng(47.827015, 13.171343),
        new google.maps.LatLng(47.827892, 13.173935),
        new google.maps.LatLng(47.826549, 13.175391),
        new google.maps.LatLng(47.827160, 13.177780),
        new google.maps.LatLng(47.826942, 13.178078),
        new google.maps.LatLng(47.826914, 13.178876),
        new google.maps.LatLng(47.827422, 13.180260),
        new google.maps.LatLng(47.827437, 13.181879),
        new google.maps.LatLng(47.826553, 13.181187),
        new google.maps.LatLng(47.826105, 13.180950),
        new google.maps.LatLng(47.825902, 13.181380),
        new google.maps.LatLng(47.825626, 13.183243),
        new google.maps.LatLng(47.825279, 13.183834),
        new google.maps.LatLng(47.824857, 13.184077),
        new google.maps.LatLng(47.824339, 13.183904),
        new google.maps.LatLng(47.824366, 13.182364),
        new google.maps.LatLng(47.824408, 13.181485),
        new google.maps.LatLng(47.824032, 13.181313),
        new google.maps.LatLng(47.823900, 13.180688),
        new google.maps.LatLng(47.823870, 13.179587),
        new google.maps.LatLng(47.823651, 13.178527),
        new google.maps.LatLng(47.824247, 13.178249),
        new google.maps.LatLng(47.825017, 13.175307),
        new google.maps.LatLng(47.824946, 13.172407),
        new google.maps.LatLng(47.825225, 13.172628),
        new google.maps.LatLng(47.826453, 13.172281),
        new google.maps.LatLng(47.826652, 13.172102),
        new google.maps.LatLng(47.826781, 13.171628),
        new google.maps.LatLng(47.827015, 13.171343)
    ];

    var coordinates_campingComfort = [
        new google.maps.LatLng(47.821533, 13.1790499),
        new google.maps.LatLng(47.821634, 13.1797709),
        new google.maps.LatLng(47.821738, 13.1806779),
        new google.maps.LatLng(47.821599, 13.1806539),
        new google.maps.LatLng(47.821406, 13.1807939),
        new google.maps.LatLng(47.821145, 13.1806749),
        new google.maps.LatLng(47.820928, 13.1807219),
        new google.maps.LatLng(47.820813, 13.1804209),
        new google.maps.LatLng(47.820444, 13.1804759),
        new google.maps.LatLng(47.820189, 13.1803839),
        new google.maps.LatLng(47.820295, 13.1792929),
        new google.maps.LatLng(47.820728, 13.1788669)
    ];

    var coordinates_parkingComfort = [
        new google.maps.LatLng(47.821634, 13.179770),
        new google.maps.LatLng(47.821738, 13.180677),
        new google.maps.LatLng(47.822120, 13.181576),
        new google.maps.LatLng(47.822919, 13.181042),
        new google.maps.LatLng(47.823013, 13.180213),
        new google.maps.LatLng(47.822747, 13.179059),
        new google.maps.LatLng(47.822571, 13.179309),
        new google.maps.LatLng(47.821954, 13.179546)
    ];
    var coordinates_parkingNorth = [
        new google.maps.LatLng(47.827015, 13.171343),
        new google.maps.LatLng(47.827892, 13.173935),
        new google.maps.LatLng(47.826549, 13.175391),
        new google.maps.LatLng(47.827160, 13.177780),
        new google.maps.LatLng(47.827831, 13.178727),
        new google.maps.LatLng(47.828961, 13.179410),
        new google.maps.LatLng(47.829583, 13.179433),
        new google.maps.LatLng(47.829546, 13.178957),
        new google.maps.LatLng(47.829498, 13.178760),
        new google.maps.LatLng(47.829615, 13.178389),
        new google.maps.LatLng(47.829665, 13.178040),
        new google.maps.LatLng(47.829983, 13.178057),
        new google.maps.LatLng(47.830028, 13.177025),
        new google.maps.LatLng(47.829819, 13.174623),
        new google.maps.LatLng(47.829431, 13.172656),
        new google.maps.LatLng(47.828762, 13.170372),
        new google.maps.LatLng(47.828300, 13.170598),
        new google.maps.LatLng(47.828065, 13.170167),
        new google.maps.LatLng(47.827690, 13.170869),
        new google.maps.LatLng(47.827487, 13.171092),
        new google.maps.LatLng(47.827187, 13.171252)
    ];

    var coordinates_campingSouth = [
        new google.maps.LatLng(47.822088, 13.171936),
        new google.maps.LatLng(47.821638, 13.172478),
        new google.maps.LatLng(47.821467, 13.174070),
        new google.maps.LatLng(47.819255, 13.173822),
        new google.maps.LatLng(47.819546, 13.171653),
        new google.maps.LatLng(47.819198, 13.170659),
        new google.maps.LatLng(47.818865, 13.170464),
        new google.maps.LatLng(47.818836, 13.169600),
        new google.maps.LatLng(47.818995, 13.168606),
        new google.maps.LatLng(47.818878, 13.167632),
        new google.maps.LatLng(47.819008, 13.166309),
        new google.maps.LatLng(47.819066, 13.165745),
        new google.maps.LatLng(47.820069, 13.165808),
        new google.maps.LatLng(47.820491, 13.165353),
        new google.maps.LatLng(47.820753, 13.165310),
        new google.maps.LatLng(47.821408, 13.166479),
        new google.maps.LatLng(47.821844, 13.169709),
        new google.maps.LatLng(47.822031, 13.170899)
    ];

    var coordinates_entranceSouth = [
        new google.maps.LatLng(47.821525, 13.173490),
        new google.maps.LatLng(47.821795, 13.173921),
        new google.maps.LatLng(47.821927, 13.174808),
        new google.maps.LatLng(47.821750, 13.175074),
        new google.maps.LatLng(47.821093, 13.175310),
        new google.maps.LatLng(47.821750, 13.175074),
        new google.maps.LatLng(47.822328, 13.174809),
        new google.maps.LatLng(47.822426, 13.174651),
        new google.maps.LatLng(47.822520, 13.173847),
        new google.maps.LatLng(47.822589, 13.173647),
        new google.maps.LatLng(47.822776, 13.173363),
        new google.maps.LatLng(47.823121, 13.173133),
        new google.maps.LatLng(47.823169, 13.172868),
        new google.maps.LatLng(47.823143, 13.171651),
        new google.maps.LatLng(47.823068, 13.170102),
        new google.maps.LatLng(47.822805, 13.169531),
        new google.maps.LatLng(47.822793, 13.169369),
        new google.maps.LatLng(47.822370, 13.168462),
        new google.maps.LatLng(47.822240, 13.168331),
        new google.maps.LatLng(47.821889, 13.168088),
        new google.maps.LatLng(47.821584, 13.167404),
        new google.maps.LatLng(47.821460, 13.166784)
    ];



    var coordinates_entranceNorth = [
        new google.maps.LatLng(47.824876, 13.172456),
        new google.maps.LatLng(47.824785, 13.172637),
        new google.maps.LatLng(47.824857, 13.173253),
        new google.maps.LatLng(47.824846, 13.173622),
        new google.maps.LatLng(47.824721, 13.174029),
        new google.maps.LatLng(47.824625, 13.174973),
        new google.maps.LatLng(47.824428, 13.175549),
        new google.maps.LatLng(47.824348, 13.176151),
        new google.maps.LatLng(47.824281, 13.176325),
        new google.maps.LatLng(47.824047, 13.176702),
        new google.maps.LatLng(47.823974, 13.176966),
        new google.maps.LatLng(47.823938, 13.177764),
        new google.maps.LatLng(47.824298, 13.178248),
        new google.maps.LatLng(47.823938, 13.177764),
        new google.maps.LatLng(47.823170, 13.178028),
        new google.maps.LatLng(47.822576, 13.179357),
        new google.maps.LatLng(47.823170, 13.178028),
        new google.maps.LatLng(47.822916, 13.177451),
        new google.maps.LatLng(47.822328, 13.177342),
        new google.maps.LatLng(47.822059, 13.177294),
        new google.maps.LatLng(47.822024, 13.177005),
        new google.maps.LatLng(47.822018, 13.176739),
        new google.maps.LatLng(47.821486, 13.176761),
        new google.maps.LatLng(47.821475, 13.176280),
        new google.maps.LatLng(47.821215, 13.175486),
        new google.maps.LatLng(47.821093, 13.175310),
        new google.maps.LatLng(47.820929, 13.175134),
        new google.maps.LatLng(47.820836, 13.175067),
        new google.maps.LatLng(47.820224, 13.175034),
        new google.maps.LatLng(47.820168, 13.175917),
        new google.maps.LatLng(47.820183, 13.176165),
        new google.maps.LatLng(47.820108, 13.176671),
        new google.maps.LatLng(47.819978, 13.176727)


    ];

    var coordinates_entrance = [
        new google.maps.LatLng(47.820516, 13.179008),
        new google.maps.LatLng(47.820450, 13.178860),
        new google.maps.LatLng(47.820626, 13.178585),
        new google.maps.LatLng(47.820622, 13.178373),
        new google.maps.LatLng(47.820676, 13.178223),
        new google.maps.LatLng(47.820990, 13.177729),
        new google.maps.LatLng(47.821025, 13.177617),
        new google.maps.LatLng(47.821002, 13.177523),
        new google.maps.LatLng(47.820896, 13.177435),
        new google.maps.LatLng(47.820169, 13.176938),
        new google.maps.LatLng(47.820035, 13.176903),
        new google.maps.LatLng(47.819995, 13.176831),
        new google.maps.LatLng(47.819978, 13.176727)
    ];

    var path_main = new google.maps.Polygon({
        paths: coordinates_main,
        strokeColor:"#3A80E8",
        strokeOpacity:0.8,
        strokeWeight:1,
        fillColor:"#2457a2",
        fillOpacity:0.7,
        zIndex: 1
    });

    var path_clubcircus = new google.maps.Polygon({
        paths: coordinates_clubcircus,
        strokeColor:"#175413",
        strokeOpacity:0.8,
        strokeWeight:1,
        fillColor:"#2C9926",
        fillOpacity:0.7,
        zIndex: 1
    });

    var path_qdance = new google.maps.Polygon({
        paths: coordinates_qdance,
        strokeColor:"#2A2699",
        strokeOpacity:0.8,
        strokeWeight:1,
        fillColor:"#4640FF",
        fillOpacity:0.7,
        zIndex: 1
    });

    var path_stonehenge = new google.maps.Polygon({
        paths: coordinates_stonehenge,
        strokeColor:"#CC9037",
        strokeOpacity: 0.9,
        strokeWeight:1,
        fillColor:"#FFB445",
        fillOpacity:0.7,
        zIndex: 1
    });

    var path_caravanCamping = new google.maps.Polygon({
        paths: coordinates_caravanCamping,
        strokeColor:"#B56D07",
        strokeOpacity:0.8,
        strokeWeight:1,
        fillColor:"#EB963B",
        fillOpacity:0.7,
        zIndex: 1
    });

    var path_campingNorth = new google.maps.Polygon({
        paths: coordinates_campingNorth,
        strokeColor:"#347516",
        strokeOpacity:0.8,
        strokeWeight:1,
        fillColor:"#4DB31E",
        fillOpacity:0.7,
        zIndex: 1
    });

    var path_campingSouth = new google.maps.Polygon({
        paths: coordinates_campingSouth,
        strokeColor:"#801D1D",
        strokeOpacity:0.8,
        strokeWeight:1,
        fillColor:"#FF3636",
        fillOpacity:0.7,
        zIndex: 1
    });

    var path_campingComfort = new google.maps.Polygon({
        paths: coordinates_campingComfort,
        strokeColor:"#0C310C",
        strokeOpacity:0.8,
        strokeWeight:1,
        fillColor:"#29A329",
        fillOpacity:0.7,
        zIndex: 1
    });

    var path_parkingComfort = new google.maps.Polygon({
        paths: coordinates_parkingComfort,
        strokeColor:"#660000",
        strokeOpacity:0.8,
        strokeWeight:1,
        fillColor:"#CC0000",
        fillOpacity:0.7,
        zIndex: 1
    });

    var path_parkingNorth = new google.maps.Polygon({
        paths: coordinates_parkingNorth,
        strokeColor:"#851522",
        strokeOpacity:0.8,
        strokeWeight:1,
        fillColor:"#F0243C",
        fillOpacity:0.7,
        zIndex: 1
    });

    var path_entranceSouth = new google.maps.Polyline({
        path: coordinates_entranceSouth,
        strokeColor:"#00CCFF",
        strokeOpacity:0.9,
        strokeWeight:7
    });

    var path_entranceNorth = new google.maps.Polyline({
        path: coordinates_entranceNorth,
        strokeColor:"#00CCFF",
        strokeOpacity:0.9,
        strokeWeight:7
    });

    var path_entrance = new google.maps.Polyline({
        path: coordinates_entrance,
        strokeColor:"#00CCFF",
        strokeOpacity:0.9,
        strokeWeight:7
    });

    var paths = [
        path_campingComfort, path_campingNorth, path_campingSouth, path_caravanCamping, path_clubcircus, path_entrance,
        path_entranceNorth, path_entranceSouth, path_main, path_parkingComfort, path_parkingNorth, path_qdance, path_stonehenge
    ];

    function setMap (paths){
        for(var i = 0; i<paths.length; i++){
            var p = paths[i];
            p.setMap(map);
        }
    }
    setMap(paths);
/* initialized finished*/
}


var stages = [
    ['Mainstage', 47.823007, 13.175547, 9, '<p class="pag">Main Stage</p><a href="../sites/stages/mainstage.html"style="font-family: elfFont">Timetable</a>'],
    ['Clubcircus', 47.822759, 13.173946, 2, '<p class="pag">Club Circus</p><a href="../sites/stages/clubcircus.html"style="font-family: elfFont">Timetable</a>'],
    ['qdance', 47.819577, 13.175395, 3, '<p class="pag">Q-Dance Stage</p><a href="../sites/stages/qdance.html"style="font-family: elfFont">Timetable</a>'],
    ['stonehenge', 47.819711, 13.176502, 6, '<p class="pag">Stonehenge</p><a href="../sites/stages/stonehenge.html"style="font-family: elfFont">Timetable</a>']
];

var camps = [
    ['south', 47.820650, 13.170293, 5, "<p class='pag'>Campnig South</p>"],
    ['caravan', 47.825707, 13.171533, 7, "<p class='pag'>Camping Caravan</p>"],
    ['north', 47.825411, 13.178014, 8, "<p class='pag'>Camping North</p>"],
    ['comfort', 47.820625, 13.179887, 6, "<p class='pag'>Comfort Camping</p>"]
];

var parking = [
    ['parkingNorth',47.828468, 13.175752, 4, "<p class='pag' style='font-family: elfFont'>Parking - Camping North</p>"],
    ['parkingComfort',47.822062, 13.180255, 4, "<p class='pag' style='font-family: elfFont'>Parking - Comfort Camping</p>"],
];

var entrances = [
    ['south1', 47.821850, 13.174311, 4, "<p class='pag'>South Entrance 1</p>"],
    ['south2', 47.822801, 13.169587, 5, "<p class='pag'>South Entrance 2</p>"],
    ['north', 47.823170, 13.178028, 5, "<p class='pag'>North Entrance</p>"],
    ['north', 47.820667, 13.177333, 5, "<p class='pag'>North Entrance</p>"]
];

function setCamping(map, campsides) {

    /* setting up the camping spots*/
    var img_camp = '../img/maps/camping_marker.png';
    for (var i = 0; i< campsides.length; i++) {
        var camp = campsides[i];
        var campLatLng = new google.maps.LatLng(camp[1], camp[2]);
        var marker_camp = new google.maps.Marker({
            position: campLatLng,
            map: map,
            icon: img_camp,
            title: camp[0],
            zIndex: camp[3],
            html: camp[4]
        });
        google.maps.event.addListener(marker_camp, 'click', function(){
            infowindow.setContent(this.html);
            infowindow.open(map, this);
        });
    }
}

function setStages(map, locations) {
    var img_stage = '../img/maps/stages_marker.png';
    for (var i = 0; i < locations.length; i++) {
        var stage = locations[i];
        var myLatLng = new google.maps.LatLng(stage[1], stage[2]);
        var marker_stage = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: img_stage,
            title: stage [0],
            zIndex: stage[3],
            html: stage [4]
        });
        google.maps.event.addListener(marker_stage, 'click', function(){
            infowindow.setContent(this.html);
            infowindow.open(map, this);
        });
    }
}

function setParking(map, parks){
    var img_parking = '../img/maps/park_marker.png';
    for (var i = 0; i < parks.length; i++) {
        var parking = parks[i];
        var myLatLng = new google.maps.LatLng(parking[1], parking[2]);
        var marker_parking = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: img_parking,
            title: parking [0],
            zIndex: parking[3],
            html: parking [4]
        });
        google.maps.event.addListener(marker_parking, 'click', function(){
            infowindow.setContent(this.html);
            infowindow.open(map, this);
        });
    }
}

function setEntrances(map, entrance){
    var img_entrance = '../img/maps/entrance_marker.png';
    for(var i = 0; i < entrance.length; i++){
        var ent = entrance[i];
        var myLatLng = new google.maps.LatLng(ent[1], ent[2]);
        var marker_entrance = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: img_entrance,
            title: ent[0],
            zIndex: ent[3],
            html: ent[4]
        });
        google.maps.event.addListener(marker_entrance, 'click', function () {
            infowindow.setContent(this.html);
            infowindow.open(map, this);
        });
    }
}

google.maps.event.addDomListener(window, 'load', initialize);

