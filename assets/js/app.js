import { valida } from "./validations.js";

const inputs = document.querySelectorAll('.input');

const footer = document.querySelector('footer-component');
const input = footer.shadowRoot.querySelector('input')
const textarea = footer.shadowRoot.querySelector('textarea')

const inputsContact = [];
inputsContact.push(input);
inputsContact.push(textarea);


inputs.forEach(input => {
    input.addEventListener('blur', (input) => {
        valida(input.target);
    });
});

inputsContact.forEach(input => {
    input.addEventListener('blur', (input) => {
        valida(input.target);
    });
});
