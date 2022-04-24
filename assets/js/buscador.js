// declarando variables
const header = document.querySelector('header-component');
const portada = document.querySelector('.banner');
const iconSearch = header.shadowRoot.querySelector('.icon-search');
const barsSearch = header.shadowRoot.querySelector('.header-barraBusca__wrapper');
const inputSearch = header.shadowRoot.querySelector('.header-barraBusca__wrapper__form input');
const boxSearch = header.shadowRoot.querySelector('.box-search');

// función para mostrar el buscador
function toggleBuscador() {
    iconSearch.classList.toggle('icon-search-activo');
    barsSearch.classList.toggle('header-barraBusca__wrapper-mostrar');
    portada.classList.toggle('banner-ctn-search');
    inputSearch.focus();
    inputSearch.value = '';
}

// función para ocultar el buscador
function ocultarBuscador(e) {
    iconSearch.classList.remove('icon-search-activo');
    barsSearch.classList.remove('header-barraBusca__wrapper-mostrar');
    portada.classList.remove('banner-ctn-search');
    inputSearch.value = '';
}

// Ejecuntado funciones
iconSearch.addEventListener('click', toggleBuscador);
portada.addEventListener('click', ocultarBuscador);
window.addEventListener('scroll', ocultarBuscador);
window.addEventListener('resize', ocultarBuscador);
