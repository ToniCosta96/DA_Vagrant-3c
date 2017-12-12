
/**
* Carga los productos en el div llamado "contenedorProd" [todo | ordenador | movil | consola]
*
* @param {string} producto Tipo de producto [todo | ordenador | movil | consola].
* @param {number} numProductos Cantidad de productos que se quieren mostrar (entre 1 y 100, cualquier otro num cargará 50).
*/
function cargarProductos(producto, numProductos){
	var contenedor = document.getElementById("contenedorProd");
	let productosMostrados = 0;
	let cantidadMax;
	let divProducto;
	let aProducto;
	let imgProducto;
	let divDatos;
	let tituloProducto;
	let pProducto;
	if(numProductos<=100 && numProductos>0){
		cantidadMax = numProductos;
	}else{
		cantidadMax = 50;
	}
	// Se carga el css del producto en el documento
	addCss("cssProducto");

	for(var i=0;i<productos.length;i++){
		if((producto=="todo" || productos[i].tipo==producto) && productosMostrados<cantidadMax){
			// div que contiene el producto
			divProducto = document.createElement("div");
			//divProducto.classList.add("col-lg-3");
			//divProducto.classList.add("col-md-4");
			//divProducto.classList.add("col-xs-6");
			divProducto.classList.add("productoDiv");
			divProducto.setAttribute('draggable', true);
			divProducto.addEventListener('dragstart', evento => {
				evento.dataTransfer.setData("Text", evento.target.id);
  		}, true)
			// Se añade la función para mostrar el precio al pasar el reatón sobre el producto
			addJSPrecio(divProducto);

			// Enlace que contiene la imagen del producto
			aProducto = document.createElement("a");
			aProducto.href = "producto.html?id="+productos[i].id;
			aProducto.classList.add("d-block");
			aProducto.classList.add("mb-4");

			// Imagen del producto
			imgProducto = document.createElement("img");
			imgProducto.id=i;
			imgProducto.classList.add("imgProducto");
			imgProducto.classList.add("img-fluid");

			//imgProducto.classList.add("img-thumbnail");
			imgProducto.src = productos[i].imagen;

			// Div que contiene los datos del producto
			divDatos = document.createElement("div");
			divDatos.classList.add("datosDiv");

			// Título del producto
			tituloProducto = document.createElement("h4");
			tituloProducto.innerHTML = productos[i].titulo;

			// Precio del producto
			pProducto = document.createElement("p");
			pProducto.classList.add("productoPrecio");
			pProducto.innerHTML = productos[i].precio+"€";

			// Se adjuntan los elementos a un div que a su vez es insertado dentro del div "contenedorProd"
			aProducto.appendChild(imgProducto);
			divProducto.appendChild(aProducto);
			divProducto.appendChild(divDatos);
			divDatos.appendChild(tituloProducto);
			divDatos.appendChild(pProducto);
			contenedor.appendChild(divProducto);
			// Se indica que un div ha sido añadido dentro del div "contenedorProd"
			productosMostrados++;
		}
	}
}

/**
* Se carga el css del producto en el documento
*
* @param {string} cssId Id del css
*/
function addCss(cssId){
	if (!document.getElementById(cssId)){
	    var head = document.getElementsByTagName('head')[0];
	    var link = document.createElement('link');
	    link.id = cssId;
	    link.rel = 'stylesheet';
	    link.type = 'text/css';
	    link.href = 'css/producto.css';
	    link.media = 'all';
	    head.appendChild(link);
	}
}


/**
* Se añaden los mouse listeners para mostrar el precio al pasar el ratón por encima
*
* @param {string} elementoDiv Elemento de tipo div sobre el que se aplica el mouse listener
*/
function addJSPrecio(elementoDiv){
	elementoDiv.onmouseover = function(){mostrar(elementoDiv)};
	elementoDiv.onmouseout = function(){ocultar(elementoDiv)};

	function mostrar(elementoDiv){
		let precio = elementoDiv.getElementsByTagName("p")[0];
    	precio.style.visibility = "visible";
    	precio.style.paddingRight = "10px";
    	precio.style.opacity = "1";
	}
	function ocultar(elementoDiv){
		let precio = elementoDiv.getElementsByTagName("p")[0];
	    precio.style.visibility="hidden";
	    precio.style.paddingRight = "40px";
    	precio.style.opacity = "0";
	}
}
//Iniciamos el contador de los items del carrito
var contadorCompra=0;
//Guarda el id de los items que hay en el carrito en un array
var ids = [];

function pasar(evento){
	evento.preventDefault();
}
//Al soltar el producto en el carrito hace esta accion.
function soltar(evento){
	//Aumentamos el contador de los productos ya que añadimos un producto al carrito
	contadorCompra++;
	evento.preventDefault();
	//Cojemos el id del producto soltado y lo guardamos en el array
	var id = evento.dataTransfer.getData("Text");
	var nuevoId = ids.push(id);
	//Guardamos el array de las id de los productos en un localStorage
	localStorage["ids"] = JSON.stringify(ids);
	elemento = document.getElementById("contador");
	elemento.innerHTML=contadorCompra;
}
//Esta funcion se llama al ir a la pagina del carrito, carga los productos que ha arrastrado el cliente.
function cargarProductosId(){
	var divCarrito;
	var liCarrito;
	var h2Carrito;
	var imgCarrito;
	var ids = JSON.parse(localStorage["ids"]);
	var div = document.getElementById("contenedorCart");
	for (var i = 0; i < ids.length; i++) {
		console.log(ids[i]);
		liCarrito = document.createElement("li");
		liCarrito.classList.add("list-group-item");


		h2Carrito = document.createElement("h2");
		h2Carrito.innerHTML = productos[ids[i]].titulo;

		imgCarrito = document.createElement("img");
		imgCarrito.src = productos[ids[i]].imagen;
		imgCarrito.style.width = "20%";

		divCarrito = document.createElement("div");
		divCarrito.innerHTML = productos[ids[i]].precio+"€";

		liCarrito.appendChild(h2Carrito);
		liCarrito.appendChild(imgCarrito);
		liCarrito.appendChild(divCarrito);
		div.appendChild(liCarrito);
	}

}
//Creamos un nuevo objeto Event y definimos su nombre
var eventoLogin = new Event('login');

// Añadimos una escucha, de modo que cuando se produzca el
//evento ‘imprime’ se ejecute la función que definamos
document.addEventListener('login', function() {  alert('Fase Beta error');
});
// Disparamos el evento

function beta(){
	document.dispatchEvent(eventoLogin);
}
