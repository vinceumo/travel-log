function initialize(){
    var styledMap = new google.maps.StyledMapType([
        {"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#4f595d"},{"visibility":"on"}]}]);

    var myLatlng = new google.maps.LatLng(0, 0);
    var mapOptions = {
        zoom: 2,
        center: myLatlng,
        disableDefaultUI: true,
        scrollwheel: true,
    }
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    var image = {
        url: 'css/images/marker2.png',
        size: new google.maps.Size(16, 22),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(8, 22)
    };
        var newLatLng = "6.244203, -75.58121189999997";
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(newLatLng),
            icon: image,
        });
        marker.setMap(map);
    // function newPoint(latLng){
        
    // }
    // console.log(destinations[0].latlng);
    // for(var i = 0; i <= destinations.length; i++){
    //     var latLng = destinations[i].latlng;
    //     newPoint(latLng);
    // };
}
google.maps.event.addDomListener(window, 'load', initialize);