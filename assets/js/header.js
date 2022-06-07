let actualUrl = document.URL;
let urlIndex = 'index.html';
var urlLogin = 'assets/screens/login.html';
var urlSearch = 'assets/screens/search.html';
var urlVerProducto = 'assets/screens/ver-producto.html';

if (actualUrl.includes('assets')) {
    urlIndex = '../../index.html';
    urlLogin = 'login.html';
    urlSearch = 'search.html';
    urlVerProducto = 'ver-producto.html';
}

const crearHeader = () => {

    let header = document.querySelector('.header');

    header.innerHTML = `
        <nav class="header__nav">

            <div class="header__wrapper--home">

                <a href="${urlIndex}">
                    <img class="header__logo logo" alt="Logo AluraGeek">
                </a>

                <div class="header__search-container">
                    <form action="${urlSearch}">

                        <input type="text" placeholder="¿Qué deseas buscar?" name="search">
                        <button type="submit"><img alt="buscar"></button>

                    </form>
                </div>

            </div>

            <div class="header__wrapper--util">
                <button class="header__login-button button">
                    Login
                </button>

                <button class="header__search-button">
                    <i class="fa fa-search"></i>
                </button>
            </div>

        </nav>
    `;
}

crearHeader();