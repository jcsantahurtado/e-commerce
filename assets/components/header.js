const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
    <style>
        .header__nav--home {
            align-items: center;
            display: flex;
            justify-content: space-between;
            margin: 0 auto;
            padding: 1rem 0;
            width: 88%;
        }

        .header__nav__link,
        .header__nav__wrapper {
            width: 50%;
        }

        .header__nav__link {
            display: flex;
            justify-content: space-evenly;
        }

        .header__nav__link__logo {
            width: -moz-available;
            max-width: 176px;
        }

        .header__nav__wrapper {
            display: flex;
            justify-content: space-evenly;
            flex-direction: row-reverse;
            align-items: center;
        }

        .header-utilitario-busca {
            font-size: 17.5px;
            color: #464646;
        }

        .header-utilitario-busca:hover {
            cursor: pointer;
        }

        .header__nav__link--login {
            color: #2A7AE4;
            border: 1px solid #2A7AE4;
            box-sizing: border-box;
            padding: .75rem 1rem;
            text-align: center;
            text-decoration: none;
        }

        .header-barraBusca__wrapper {
            *display: none;
        }

        .header-barraBusca__wrapper__form {
            background-color: #FFFFFF;
            border-radius: 20px;
            display: flex;
        }

        .header-barraBusca__wrapper__form input,
        .header-barraBusca__wrapper__form button {
            background: none;
            border: none;
        }

        .header-barraBusca__wrapper__form input {
            color: #A2A2A2;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            padding: .5rem 1rem;
        }

        .header-barraBusca__wrapper__form input:focus {
            outline: none;
        }

        .header-barraBusca__wrapper__form button {
            font-size: 24px;
            color: #A2A2A2;
            padding: .5rem 1rem .5rem 0;
        }
    </style>


    <header class="header">
        <nav class="header__nav--home">
            <a href="../../index.html" class="header__nav__link">
                <img class="header__nav__link__logo" alt="Logo de AluraGeek">
            </a>
            <div class="header__nav__wrapper">
                <div class="header-utilitario-busca header-utilitario-busca--home">
                    <i class="fa fa-search"></i>
                </div>
                <a href="../../assets/screens/login.html" class="header__nav__link header__nav__link--login">Login</a>
            </div>
            <div class="header-barraBusca__wrapper">
                <form action="" class="header-barraBusca__wrapper__form">
                    <label for="buscar"></label>
                    <input type="search" id="buscar" name="query" class="" placeholder="¿Qué deseas buscar?">
                    <button class="" type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>
        </nav>
    </header>
`;

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const fontAwesome = document.querySelector('link[href*="font-awesome"]');
        const logo = document.querySelector('link[href*="logo"]');

        const responsive = document.querySelector('link[href*="responsive"]');

        const shadowRoot = this.attachShadow({ mode: 'closed' });

        if (fontAwesome) {
            shadowRoot.appendChild(fontAwesome.cloneNode());
        }

        if (logo) {
            shadowRoot.appendChild(logo.cloneNode());
        }

        if (responsive) {
            shadowRoot.appendChild(responsive.cloneNode());
        }

        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);
