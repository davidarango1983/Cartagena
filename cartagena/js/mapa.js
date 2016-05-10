$(document).ready(function(){
    
    initMap();
    
     
        
       

		
		
		//event.preventDefault();
		initMap(10.423611, -75.525278);
		function initMap(latitud, longitud) {
			var myLatLng = {
				lat: latitud,
				lng: longitud
			};

			var map = new google.maps.Map(document.getElementById('mapa'), {
				zoom: 16,
				center: myLatLng
			});


			var marker = new google.maps.Marker({
				position: myLatLng,
				map: map,
				title: elemento.title,
			});
		}

	


    }
    
);
        
        
        
        
        /* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


