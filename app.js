 /* global $ */
/* global navigator */
        
        var x = document.getElementById("print");

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            }
            else {
                x.innerHTML = "Geolocation is not supported by this browser.";
            }
        }

        function showPosition(position) {
            /*global latlon */ 
            var latlon = 'lat=' + position.coords.latitude + "&lon=" + position.coords.longitude;
            x.innerHTML = "<br>Latitude: " + position.coords.latitude +
                "<br>Longitude: " + position.coords.longitude;
        }
        
$(document).ready(function() {
  $('.showWeather').click(function(){
    
    if(latlon != ''){
      $.ajax({
       url: 'https://fcc-weather-api.glitch.me/api/current?' + latlon,
        type: "GET",
        dataType: "jsonp",
        success: function(data){
        console.log(data);
                }
                
      });
    }else{
        $("#error").html('Cannot detect location');
        
    }

  });
});