import { productServices } from "../service/product-service.js";

const url = new URL(window.location);
const idProdSeleccionado = url.searchParams.get('id') || null;
const categoria = url.searchParams.get('categoria') || null;

const seccionProductos = document.querySelector('.productos');
const loader = document.querySelector('.loader');

const info = document.createElement('div');
info.classList.add('productos__items');

const nuevoDivProdutosInfo = crearDivProdutosInfo("Productos similares");
info.append(nuevoDivProdutosInfo);

const nuevoDivProdutosContenido = crearDivProdutosContenido();
info.append(nuevoDivProdutosContenido);

seccionProductos.appendChild(info);

productServices.searchByCategoryProduct(categoria).then(data => {

    data.forEach(({ image, nombre, precio, descripcion, categoria, id }) => {

        const nuevoProducto = crearNuevaCard(productServices, image, nombre, precio, descripcion, categoria, id);

        if (id == idProdSeleccionado) {

            seccionProductos
                .insertBefore(nuevoProducto, seccionProductos.firstChild);

        } else {

            seccionProductos.querySelector('.productos__contenido')
                .appendChild(nuevoProducto);

        }
    });

    loader.style.display = 'none';
});