const headerTemplate = document.createElement('template');

var urlIndexHtml = '';
var urlLoginHtml = '';

if (document.title == "AluraGeek") {
    urlIndexHtml = "./index.html";
    urlLoginHtml = "./assets/screens/login.html";
} else {
    urlIndexHtml = "../../index.html";
    urlLoginHtml = "./login.html";
}

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

        .header__nav__link {
            display: flex;
        }

        .header__nav__link__logo {
            max-width: 176px;
        }

        .header__nav__wrapper {
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
        }

        .header-utilitario-busca {
            color: #464646;
            font-size: 17.5px;
            padding-left: 1rem;
            height: 24px;
            width: 24px;
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
            width: 8.3125rem;
        }

        .header-barraBusca__wrapper__form {
            background-color: #F5F5F5;
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
            color: #A2A2A2;
            font-size: 24px;
            max-height: 40px;
            padding: .4rem 1rem .6rem 0;
        }
    </style>


    <header class="header">
        <nav class="header__nav--home">
            <a href=${urlIndexHtml} class="header__nav__link">
                <img class="header__nav__link__logo logo" alt="Logo de AluraGeek">
            </a>
            <div class="header__nav__wrapper">
                <div class="header-utilitario-busca header-utilitario-busca--home">
                    <i class="fa fa-search"></i>
                </div>
                <a href=${urlLoginHtml} class="header__nav__link--login">Login</a>
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
        const bases = document.querySelector('link[href*="bases"]');
        const logo = document.querySelector('link[href*="logo"]');

        const responsive = document.querySelector('link[href*="responsive"]');

        const shadowRoot = this.attachShadow({ mode: 'closed' });

        if (fontAwesome) {
            shadowRoot.appendChild(fontAwesome.cloneNode());
        }

        if (bases) {
            shadowRoot.appendChild(bases.cloneNode());
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
