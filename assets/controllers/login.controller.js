import { clientServices } from "../service/client-service.js";

const btnLogin = document.querySelector('.button-entrar');

btnLogin.addEventListener('click', () => {

    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

    clientServices
        .detailUser(email.value)
        .then((respuesta) => {

            if (!respuesta.length) {

                email.parentElement.classList.add("input-container--invalid");
                email.parentElement.querySelector(".input-message-error").innerHTML = 'El correo a iniciar sesión no existe';

            } else if (respuesta[0].password != password.value) {

                password.parentElement.classList.add("input-container--invalid");
                password.parentElement.querySelector(".input-message-error").innerHTML = 'Contraseña incorrecta';

            } else {

                sessionStorage.user = JSON.stringify(respuesta);
                window.location.href = '../screens/productos.html';

            }

        });
});