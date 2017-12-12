
/**Este javascript necesita para funcionar productos.json y ofertas.json*/

const MENSAJE_MARCADOR = "Tiempo restante: ";
var tiempo;
var marcadoresTiempo;
var contador;
var numProducto = 0;
var titulo, img, mensaje, precioOferta, precio, unidades;

/**Inicia el contador en los elementos con la clase "marcadorTiempo"*/
function contadorOfertas(){
	marcadoresTiempo = document.getElementsByClassName("marcadorTiempo");
	titulo = document.getElementById("tituloOferta");
	img = document.getElementsByClassName("imgOferta")[0];
	mensaje = document.getElementById("mensajeOferta");
	precioOferta = document.getElementById("precioOferta");
	precio = document.getElementById("precio");
	unidades = document.getElementById("unidadesOferta");
	// Se rellenan los datos del primer producto
	actualizarProductoOferta(0);
	// Se dibuja en los elementos de clase "marcadorTiempo" el tiempo inicial
	actualizarMarcador(tiempo);
	// Se inicia el contador
	contador = window.setInterval(contar, 1000);
}


function contar(){
	tiempo--;
	
	//Detener contador cuando el tiempo llega a 0.
	if(tiempo<=0){
		if(numProducto<(productosOferta.length-1)){
			numProducto++;
			actualizarProductoOferta(numProducto);
			actualizarMarcador(tiempo);
		}else{
			window.clearInterval(contador);
			tiempo = 0;
		}
	}

	actualizarMarcador(tiempo);
}

/*Actualiza el html con los datos de ofertas.json y productos.json*/
function actualizarProductoOferta(pos){
	// Se determina la posicion del producto en productos.json en función de su id (solo si están en ordenados)
	let posicionProducto = productosOferta[pos].id-1;

	tiempo = productosOferta[pos].tiempoOferta;
	titulo.innerHTML = productos[posicionProducto].titulo;
	img.src = productos[posicionProducto].imagen;
	mensaje.innerHTML = productosOferta[pos].mensaje;
	precioOferta.innerHTML = productosOferta[pos].precioOferta+"€";
	precio.innerHTML = productos[posicionProducto].precio+"€";
	unidades.innerHTML = "Quedan "+productosOferta[pos].limiteUnidades+" unidades en stock.";
}

/*Muestra el tiempo actual en todos los marcadores de clase "marcadorTiempo" del html*/
function actualizarMarcador(tiempo){
	for(let i=0;i<marcadoresTiempo.length;i++){
		marcadoresTiempo[i].innerHTML=MENSAJE_MARCADOR+calcularMinutos(tiempo)+":"+calcularSegundos(tiempo);
	}
}

/*Calcula la cantidad de segundos por minuto que se mostrarán a partir de una cantidad total de segundos*/
function calcularSegundos(tiempo){
	if(tiempo%60<10){
		return "0"+tiempo%60;
	}else{
		return tiempo%60;
	}
}
/*Calcula la cantidad de minutos que se mostrarán a partir de una cantidad total de segundos*/
function calcularMinutos(tiempo){
	if(tiempo<60){
		return "00";
	}else{
		if(tiempo/60<10){
			return "0"+Math.floor(tiempo/60);
		}else{
			return ""+Math.floor(tiempo/60);
		}
	}
}