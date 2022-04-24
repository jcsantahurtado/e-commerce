var datosProductos = JSON.parse(localStorage.getItem('datosProductos'));

var cardImage = document.querySelectorAll('.productos__card___imagen');

var cardNombre = document.querySelectorAll('.productos__card___titulo');
var cardPrecio = document.querySelectorAll('.productos__card___precio');

for (let i = 0; i < datosProductos.length; i++) {
    const element = datosProductos[i];

    cardImage[i].setAttribute('src', `../img/productos/${element.imageUrl}`);
    cardNombre[i].textContent = element.name;
    cardPrecio[i].textContent = element.precio;
}
