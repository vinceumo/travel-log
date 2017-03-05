function initialize(){
    var styledMap = new google.maps.StyledMapType([
        {"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#4f595d"},{"visibility":"on"}]}]);

    var myLatlng = new google.maps.LatLng(30, 0);
    var mapOptions = {
        zoom: 2,
        center: myLatlng,
        //disableDefaultUI: true,
        scrollwheel: false,
    }
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    var image = {
        url: 'img/marker2.png',
        size: new google.maps.Size(16, 22),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(8, 22)
    };

    function newMarkerToMap(){
        for(var i = 0; i <= destinations.length; i++){
            var latLng = destinations[i].latlng.split(", ");
            var lat = Number(latLng[0]);
            var lng = Number(latLng[1]);
            var newLatLng = new google.maps.LatLng(lat, lng);
            var marker = new google.maps.Marker({
                position: newLatLng,
                map: map,
                icon: image,
            });
        };
    }
    newMarkerToMap();
}
google.maps.event.addDomListener(window, 'load', initialize);