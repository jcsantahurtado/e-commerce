import { productServices } from "../service/product-service.js";

const contenedor = document.querySelector('.productos');
const loader = document.querySelector('.loader');
const categorias = [];
const datosPorCategorias = [];

productServices.listProductos()
    .then((data) => {
        data.forEach(element => {

            if (!categorias.includes(element.categoria)) {

                const info = document.createElement('div');
                info.classList.add('productos__items');

                if (element.categoria == "Consolas") {

                    info.setAttribute("id", "consolas");

                }

                const nuevoDivProdutosInfo = crearDivProdutosInfo(element.categoria);
                info.append(nuevoDivProdutosInfo);

                const nuevoDivProdutosContenido = crearDivProdutosContenido();
                info.append(nuevoDivProdutosContenido);

                contenedor.appendChild(info);
                // contenedor.insertBefore(info, contenedor.firstChild);                


                categorias.push(element.categoria);

                const datosPorEstaCategoria = data.filter(prod => {

                    return prod.categoria.includes(`${element.categoria}`);

                });

                datosPorCategorias.push(datosPorEstaCategoria);
            }

        });

        for (let i = 0; i < datosPorCategorias.length; i++) {

            datosPorCategorias[i].forEach(({ image, nombre, precio, descripcion, categoria, id }) => {

                const nuevoProducto = crearNuevaCard(productServices, image, nombre, precio, descripcion, categoria, id);
                contenedor.children[i + 1].children[1].append(nuevoProducto);

            });
        }

        loader.style.display = 'none';
    });