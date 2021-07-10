function initMap() {
 
    const viettel = { lat: 20.9797268, lng:105.7929359 };
   
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: viettel,
    });
  
    const marker = new google.maps.Marker({
      position: viettel,
      map: map,
    });
  }
  