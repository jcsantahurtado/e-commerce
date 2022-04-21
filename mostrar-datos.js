var datosProductos = JSON.parse(localStorage.getItem('datosProductos'));
console.log(datosProductos);

var cardImage = document.querySelectorAll('.productos__card___imagen');
console.log(cardImage[0]);;

var cardNombre = document.querySelectorAll('.productos__card___titulo');
console.log(cardNombre[0]);;
var cardPrecio = document.querySelectorAll('.productos__card___precio');

for (let i = 0; i < datosProductos.length; i++) {
    const element = datosProductos[i];

    cardImage[i].setAttribute('src', `../img/productos/${element.imageUrl}`);
    cardNombre[i].textContent = element.name;
    cardPrecio[i].textContent = element.precio;
}
