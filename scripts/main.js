$(document).ready(function() {
  getUserLocation();
});

function getUserLocation() {
  if ("geolocation" in navigator) {
    // geolocation is available
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position.coords.latitude, position.coords.longitude);
    });
  } else {
    // geolocation IS NOT available
    console.log("no position available");
  }
}

function getSubwayInfo(locationData) {
  fetch("http://localhost:3000/", {})
    .then(res => res.json())
    .then(json => console.log(json));
}
