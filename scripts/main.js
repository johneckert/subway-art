$(document).ready(function() {
  getUserLocation();
});

function getUserLocation() {
  //set default location - Carnegie Hall
  let latitude = 40.765061;
  let longitude = -73.979942;
  if ("geolocation" in navigator) {
    // geolocation IS available
    navigator.geolocation.getCurrentPosition(function(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      //will need to send location to backend inside here
      console.log("yes", latitude, longitude);
    });
  } else {
    // geolocation IS NOT available
    console.log("no position available");
    //stump Carnegie Hall
  }
  console.log("end", latitude, longitude);
  getSubwayInfo(latitude, longitude);
}

function getSubwayInfo(latitude, longitude) {
  fetch("http://localhost:3000/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ lat: latitude, lon: longitude })
  })
    .then(res => res.json())
    .then(json => console.log(json));
}
