var productos = document.querySelector(".productos");
productos.addEventListener("click", obterElementosProductos);

function obterElementosProductos(event) {
    // event.preventDefault();
    const etiqueta = event.target;
    const listaProductos = etiqueta.closest('.productos__contenido');
    const cardSeleccionada = etiqueta.closest('.productos__card');

    var imagenes = listaProductos.querySelectorAll('.productos__card___imagen');
    var nombres = listaProductos.querySelectorAll('.productos__card___titulo');
    var precios = listaProductos.querySelectorAll('.productos__card___precio');

    var verImagen = cardSeleccionada.querySelectorAll('.productos__card___imagen');
    var verNombre = cardSeleccionada.querySelectorAll('.productos__card___titulo');
    var verPrecio = cardSeleccionada.querySelectorAll('.productos__card___precio');

    productos = [];
    guardarDatosProducto(verImagen[0], verNombre[0], verPrecio[0]);

    for (let i = 0; i < imagenes.length; i++) {

        if (verImagen[0] != imagenes[i]) {
            guardarDatosProducto(imagenes[i], nombres[i], precios[i]);
        }
    }

    localStorage.setItem('datosProductos', JSON.stringify(productos));
}


function Producto(imageUrl, name, precio) {
    this.imageUrl = imageUrl;
    this.name = name;
    this.precio = precio;
}

var productos = [];

function obtenerUrl(cardImage) {  // Obtengo la url del producto
    var image = cardImage.attributes;
    var imageUrl = image.src;
    var obtenerUrl = imageUrl.nodeValue;
    return obtenerUrl.substr(-6, 6);
}

function obtenerNombre(cardTitulo) {  // Obtengo el nombre del producto
    var obtenerN = cardTitulo.textContent;
    return obtenerN;
}

function obtenerPrecio(cardPrecio) {  // Obtengo el precio del producto
    var obtenerP = cardPrecio.textContent;
    return obtenerP;
}

function guardarDatosProducto(cardImagen, cardTitulo, cardPrecio) {

    var prod = new Producto(
        obtenerUrl(cardImagen),
        obtenerNombre(cardTitulo),
        obtenerPrecio(cardPrecio));

    productos.push(prod);
}
