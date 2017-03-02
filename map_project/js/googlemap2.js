function initialize() {
    var styledMap = new google.maps.StyledMapType([{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#4f595d"},{"visibility":"on"}]}]);
    var myLatlng = new google.maps.LatLng(0, 0);
    var mapOptions = {
        zoom: 2,
        center: myLatlng,
        scaleControl: true,
        disableDefaultUI: true,
        scrollwheel: true,
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    var image = {
        url: 'css/images/marker2.png',
        size: new google.maps.Size(16, 22),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(8, 22)
    };
    function newPoint(city, country){
        var geocoder =  new google.maps.Geocoder();
        geocoder.geocode( { 'address': city +', '+ country}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            var marker = new google.maps.Marker({
                position: results[0].geometry.location,
                map: map,
                title: city,
                icon: image
            }); 
          } else {
            console.log("Error Geocode " + city +', '+ country +', '+ status);
          }
        });
    }
    var destinations = [
        {"country":"Vietnam","city":"Ninh Binh"},
        {"country":"Thailand","city":"Bangkok"},
        {"country":"Vietnam","city":"Hanoi"},
        {"country":"India","city":"Delhi"},
        {"country":"India","city":"Agra"},
        {"country":"India","city":"Jaipur"},
        {"country":"India","city":"Jaisalmer"},
        {"country":"India","city":"Jodhpur"},
        {"country":"India","city":"Udaipur"},
        {"country":"India","city":"Pondicherry"},
        {"country":"France","city":"Kochin"},
        {"country":"Vietnam","city":"Saigon"},
        {"country":"Vietnam","city":"Mui Ne"},
        {"country":"Vietnam","city":"Halong Bay"},
        {"country":"Thailand","city":"Koh Chang"},
        {"country":"Thailand","city":"Chiang Mai"},
        {"country":"Thailand","city":"Pai"},
        {"country":"Laos","city":"Luang Prabang"},
        {"country":"Laos","city":"Vientiane"},
        {"country":"Laos","city":"Si Phan Don"},
        {"country":"Cambodia","city":"Siem reap"},
        {"country":"Cambodia","city":"Phnom Penh"},
        {"country":"Cambodia","city":"Koh Samui"},
        {"country":"Malaysia","city":"Kuching"},
        ];
    for(var i=0; i <= destinations.length; i++){
        var city = destinations[i].city;
        var country = destinations[i].country;
        newPoint(city, country);
    };
/*
    //--> brunei
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(4.5242486, 114.7196266),
        map: map,
        title: "brunei",
        icon: image
    });
    //--> singapore
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(1.3146631, 103.8454093),
        map: map,
        title: "singapore",
        icon: image
    });
    //--> melaka
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(2.2319263, 102.294251),
        map: map,
        title: "melaka",
        icon: image
    });
    //--> kl
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(3.139003, 101.6868554),
        map: map,
        title: "kl",
        icon: image
    });
    //--> penang
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(5.3540039, 100.1733632),
        map: map,
        title: "penang",
        icon: image
    });
    //--> ayutthaya
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(14.3536904, 100.5862823),
        map: map,
        title: "ayutthaya",
        icon: image
    });
    //--> rai
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(19.7324609, 99.9180708),
        map: map,
        title: "rai",
        icon: image
    });
    //--> kep
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(10.4657405, 104.3461475),
        map: map,
        title: "kep",
        icon: image
    });
    //--> cantho
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(10.0295464, 105.769203),
        map: map,
        title: "cantjo",
        icon: image
    });
    //--> pai
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(19.3648113, 98.389353),
        map: map,
        title: "pai",
        icon: image
    });

    //--> Huay Xai
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(20.2698035, 100.4289437),
        map: map,
        title: "Huay Xai",
        icon: image
    });

    //--> chaudoc
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(10.6833202, 105.0878549),
        map: map,
        title: "chaudoc",
        icon: image
    });

    //--> gingee
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(12.2516796, 79.4136905),
        map: map,
        title: "gingee",
        icon: image
    });
    //--> tanjor
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(11.0060209, 79.2516124),
        map: map,
        title: "tanjor",
        icon: image
    });

    //--> yangon
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(16.903821, 96.1695098),
        map: map,
        title: "yangon",
        icon: image
    });

    //--> Mawlamyine
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(16.4537684, 97.6603809),
        map: map,
        title: "Mawlamyine",
        icon: image
    });
    //--> bagan
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(21.1722065, 94.8588646),
        map: map,
        title: "bagan",
        icon: image
    });
    //--> kalaw
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(20.6267385, 96.562593),
        map: map,
        title: "kalaw",
        icon: image
    });
    //--> inle
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(20.5333241, 96.9057545),
        map: map,
        title: "inle",
        icon: image
    });
    //--> hoi an
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(15.8853518, 108.3417017),
        map: map,
        title: "hoi an",
        icon: image
    });
    //--> hue
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(16.4534777, 107.5769233),
        map: map,
        title: "hue",
        icon: image
    });
    //--> Danang
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(16.0466742, 108.206706),
        map: map,
        title: "Danang",
        icon: image
    });
    //--> sapa
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(22.3155062, 103.9052582),
        map: map,
        title: "sapa",
        icon: image
    });
    //--> jakarta
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(-6.2297465, 106.829518),
        map: map,
        title: "jakarta",
        icon: image
    });
    //--> yojakarta
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(-7.8032504, 110.3748449),
        map: map,
        title: "yojakarta",
        icon: image
    });
    //--> bromo
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(-7.9424555, 112.9530122),
        map: map,
        title: "bromo",
        icon: image
    });
    //--> ijen
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(-8.0583715, 114.243299),
        map: map,
        title: "ijen",
        icon: image
    });
    //--> ubud
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(-8.5192679, 115.263298),
        map: map,
        title: "ubud",
        icon: image
    });
    //--> gili t
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(-8.3503093, 116.0362061),
        map: map,
        title: "gili t",
        icon: image
    });
    //--> kuta
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(-8.8931117, 116.2831432),
        map: map,
        title: "kuta",
        icon: image
    });
    //--> bima
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(-8.462889, 118.7447156),
        map: map,
        title: "bima",
        icon: image
    });
    //--> ende
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(-8.8542463, 121.6764118),
        map: map,
        title: "ende",
        icon: image
    });
    //--> moni
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(-8.7430624, 121.8384655),
        map: map,
        title: "moni",
        icon: image
    });
    //--> Riong 
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(-8.4119276, 121.0295722),
        map: map,
        title: "Riong ",
        icon: image
    });
    //--> bajawa 
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(-8.8142019, 120.9769409),
        map: map,
        title: "bajawa ",
        icon: image
    });
    //--> rinca 
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(-8.5983074, 119.817596),
        map: map,
        title: "rinca ",
        icon: image
    });
    //--> Seminyak  
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(-8.6899115, 115.1654089),
        map: map,
        title: "Seminyak  ",
        icon: image
    });
    //--> Nusa Lembongan  
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(-8.6788515, 115.45006),
        map: map,
        title: "Nusa Lembongan  ",
        icon: image
    });
    //-->amed  
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(-8.334969, 115.653277),
        map: map,
        title: "amed",
        icon: image
    });
    //-->colombo  
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(6.9215479, 79.8563022),
        map: map,
        title: "colombo",
        icon: image
    });
    //-->Unawatuna  
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(6.0122525, 80.2543545),
        map: map,
        title: "Unawatuna",
        icon: image
    });
    //-->mirisa  
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(5.9516109, 80.4640981),
        map: map,
        title: "mirisa",
        icon: image
    });
    //-->Ella  
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(6.865309, 81.047347),
        map: map,
        title: "Ella",
        icon: image
    });
    //-->Nuwara elyia  
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(6.9513662, 80.780947),
        map: map,
        title: "Nuwara elyia",
        icon: image
    });
    //-->Sigiryia 
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(7.9546782, 80.7442354),
        map: map,
        title: "Sigiryia",
        icon: image
    });
    //-->Polonnaruwa 
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(7.9341133, 81.005888),
        map: map,
        title: "Polonnaruwa",
        icon: image
    });
    //-->Arugam bay 
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(6.8377511, 81.8261704),
        map: map,
        title: "Arugam bay",
        icon: image
    });
    //-->hatton
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(6.9006514, 80.5917228),
        map: map,
        title: "hatton",
        icon: image
    });
    //-->port blair
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(11.6180804, 92.7219559),
        map: map,
        title: "port blair",
        icon: image
    });
    //-->havelock
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(11.9661007, 92.9897906),
        map: map,
        title: "havelock",
        icon: image
    });




    //-->========================JAPAN========================
    //-->Tokyo
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(35.6693878, 139.6012928),
        map: map,
        title: "tokyo",
        icon: image
    });
    //-->Nikko
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(36.7289273, 139.4760834),
        map: map,
        title: "Nikko",
        icon: image
    });
    //-->Fuji
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(35.3606122, 138.692758),
        map: map,
        title: "fuji",
        icon: image
    });
    //-->Kamakura
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(35.3167039, 139.5339649),
        map: map,
        title: "Kamakura",
        icon: image
    });


    //-->========================JORDAN========================
    //-->Amman
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(31.6460133, 35.891343),
        map: map,
        title: "Amman",
        icon: image
    });
    //-->petra
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(30.3290061, 35.4424762),
        map: map,
        title: "petra",
        icon: image
    });
    //-->Wadi rum
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(29.5845836, 35.4240843),
        map: map,
        title: "Wadi rum",
        icon: image
    });
    //-->deadsea
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(31.556185, 35.4696381),
        map: map,
        title: "deadsea",
        icon: image
    });


    //-->========================EGYPT========================
    //-->luxor
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(25.6884013, 32.6391242),
        map: map,
        title: "luxor",
        icon: image
    });
    //-->esna
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(25.2908806, 32.5587964),
        map: map,
        title: "esna",
        icon: image
    });

    //-->========================KENYA========================
    //-->Nairobi
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(-1.2912448, 36.8207908),
        map: map,
        title: "Nairobi",
        icon: image
    });
    //-->mombasa
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(-4.0429653, 39.6664288),
        map: map,
        title: "mombasa",
        icon: image
    });
    //-->nakuru
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(-0.3312601, 36.0630531),
        map: map,
        title: "nakuru",
        icon: image
    });
    //-->masaimara
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(-1.4197998, 34.935576),
        map: map,
        title: "masaimara",
        icon: image
    });

    //-->========================Marocco========================
    //-->Marrakech
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(31.6420559, -8.0057963),
        map: map,
        title: "Marrakech",
        icon: image
    });
    //-->Essaouira
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(31.5092228, -9.7632497),
        map: map,
        title: "Essaouira",
        icon: image
    });

    //-->Tanger
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(35.7594879, -5.846085),
        map: map,
        title: "Tanger",
        icon: image
    });
    //-->Ceuta
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(35.8800296, -5.3283543),
        map: map,
        title: "Ceuta",
        icon: image
    });
    //-->Ouarzazate
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(30.9338244, -6.9284703),
        map: map,
        title: "Ouarzazate",
        icon: image
    });
    //-->Rabat
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(33.9769706, -6.842785),
        map: map,
        title: "Rabat",
        icon: image
    });

    //-->========================Spain========================
    //-->Barcelona
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(41.3894251, 2.1628328),
        map: map,
        title: "Barcelona",
        icon: image
    });

    //-->========================Italy========================
    //-->turin
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(45.0705419, 7.6599585),
        map: map,
        title: "turin",
        icon: image
    });
    //-->milan
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(45.4696911, 9.1675936),
        map: map,
        title: "milan",
        icon: image
    });
    //-->venise
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(45.4344105, 12.3291721),
        map: map,
        title: "venise",
        icon: image
    });
    //-->rome
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(41.9009151, 12.4862049),
        map: map,
        title: "rome",
        icon: image
    });

    //-->========================swiss========================
    //-->geneva
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(46.2038658, 6.1400538),
        map: map,
        title: "geneva",
        icon: image
    });
    //-->========================France========================
    //-->Lyon
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(45.7653891, 4.8359766),
        map: map,
        title: "Lyon",
        icon: image
    });
    //-->paris
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(48.8541562, 2.3291144),
        map: map,
        title: "paris",
        icon: image
    });
    //-->bordeaux
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(44.8397019, -0.5818521),
        map: map,
        title: "bordeaux",
        icon: image
    });
    //-->grenoble
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(45.1861263, 5.7151126),
        map: map,
        title: "grenoble",
        icon: image
    });
    //-->cholet
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(47.0613108, -0.8818253),
        map: map,
        title: "cholet",
        icon: image
    });
    //-->palavas
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(43.5300672, 3.9275445),
        map: map,
        title: "palavas",
        icon: image
    });
    //-->corse
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(42.1155635, 9.0643973),
        map: map,
        title: "corse",
        icon: image
    });

    //-->========================greece========================
    //-->athene
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(37.9829017, 23.7007426),
        map: map,
        title: "athene",
        icon: image
    });
    //-->rhodes
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(36.2187338, 27.9355939),
        map: map,
        title: "rhodes",
        icon: image
    });
    //-->========================England========================
    //-->london
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(51.507398, -0.1347667),
        map: map,
        title: "london",
        icon: image
    });
    //-->oxford
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(51.7520626, -1.2582976),
        map: map,
        title: "oxford",
        icon: image
    });
    //-->cambridge
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(52.2054988, 0.1217765),
        map: map,
        title: "cambridge",
        icon: image
    });
    //-->Brighton
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(50.8226671, -0.1370912),
        map: map,
        title: "Brighton",
        icon: image
    });
    //-->bath
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(51.3762684, -2.3611421),
        map: map,
        title: "bath",
        icon: image
    });
    //-->Stratford
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(52.1914648, -1.7098858),
        map: map,
        title: "Stratford",
        icon: image
    });
    //-->liverpool
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(53.4099764, -2.988017),
        map: map,
        title: "liverpool",
        icon: image
    });
    //-->manchester
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(53.4808986, -2.2364759),
        map: map,
        title: "manchester",
        icon: image
    });
    //-->chester
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(53.1927538, -2.8947059),
        map: map,
        title: "chester",
        icon: image
    });
    //-->blackpool
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(53.8138614, -3.044858),
        map: map,
        title: "blackpool",
        icon: image
    });
    //-->dublin
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(53.3497863, -6.255927),
        map: map,
        title: "dublin",
        icon: image
    });


    //-->========================USA========================
    //-->NY
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(40.7127336, -73.9697701),
        map: map,
        title: "NY",
        icon: image
    });
    //-->LA
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(34.0537527, -118.3142784),
        map: map,
        title: "LA",
        icon: image
    });
    //-->SF
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(37.7618864, -122.4372596),
        map: map,
        title: "SF",
        icon: image
    });
    //-->vegas
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(36.1694473, -115.1276698),
        map: map,
        title: "vegas",
        icon: image
    });
    //-->deathvalley
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(36.5614746, -117.1412028),
        map: map,
        title: "deathvalley",
        icon: image
    });
    //-->monument
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(37.0348299, -110.2401985),
        map: map,
        title: "monument",
        icon: image
    });

    //-->========================Mexico========================
    //-->cancun
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(21.1619747, -86.8568355),
        map: map,
        title: "cancun",
        icon: image
    });
    //-->chichen
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(20.6842899, -89.688388),
        map: map,
        title: "chichen",
        icon: image
    });
    //-->========================Guatemala========================
    //-->Guatemala
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(14.6350827, -90.510746),
        map: map,
        title: "Guatemala",
        icon: image
    });
    //-->antigua
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(14.5586244, -90.73352),
        map: map,
        title: "antigua",
        icon: image
    });
    //-->atitlan
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(14.6930023, -91.2070326),
        map: map,
        title: "atitlan",
        icon: image
    });
    //-->tikal
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(17.2238348, -89.6186116),
        map: map,
        title: "tikal",
        icon: image
    });


    //-->========================Colombia========================
    //-->bogota
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(4.7133831, -74.0657645),
        map: map,
        title: "bogota",
        icon: image
    });
    //-->medellin
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(6.2509473, -75.5724093),
        map: map,
        title: "medellin",
        icon: image
    });
    //-->pandi
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(4.1911475, -74.4876312),
        map: map,
        title: "pandi",
        icon: image
    });
    //-->========================venezuela========================
    //-->caracas
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(10.504441, -66.89862),
        map: map,
        title: "caracas",
        icon: image
    });
    //-->bolivar
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(8.1103942, -63.5405427),
        map: map,
        title: "bolivar",
        icon: image
    });
    //-->tepui
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(4.9937344, -60.8876484),
        map: map,
        title: "tepui",
        icon: image
    });
    //-->canaima
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(6.2650507, -62.8981463),
        map: map,
        title: "canaima",
        icon: image
    });
    //-->orinoco
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(9.3931773, -61.4505615),
        map: map,
        title: "orinoco",
        icon: image
    });
    //-->========================DOM TOM========================
    //-->cayenne
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(4.9263802, -52.3083114),
        map: map,
        title: "cayenne",
        icon: image
    });
    //-->kuru
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(5.1647915, -52.6536941),
        map: map,
        title: "kuru",
        icon: image
    });
    //-->kuru
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(5.1647915, -52.6536941),
        map: map,
        title: "kuru",
        icon: image
    });
    //-->seychelle
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(-4.6733535, 55.4738397),
        map: map,
        title: "seychelle",
        icon: image
    });
    //-->maurice
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(-20.2552778, 57.6100647),
        map: map,
        title: "maurice",
        icon: image
    });
    //-->guadeloupe
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(16.1735712, -61.6859715),
        map: map,
        title: "guadeloupe",
        icon: image
    });
    */

    window.onload = function () {
        var mapOptions = {
            center: new google.maps.LatLng(markers[0].lat, markers[0].lng),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("dvMap"), mapOptions);
        var infoWindow = new google.maps.InfoWindow();
        var lat_lng = new Array();
        var latlngbounds = new google.maps.LatLngBounds();
        for (i = 0; i < markers.length; i++) {
            var data = markers[i]
            var myLatlng = new google.maps.LatLng(data.lat, data.lng);
            lat_lng.push(myLatlng);
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: data.title
            });
            latlngbounds.extend(marker.position);
            (function (marker, data) {
                google.maps.event.addListener(marker, "click", function (e) {
                    infoWindow.setContent(data.description);
                    infoWindow.open(map, marker);
                });
            })(marker, data);
        }
        map.setCenter(latlngbounds.getCenter());
        map.fitBounds(latlngbounds);

        //***********ROUTING****************//

        //Initialize the Path Array
        var path = new google.maps.MVCArray();

        //Initialize the Direction Service
        var service = new google.maps.DirectionsService();

        //Set the Path Stroke Color
        var poly = new google.maps.Polyline({
            map: map,
            strokeColor: '#4986E7'
        });
    }


}

google.maps.event.addDomListener(window, 'load', initialize);