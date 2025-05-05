// driver.js

function initMap(lat, lon) {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: { lat, lng: lon },
    });
  
    new google.maps.Marker({
      position: { lat, lng: lon },
      map: map,
      title: "Your Current Location",
    });
  }
  
  function showLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          document.getElementById("location-status").innerText = `Latitude: ${lat.toFixed(5)}, Longitude: ${lon.toFixed(5)}`;
          initMap(lat, lon);
        },
        () => {
          document.getElementById("location-status").innerText = "Unable to retrieve your location.";
        }
      );
    } else {
      document.getElementById("location-status").innerText = "Geolocation is not supported by this browser.";
    }
  }
  
  window.onload = showLocation;
  