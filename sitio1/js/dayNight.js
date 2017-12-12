/* variable para comprobar si has elegido noche o día */
var isNight = false;

/* función que te cambia todo a modo noche */
function night() {
    var bodyStyle = document.body.style.backgroundColor = "#373737";
    var transitionStyle = document.body.style.transition = "2s";
    var ofertaBackgroundStyle = document.getElementById('ofertaDiv').style.backgroundColor = "#565656";
    var ofertaColor = document.getElementById('ofertaDiv').style.color = "white";

    var productos = document.getElementsByClassName('productoDiv');

    for (var i = 0; i < productos.length; i++) {
    	var transition = productos[i].style.transition = "2s";
    	var backgroundColor = productos[i].style.backgroundColor = "#565656";
    	var color = productos[i].style.color = "white";
    }

    localStorage.setItem('night', true);
    
}

/* función que te cambia todo a noche */
function day() {
    document.body.style.backgroundColor = "white"
    document.body.style.transition = "2s";
 	document.getElementById('ofertaDiv').style.backgroundColor = "white";
    document.getElementById('ofertaDiv').style.color = "black";

    var productos = document.getElementsByClassName('productoDiv');
    for (var i = 0; i < productos.length; i++) {
    	productos[i].style.transition = "2s";
    	productos[i].style.backgroundColor = "white";
    	productos[i].style.color = "black";
    }

    localStorage.setItem('night', false);
}

/* localStorage donde alcmacena si estás en modo noche o día */
function localS() {
	if (localStorage.getItem('night') == 'true') {
		night();
	} else {
		day();
	}


}

