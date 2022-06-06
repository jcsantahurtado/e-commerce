export function valida(input) {

    const tipoDeInput = input.dataset.tipo;

    if (input.validity.valid && input.checkValidity()) {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch"
]

const mensajesDeError = {
    // Validación sección Contacto
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío"
    },
    mensaje: {
        valueMissing: "El campo mensaje no puede estar vacío",
    },

    // Validación sección Login
    email: {
        valueMissing: "El campo correo no puede estar vacío",
        typeMismatch: "El correo no es válido"
    },
    password: {
        valueMissing: "El campo contraseña no puede estar vacío",
        patternMismatch: "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales"
    },

    // Validación sección Registro producto
    nombreProducto: {
        valueMissing: "El campo nombre producto no puede estar vacío"
    },
    precio: {
        valueMissing: "El campo precio no puede estar vacío",
        patternMismatch: "Al menos 3 dígitos, el campo precio del producto no debe contener letras"
    },
    descripcion: {
        valueMissing: "El campo descripción no puede estar vacío"
    }
}


function mostrarMensajeDeError(tipoDeInput, input) {
    let mensajeDeError = "";
    tipoDeErrores.forEach(error => {

        if (input.validity[error]) {
            mensajeDeError = mensajesDeError[tipoDeInput][error];
        }

        else if (!input.checkValidity() && input.type == "textarea" && input.value != "") {
            mensajeDeError = `El mensaje debe contener entre ${input.minLength} a 120 caracteres`;
        }
    });
    return mensajeDeError;
}