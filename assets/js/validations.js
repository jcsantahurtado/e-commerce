export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    console.log(tipoDeInput);

    if (input.validity.valid && input.checkValidity()) {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
        alert(`Mensaje enviado`)
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
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío"
    },
    mensaje: {
        valueMissing: "El campo mensaje no puede estar vacío",
    }
}


function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach(error => {
        if (input.validity[error]) {
            mensaje = mensajesDeError[tipoDeInput][error];
        }

        else if (!input.checkValidity() && input.type == "textarea" && input.value != "") {
            mensaje = "El mensaje debe contener entre 10 a 120 caracteres";
        }
    });
    return mensaje;
}
