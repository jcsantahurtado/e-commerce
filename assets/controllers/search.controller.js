import { productServices } from "../service/product-service.js";

const url = new URL(window.location);
const search = url.searchParams.get('search') || null;

const seccionProductos = document.querySelector('.productos');

const buscar = (palabraABuscar, listaProductos) => {
    return listaProductos.filter(producto => {
        const regex = new RegExp(palabraABuscar, 'gi');
        return producto.nombre.match(regex);
    })
}

let listaProductos = [];
productServices.listProductos(search).then(data => {

    listaProductos.push(...data);
    const encontrados = buscar(search, listaProductos);

    const info = document.createElement('div');
    info.classList.add('productos__items');

    const nuevoDivProdutosInfo = crearDivProdutosInfo(`Resultados para <span>'${search}'</span>`);
    info.append(nuevoDivProdutosInfo);

    const nuevoDivProdutosContenido = crearDivProdutosContenido();
    info.append(nuevoDivProdutosContenido);

    seccionProductos.appendChild(info);

    if (encontrados.length != 0) {

        encontrados.forEach(({ image, nombre, precio, descripcion, categoria, id }) => {

            const nuevoProducto = crearNuevaCard(seccionProductos, image, nombre, precio, descripcion, id);
            seccionProductos.children[0].children[1].appendChild(nuevoProducto);

        });

    } else {

        const imgProductNotFound = `
            <img src="../img/search-not-found.jpg" alt="Sin resultados" style="width: 100%; max-width: 400px;">
            `;

        seccionProductos.querySelector('.productos__titulo').innerHTML = `Sin resultados para <span>'${search}'</span>`;
        seccionProductos.children[0].children[1].innerHTML = imgProductNotFound;
    }
});

