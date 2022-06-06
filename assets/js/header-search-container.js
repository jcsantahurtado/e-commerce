// creando un elemento nuevo para la página,
// se usará para la función de buscar (es un overlay)
(() => {
    const overlay = document.createElement('div');
    overlay.setAttribute('class', 'widget');
    overlay.setAttribute('id', 'overlay');
    document.body.appendChild(overlay);
})();

// declarando variables
const header = document.querySelector('header-component');
const widget = document.querySelector('.widget');
const iconSearch = document.querySelector('.header__search-button i');
const barsSearch = document.querySelector('.header__search-container');
const inputSearch = document.querySelector('.header__search-container input');

// función para mostrar/ocultar el buscador
function toggleBuscador(e) {

    const estaActivo = barsSearch.classList.contains('mostrar');
    const method = (!estaActivo) ? 'add' : 'remove';

    barsSearch.classList[method]('mostrar');
    widget.classList[method]('visible');

    inputSearch.value = '';

    if (method == 'add') {

        inputSearch.focus();
        iconSearch.classList.remove('fa-search');
        iconSearch.classList.add('fa-xmark');

    } else {

        inputSearch.blur();
        iconSearch.classList.add('fa-search');
        iconSearch.classList.remove('fa-xmark');
    }
}

// Ejecuntado funciones
iconSearch.addEventListener('click', toggleBuscador);
widget.addEventListener('click', toggleBuscador);