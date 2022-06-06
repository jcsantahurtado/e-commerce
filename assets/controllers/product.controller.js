import { productServices } from "../service/product-service.js";

const contenedor = document.querySelector('.productos__contenido');
const loader = document.querySelector('.loader');

productServices.listProductos().then((data) => {

  const ordered = data.sort((a, b) => a.fechaUltimaActualizacion > b.fechaUltimaActualizacion ? 1 : -1)

  ordered.forEach(({ image, nombre, precio, descripcion, categoria, id }) => {
    const nuevoProducto = crearNuevaCard(productServices, image, nombre, precio, descripcion, categoria, id);
    contenedor.insertBefore(nuevoProducto, contenedor.firstChild);

  });

  loader.style.display = 'none';

})
  .catch((err) => alert(`Error`, err));


const campoBuscar = document.querySelector('.header__search-container input');

function buscar(palabraABuscar, productos) {
  return productos.filter(producto => {
    const regex = new RegExp(palabraABuscar, 'gi');
    return producto.nombre.match(regex);
  })
}

campoBuscar.addEventListener('input', function () {

  if (this.value != '') {
    document.querySelector('.productos__header a').style.display = 'none';
    document.querySelector('.productos__header h4').textContent = `Resultados para "${this.value}"`;

  } else {
    document.querySelector('.productos__header a').style.display = 'block';
    document.querySelector('.productos__header h4').textContent = 'Todos los productos';
  }

  let productos = [];
  productServices.listProductos().then(data => {
    productos.push(...data);
    const encontrados = buscar(this.value, productos);

    contenedor.innerHTML = '';
    encontrados.forEach(({ image, nombre, precio, descripcion, categoria, id }) => {

      const nuevoProducto = crearNuevaCard(productServices, image, nombre, precio, descripcion, categoria, id);
      contenedor.insertBefore(nuevoProducto, contenedor.firstChild);

    });
  });
});