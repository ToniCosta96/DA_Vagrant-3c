/**********MAPA*******************/
function imprime() {
	  var MisCoordenadas = new google.maps.LatLng(39.3935163,-0.4137748,17); //coordenadas de ubicación
	  var opciones = {
		  zoom: 15, //zoom de tu mapa
		  center: MisCoordenadas, //centrar tu mapa
		  scrollwheel: false, //si colocas true en vez de false el usuario podrá hacer scroll dentro del mapa
		  draggable: true, //esta opción es la manito que aparece y es usado para desplazarse en el mapa
		  mapTypeId: google.maps.MapTypeId.ROADMAP
	  };
	  //creamos un objeto mapa, dentro del elemento definido "map-canvas", con las opciones definidas.;
	  var objetoMapa = new google.maps.Map(document.getElementById('map-canvas'), opciones);

	  //imagen y dirección
	  var direccion = '<p>Carrer del Rei en Jaume I, 2, 46470 Catarroja, València</p>';

	  var marcador = new google.maps.Marker({
			  position: MisCoordenadas,
			  icon: '', //icono de ubicación
			  animation: google.maps.Animation.DROP,
			  map: objetoMapa
			  });

	  //custom
	  google.maps.event.addListener(marcador, 'click', function(event) {
		  placeMarker(marcador, event.MisCoordenadas);
		  });

		function placeMarker(map, location) {

		  //con el "mapa" y la posicion creamos el marcador
		  var marcador = new google.maps.Marker({
			  position: MisCoordenadas,
			  icon: 'punto.png', //icono de ubicación
			  map: objetoMapa

			  });

		  //Muestra la dirección
		  var infowindow = new google.maps.InfoWindow({content: direccion});

		  infowindow.open(objetoMapa,marcador);
	}

	 
	}
	/*El google.maps.event.addDomListener añade un detector de eventos DOM, en este caso al windowobjeto, para el evento 'carga', y especifica una función a ejecutar.*/
	google.maps.event.addDomListener(window, 'load', imprime);


/************VALIDACIÓN FORMULARIO************************/

function comprueba(){
		var valorEmail = document.getElementById("campoEmail").value;
		var valorNombre = document.getElementById("campoNombre").value;
		var valorTel = document.getElementById("campoTel").value;

		if (/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(valorNombre)) {
		}else{
			alert("Nombre introducido incorrecto");
			return false;

		} 

		if (/^[\w]+@{1}[\w]+\.[a-z]{2,3}$/.test(valorEmail)) {

		}else{
			alert("Email introducido incorrecto");
			return false;

		}

		if (/^[9|6]{1}([\d]{2}[-]*){3}[\d]{2}$/.test(valorTel)) {

		}else{
			alert("Teléfono introducido incorrecto");
			return false;

		}

}

