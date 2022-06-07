import { valida } from "./validations.js";

const btnLogin = document.querySelector('.header__login-button');
const inputs = document.querySelectorAll('.input');

window.addEventListener('load', () => {

    const user = sessionStorage.user || null;
    if (user) {
        document.querySelector('.header__login-button').textContent = 'Log out';
    }
});

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();

    const user = sessionStorage.user || null;
    if (user) {
        sessionStorage.clear();
        window.location.href = urlIndex;
    } else {
        window.location.href = urlLogin;
    }
});

inputs.forEach(input => {
    input.addEventListener('blur', (input) => {
        valida(input.target);
    });
});