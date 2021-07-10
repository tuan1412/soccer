function initMap() {
 
    const viettel = { lat: 21.002194, lng:105.8478321 };
   
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: viettel,
    });
  
    const marker = new google.maps.Marker({
      position: viettel,
      map: map,
    });
  }
  