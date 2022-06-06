import { productServices } from "../service/product-service.js";

const url = new URL(window.location);
const id = url.searchParams.get('id') || null;

const loader = document.querySelector('.loader');

if (id == null) {

    console.log('entra');

    loader.style.display = 'none';

    const form = document.querySelector('.resgistro__formulario');
    form.addEventListener('submit', (e) => {
        
        loader.style.display = 'block';

        e.preventDefault();
        const image = form.querySelector('#recent-image').src;
        const nombre = form.querySelector('#nombre').value;
        const precio = form.querySelector('#precio').value;
        const des = form.querySelector('#descripcion').value;
        const categoria = form.querySelector('#categoria').value;
        const fechaCreacion = new Date();
        const fechaEdicion = fechaCreacion;

        productServices.createProduct(image, nombre, precio, des, categoria, fechaCreacion, fechaEdicion).then(respuesta => {

            window.location.href = './productos.html';

        }).catch(err => console.log(err))
    })
}
