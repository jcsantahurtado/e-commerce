const crearHeader = () => {

    let header = document.querySelector('.header');

    header.innerHTML = `
        <nav class="header__nav">

            <div class="header__wrapper--home">

                <a href="index.html">
                    <img class="header__logo logo" alt="Logo AluraGeek">
                </a>

                <div class="header__search-container">
                    <form action="search.html">

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