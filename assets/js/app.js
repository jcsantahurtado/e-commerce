// funciones para crear nuevos componentes
const crearDivProdutosInfo = (categoria) => {

    const divProductosInfo = document.createElement('div');
    divProductosInfo.classList.add('productos__info');

    divProductosInfo.innerHTML = ` 
        <h4 class="productos__titulo">
            ${categoria}
        </h4>
        <a class="productos__enlace">
            Ver todo 
            <i class="fa-solid fa-arrow-right"></i>
        </a>
        `;

    const btnVerTodo = divProductosInfo.querySelector('.productos__enlace');
    btnVerTodo.addEventListener('click', () => {

        if (!sessionStorage.user) {
            window.location.href = 'assets/screens/login.html';
        } else {
            window.location.href = 'assets/screens/productos.html';
        }
    })

    return divProductosInfo;
}

const crearDivProdutosContenido = () => {

    const divProductosContenido = document.createElement('div');
    divProductosContenido.classList.add('productos__contenido');

    return divProductosContenido;
}

const crearNuevaCard = (productServices, srcImage, nombre, precio, descripcion, categoria, id) => {

    const card = document.createElement('div');
    const contenido =
        `<img class="productos__card___imagen" src="${srcImage}" alt="${nombre}">
        <div class="productos__card___base">
            <h5 class="productos__card___base-titulo">${nombre}</h5>
            <span class="productos__card___base-precio">$ ${parseFloat(precio).toLocaleString()}</span>
            <p class="productos__card___base-descripcion">${descripcion}</p>
            <a class="productos__card___base-enlace" href="${urlVerProducto}?id=${id}&categoria=${categoria}">Ver producto</a>
        </div>
        <div class="productos__card___edit">
            <i class="fa-solid fa-trash" id="${id}"></i>
            <a href="crear-actualizar-producto.html?id=${id}">
                <i class="fa-solid fa-pen"></i>
            </a>
        </div>`;

    card.classList.add('productos__card');
    card.innerHTML = contenido;

    const deleteIcon = card.querySelector('.fa-trash');

    deleteIcon.addEventListener('click', () => {
        const id = deleteIcon.id;
        productServices.removeProduct(id).then(() => {
            location.reload();
        }).catch(err => alert(`Error`));
    });

    return card;
}