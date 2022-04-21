var productos = document.querySelector(".productos");
productos.addEventListener("click", obterDivProductos);

function obterDivProductos(event) {
    // event.preventDefault();

    const etiqueta = event.target;
    const productosContenido = etiqueta.closest('.productos__contenido');
    const cardSeleccionada = etiqueta.closest('.productos__card');

    productos = [];
    guardarDatosProducto(cardSeleccionada);

    for (let i = 0; i < productosContenido.children.length; i++) {

        var productoContenido = productosContenido.children[i];
        
        if (productoContenido != cardSeleccionada) {
            console.log(`Hola`);

            guardarDatosProducto(productoContenido);

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

function obtenerUrl(cardSeleccionada) {  // Obtengo la url del producto
    var image = cardSeleccionada.querySelector('.productos__card___imagen').attributes;
    var imageUrl = image.src;
    var obtenerUrl = imageUrl.nodeValue;
    return obtenerUrl.substr(-6, 6);
}

function obtenerNombre(cardSeleccionada) {  // Obtengo el nombre del producto
    var obtenerN = cardSeleccionada.querySelector('.productos__card___titulo').textContent;
    return obtenerN;
}

function obtenerPrecio(cardSeleccionada) {  // Obtengo el precio del producto
    var obtenerP = cardSeleccionada.querySelector('.productos__card___precio').textContent;
    return obtenerP;
}

function guardarDatosProducto(cardSeleccionada) {

    var prod = new Producto(
        obtenerUrl(cardSeleccionada), 
        obtenerNombre(cardSeleccionada), 
        obtenerPrecio(cardSeleccionada));

    productos.push(prod);
    console.log(productos);
}
