import { productServices } from "../service/product-service.js";

const url = new URL(window.location);
const id = url.searchParams.get('id') || null;

const loader = document.querySelector('.loader');

if (id) {

    const form = document.querySelector('.resgistro__formulario'),

        // contenedores del formulario
        dropArea = form.querySelector(".input-container-drag"),
        imageArea = form.querySelector(".input-container-img"),

        // datos del formulario
        image = form.querySelector('#recent-image'),
        nombre = form.querySelector('#nombre'),
        precio = form.querySelector('#precio'),
        des = form.querySelector('#descripcion'),
        categoria = form.querySelector('#categoria'),

        // boton del formulario
        quitarImagen = dropArea.querySelector('.drag-area i');


    form.querySelector('.form__label').textContent = 'Editar producto';
    form.querySelector('.button-agregar').textContent = 'Guardar';

    const getInformation = () => {

        productServices.detailProduct(id).then((product) => {

            crearImgTag(product.image);
            nombre.value = product.nombre;
            precio.value = product.precio;
            des.value = product.descripcion;
            categoria.value = product.categoria;

        });

        loader.style.display = 'none';
    }

    getInformation();

    form.addEventListener('submit', (evento) => {

        loader.style.display = 'block';

        evento.preventDefault();
        const image = form.querySelector('#recent-image');
        const fechaUltimaActualizacion = new Date();

        productServices.updateProduct(image.src, nombre.value, precio.value, des.value, categoria.value, fechaUltimaActualizacion, id)
            .then(() => {
                window.location.href = "./productos.html";
            });
    });

    dropArea.addEventListener('click', () => {
        reetablecerArea();
    });
}