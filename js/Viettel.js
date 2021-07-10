function initMap() {
 
    const viettel = { lat: 20.9902806, lng:105.8370029 };
   
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: viettel,
    });
  
    const marker = new google.maps.Marker({
      position: viettel,
      map: map,
    });
  }
  