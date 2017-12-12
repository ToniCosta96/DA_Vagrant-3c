
var calculoRealizado = false;

var input = document.getElementById("input");
var btnSuma = document.getElementById("btn+");
var btnMultiplicacion = document.getElementById("btnx");
document.getElementById("btnC").addEventListener("click", vaciarInput);
document.getElementById("btnCE").addEventListener("click", eliminarUltimoNumero);
document.getElementById("btnIgual").addEventListener("click", resolver);

//Añade un listener a cada botón que sea un número.
for(let i=0;i<10;i++){
	
	document.getElementById("btn"+i).addEventListener("click", function(){introducirNumero(i);});
}
document.getElementById("btn(").addEventListener("click", function(){introducirNumero("(");});
document.getElementById("btn)").addEventListener("click", function(){introducirNumero(")");});
document.getElementById("btn.").addEventListener("click", function(){introducirOperacion(".");});
document.getElementById("btnPi").addEventListener("click", function(){introducirNumero(Math.PI);});
btnSuma.addEventListener("click", function(){introducirOperacion("+");});
document.getElementById("btn-").addEventListener("click", function(){introducirOperacion("-");});
btnMultiplicacion.addEventListener("click", function(){introducirOperacion("*");});
document.getElementById("btn/").addEventListener("click", function(){introducirOperacion("/");});

document.getElementsByTagName("body")[0].addEventListener('keydown',function(){
	valoresTeclado(event.keyCode);
})

/**Elimina el contenido del input si se había realizado una operación y se introduce un número (vaciar=true),
 si se se introduce una operación (vaciar=false) se continua con el resultado anterior*/
function reiniciarInput(vaciar){
	if(calculoRealizado){
		if(vaciar){
			vaciarInput();
		}
		calculoRealizado = false;
		input.style.color = "#000000";
	}
	// Si el input vale 0 se elimina para dar paso al primer número o operador introducido
	if(input.value=="0") input.value="";
}

function introducirNumero(numero){
	reiniciarInput(true);
	input.value += numero;
	desactivarOperadores();
}

function introducirOperacion(operacion){
	if(getNumOperadores(input.value)<2){
		reiniciarInput(false);
		input.value += operacion;
		desactivarOperadores();
	}
}

function eliminarUltimoNumero(){
	input.value = input.value.substring(0, input.value.length-1);
	if(input.value=="") input.value="0";
	input.style.color = "#000000";
	desactivarOperadores();
}

function vaciarInput(){
	input.value = "0";
	input.style.color = "#000000";
	desactivarOperadores();
}


/**Este algoritmo permite resolver operaciones con una cantidad indefinida de operadores,
pero la aplicación está limitada a tres*/
function resolver(){
	let resultado;
	let operaciones = input.value.split("+");
	let multiplicacion;
	//console.log(operaciones);
	for(i=0;i<operaciones.length;i++){
		multiplicacion = operaciones[i].split("*");
		operaciones[i] = multiplicacion[0];
		for(j=1;j<multiplicacion.length;j++){
			operaciones[i] *= multiplicacion[j];
		}
	}
	//console.log(operaciones);
	resultado = parseFloat(operaciones[0]);
	for(i=1;i<operaciones.length;i++){
		resultado += parseFloat(operaciones[i]);
	}
	// Indicar que se ha realizado el cálculo.
	calculoRealizado = true;

	// Mostrar resultado por pantalla a través del input en color rojo.
	input.style.color = "#FF0000";
	input.value = resultado;

	desactivarOperadores();
}

/**Calcula la cantidad de operadores que hay en un string*/
function getNumOperadores(cadena){
	let nOperadores=0;
	for(var i=0;i<cadena.length;i++){
		if(cadena.charAt(i)=='+' || cadena.charAt(i)=='*'){
			nOperadores++;
		}
	}
	return nOperadores;
}

function valoresTeclado(char){
	if(char>=48 && char<=57){
		if(char==55 && event.shiftKey){
			//introducirOperacion("/");
		}else{
			introducirNumero(char-48);
		}
	}else if(char==8){
		eliminarUltimoNumero();
	}else if(char==187){
		if(event.shiftKey){
			introducirOperacion("*");
		}else{
			introducirOperacion("+");
		}
	}else if(char==189){
		//introducirOperacion("-");
	}else if(char==190 || char==110){
		introducirNumero(".");
	}else if(char==13){
		resolver();
	}
}

/**Esta función controla si tiene que bloquear los operadores para no introducir más de dos (ni más de 3 operandos)*/
function desactivarOperadores(){
	if(getNumOperadores(input.value)>=2){
		btnSuma.disabled = true;
		btnMultiplicacion.disabled = true;
	}else{
		btnSuma.disabled = false;
		btnMultiplicacion.disabled = false;
	}
}
