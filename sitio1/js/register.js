/* COMPROBACIÓN FORMULARIO REGISTRO */
function comprueba() {
	/* comprobación contraseñas */
	var pass1 = document.getElementById("pass1").value;
	var pass2 = document.getElementById("pass2").value;
	
	/* get año pasado en el formulario de registro */
	var birthday = document.getElementById("birthday").value;
	var dateBirthday = new Date(birthday);
	var yearBirthday = dateBirthday.getFullYear();
	
	/* get año actual */
	var date = new Date();
    var yearDate = date.getFullYear();

    /* calcula la diferencia de edad */
    var maxAge = parseInt(yearDate) - parseInt(yearBirthday); 
	
	/* todos los errores son párrafos, por lo que comprobamos si 
		existe algún párrafo*/
	var errorExist = document.getElementsByTagName("p");

	/* comprueba la edad */
	if (maxAge >= 18) {
		/* si existe el elemento con ese id, lo borra ya que tiene la mayoría de edad */
		var exist = document.getElementById("error-birthday");
		if (exist != null) {
			exist.parentNode.removeChild(exist);
		}

		} else {
			/* volvemos a comprobar si existe, ya que si vuelve a introducir una fecha mal,
				no crea otra alerta */
			var exist = document.getElementById("error-birthday");
			if (exist != null) {

			} else {

			var error = document.createElement("p");
			error.id = "error-birthday";
			var content = document.createTextNode("Tienes que tener 18 años o más para poder registrarte!");

			error.appendChild(content);
			// aplicamos estilo
			error.style.color='red';
			error.style.weight="bold";
			
			var element = document.getElementById("birthday");
			console.log(error);
			element.parentNode.appendChild(error);
		}
	}

	/* comprueba si las contraseñas son iguales */
	if (pass1 === pass2) {
		/* si existe el elemento con ese id, lo borra ya que las contraseñas ya coinciden */
		var exist = document.getElementById("error-pass-2");
		if (exist != null) {
			exist.parentNode.removeChild(exist);
		}	
	} else {
		/* volvemos a comprobar si existe, ya que si vuelve a las contraseñas diferentes,
			no crea otra alerta */
		var exist = document.getElementById("error-pass-2");
		if (exist != null) {

		} else {
			var error = document.createElement("p");
			error.id = "error-pass-2";

			var content = document.createTextNode("Las contraseñas no coinciden. Por favor vuelva a introducirlas.");

			error.appendChild(content);
			// aplicamos estilo
			error.style.color='red';
			error.style.weight="bold";
			
			var element1 = document.getElementById("pass1");
			var element2 = document.getElementById("pass2");
			element1.innerHTML= "";
			element2.innerHTML= "";

			element1.parentNode.appendChild(error);
		}
	}
	/* comprueba el tamaño de la contraseña, si tiene menos de 8 caracteres, no se puede registrar */
	if (pass1.length >= 8) {
		/* si existe el elemento con ese id, lo borra ya que tiene la mayoría de edad */
		var exist = document.getElementById("error-pass-1");
		
		if (exist != null) {
			exist.parentNode.removeChild(exist);
		}	
	} else {
		/* volvemos a comprobar si existe, ya que si vuelve a introducir la contraseña con menos
		de 8 caracteres ,no crea otra alerta */
		var exist = document.getElementById("error-pass-1");
		if (exist != null) {
			
		} else {
			var error = document.createElement("p");
			error.id = "error-pass-1";

			var content = document.createTextNode("La contraseña debe de tener 8 o más caracteres.");

			error.appendChild(content);
			// aplicamos estilo
			error.style.color='red';
			error.style.weight="bold";
			
			var element = document.getElementById("pass1");
			element.innerHTML= "";
			element.parentNode.appendChild(error);
		}
	}


	/* comprobación final*/
	if (errorExist.length == 0) {
		alert("Enhorabuena! Registrado correctamente!");
	}		
}
