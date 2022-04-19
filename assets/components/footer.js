const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
    <style>
        .contacto {
            padding: 4% 6%;
            background: #EAF2FD;
        }
        
        .listaNavegacion {
            text-align: center;
            padding-bottom: 1.5rem;
        }
        
        .listaNavegacion__enlace{
            padding: .5rem 0;
        }
        
        .listaNavegacion__enlace a {
            color: #464646;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            text-decoration: none;
        }
        
        .form__label {
            color: #464646;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 19px;
        }
        
        .input-container {
            display: flex;
            flex-direction: column;
            position: relative;
        }


        .footer {
            align-items: center;
            display: flex;
            justify-content: space-between;
            padding: 1.5% 6%;
        }

        .footer__link {
            color: #464646;
            font-family: 'Raleway';
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 19px;
            text-decoration: none;
        }

        .footer__social-row {
            display: flex;
            justify-content: space-evenly;
            width: 20%;
        }
        
    
    </style>
    <section class="contacto">
        <div class="listaNavegacion">
        <img class="contacto__div__link__logo logo" alt="Logo de AluraGeek">
            <nav class="listaNavegacion__navegacion">
                <ul>
                    <li class="listaNavegacion__enlace"><a href="#">Quienes somos</a></li>
                    <li class="listaNavegacion__enlace"><a href="#">Política de privacidad</a></li>
                    <li class="listaNavegacion__enlace"><a href="#">Programa de fidelidad</a></li>
                    <li class="listaNavegacion__enlace"><a href="#">Nuestras tiendas</a></li>
                    <li class="listaNavegacion__enlace"><a href="#">Quiero ser franquiciado</a></li>
                    <li class="listaNavegacion__enlace"><a href="#">Anúncie aquí</a></li>
                </ul>
            </nav>
        </div>
        <form action="" class="formulario flex flex--column">
            <fieldset>
                <legend class="form__label">Hable con nosotros</legend>
                <div class="input-container">
                    <input name="name" id="name" class="input" type="text" placeholder="Nombre" required
                        maxlength="40" data-tipo="nombre">
                    
                    <label class="input-label" for="name">Nombre</label>
                    <span class="input-message-error">Este campo no es valido</span>
                </div>
                <div class="input-container">
                    <textarea name="mensaje" id="mensaje" class="input" placeholder="Escribe tu mensaje" required
                        minlength="10" maxlength="120" data-tipo="mensaje" cols="30" rows="3"></textarea>
                    <label class="input-label input-label--message" for="mensaje">Mensaje</label>
                    <span class="input-message-error input-message-error--mensaje">Este campo no es valido</span>
                </div>
            </fieldset>
            <button class="button">Enviar mensaje</button>
        </form>
    </section>
    <footer class="footer">
            <a class="footer__link" href="#">Desarrollado por Juan Carlos</a>
            <ul class="footer__social-row">
                <li><a class="footer__link" href="https://github.com/jcsantahurtado" target="_blank"><i class="fab fa-github"></i></a></li>
                <li><a class="footer__link" href="https://twitter.com/jcsantahurtado" target="_blank"><i class="fab fa-twitter"></i></a></li>
                <li><a class="footer__link" href="https://www.linkedin.com/in/jcsantahurtado" target="_blank"><i class="fab fa-linkedin"></i></a></li>
            </ul>
    </footer>
`;

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {


        const fontAwesome = document.querySelector('link[href*="font-awesome"]');
        const reset = document.querySelector('link[href*="reset"]');
        const bases = document.querySelector('link[href*="bases"]');
        const logo = document.querySelector('link[href*="logo"]');
        const inputs = document.querySelector('link[href*="inputs"]');
        const buttons = document.querySelector('link[href*="buttons"]');

        const responsive = document.querySelector('link[href*="responsive"]');

        const shadowRoot = this.attachShadow({ mode: 'open' });

        if (fontAwesome) {
            shadowRoot.appendChild(fontAwesome.cloneNode());
        }

        if (reset) {
            shadowRoot.appendChild(reset.cloneNode());
        }

        if (bases) {
            shadowRoot.appendChild(bases.cloneNode());
        }

        if (logo) {
            shadowRoot.appendChild(logo.cloneNode());
        }

        if (inputs) {
            shadowRoot.appendChild(inputs.cloneNode());
        }

        if (buttons) {
            shadowRoot.appendChild(buttons.cloneNode());
        }

        if (responsive) {
            shadowRoot.appendChild(responsive.cloneNode());
        }


        shadowRoot.appendChild(footerTemplate.content);
        // console.log(this.shadowRoot.querySelector('.input'));
        // console.log(this);

    }
}

customElements.define('footer-component', Footer);
