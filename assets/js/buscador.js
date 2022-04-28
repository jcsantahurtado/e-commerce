// declarando variables
const header = document.querySelector('header-component');
const portada = document.querySelector('.banner__contenido');
const iconSearch = header.shadowRoot.querySelector('.icon-search');
const barsSearch = header.shadowRoot.querySelector('.header-barraBusca__wrapper');
const inputSearch = header.shadowRoot.querySelector('.header-barraBusca__wrapper__form input');
const boxSearch = header.shadowRoot.querySelector('.box-search');

// función para mostrar/ocultar el buscador
function toggleBuscador(e) {
    const estaActivo = iconSearch.classList.contains("icon-search-activo");
    const method = (!estaActivo && (this == iconSearch)) ? 'add' : 'remove';
    iconSearch.classList[method]('icon-search-activo');
    barsSearch.classList[method]('header-barraBusca__wrapper-mostrar');
    portada.classList[method]('banner-ctn-search');
    inputSearch.value = '';
    if (method == 'add') {
        inputSearch.focus();
    } else {
        inputSearch.blur();
    }
}

// Ejecuntado funciones
iconSearch.addEventListener('click', toggleBuscador);
portada.addEventListener('click', toggleBuscador);
window.addEventListener('scroll', toggleBuscador);