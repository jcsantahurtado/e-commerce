import { valida } from "./validations.js";

const inputs = document.querySelectorAll('.input');
console.log(inputs);

inputs.forEach(input => {
    input.addEventListener('blur', (input) => {
        valida(input.target);
    });
});