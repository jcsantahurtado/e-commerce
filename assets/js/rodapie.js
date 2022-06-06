const crearFooter = () => {
    let footer = document.querySelector('.rodapie');

    footer.innerHTML = `
        <section class="contacto">
            <div class="listaNavegacion">
            <img class="contacto__div__link__logo logo" src="assets/img/logo.svg" alt="Logo de AluraGeek">
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
                            minlength="10" maxlength="120" data-tipo="mensaje"></textarea>
                        <label class="input-label input-label--message" for="mensaje">Mensaje</label>
                        <span class="input-message-error input-message-error--mensaje">Este campo no es valido</span>
                    </div>
                </fieldset>
                <button class="button">Enviar mensaje</button>
            </form>
        </section>
        <section class="datosDesarrollador">
                <a class="datosDesarrollador__link" href="https://jcsantahurtado.github.io/portfolio/" target="_blank">Desarrollado por Juan Carlos</a>
                <ul class="datosDesarrollador__social-row">
                    <li><a class="datosDesarrollador__link" href="https://github.com/jcsantahurtado" target="_blank"><i class="fab fa-github"></i></a></li>
                    <li><a class="datosDesarrollador__link" href="https://twitter.com/jcsantahurtado" target="_blank"><i class="fab fa-twitter"></i></a></li>
                    <li><a class="datosDesarrollador__link" href="https://www.linkedin.com/in/jcsantahurtado" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                </ul>
        </section>
    `;
}

crearFooter();