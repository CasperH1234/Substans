  //Nav bar

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
}


  //Google Maps
function initMap(){
  //Vores kort zoom + default lokation, det er skolen vi har sat som default lokation, det kan i se ved Lat & Ing
  var options = {
   zoom:17, 
   cente:2,
   center:{lat:56.165741,lng:10.227810}
  }
  // ny map 
  var map = new google.maps.Map(document.getElementById('map1'), options)
  
  //tilføj marker
  addMarker({lat:56.165745,lng:10.227810})
  
  
  function addMarker(coords){
   var marker = new google.maps.Marker({
     position:coords, 
     map:map, 
  });
  }
  }