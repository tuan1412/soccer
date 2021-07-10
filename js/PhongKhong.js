function initMap() {
 
    const viettel = { lat: 20.9979887, lng:105.8290721 };
   
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: viettel,
    });
  
    const marker = new google.maps.Marker({
      position: viettel,
      map: map,
    });
  }
