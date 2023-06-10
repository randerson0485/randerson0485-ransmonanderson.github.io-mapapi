// variables created
let map;
let rng = {lat: 41.88883, lng: -87.63526};
let wf = {lat:  41.947746, lng: -87.656036};
let cr = {lat:  41.881832, lng: -87.623177 };


// map created
function initMap() {
  const myLatLng = { lat: 41.881832, lng: -87.623177 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: myLatLng,
  });

  let markerOptions = {
  position: new google.maps.LatLng(rng),
  map:map,
  icon: './scss/components/images.scss/food.svg'
}

  let markerOptions2 = {
    position: new google.maps.LatLng(wf),
    map:map,
    icon: './scss/components/images.scss/sports.svg'
  }

  let markerOptions3 = {
    position: new google.maps.LatLng(cr), 
    map:map,
    icon: './scss/components/images.scss/dumbell.svg'
  }

let marker = new google.maps.Marker(markerOptions)
let marker2 = new google.maps.Marker(markerOptions2)
let marker3 = new google.maps.Marker(markerOptions3)
}

window.initMap = initMap;
