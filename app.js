        /* global $ */
         $('.detect').click(function getWeatherData() {
               /* global $ */
                /* global position */
               $.ajax({
                    url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&units=imperial' + '&APPID=33bff6735a6a92d2c8ad14bd40df7440',
                     type: "GET",
                 dataType: "jsonp",
                    success: function(data) {
                        console.log(data);
                 }


               });

           });