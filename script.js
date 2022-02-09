function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 34.667685918050864, lng: 135.43027967345125},
        zoom: 18,
        mapId: '1c70686e723108a0'
        });
        const markers = [
            [
                "Yoshi house",
                34.66673002217483,
                135.43084588620962,
                "Yoshi's house.jpg",
                38,
                31
            ]
        ];
for(let i = 0; i < markers.length; i++){
   const currMarker = markers[i]; 
   const marker = new google.maps.Marker({
    position: {lat: currMarker[1], lng: currMarker[2] },
    map,
    title: currMarker[0],
    icon: {
        url: currMarker[3],
        scaledSize: new google.maps.Size(currMarker[4],currMarker[5])
    },
    animation: google.maps.Animation.DROP
  });
  const infowindow = new google.maps.InfoWindow({
    content: currMarker[0],
  });
  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
}

    
}