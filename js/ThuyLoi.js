
function initMap() {
 
    const viettel = { lat: 21.0060314, lng:105.8268959 };
   
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: viettel,
    });
  
    const marker = new google.maps.Marker({
      position: viettel,
      map: map,
    });
  }
  