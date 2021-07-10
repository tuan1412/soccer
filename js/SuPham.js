function initMap() {
 
    const supham = { lat: 21.0372425, lng:105.7834297};
   
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: supham,
    });
  
    const marker = new google.maps.Marker({
      position: supham,
      map: map,
    });
  }
  