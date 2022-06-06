const detailUser = (email) => {
    return fetch(`https://my-ecom-website-ex.herokuapp.com/perfil?email=${email}`).then((respuesta) => respuesta.json());
}

export const clientServices = {
    detailUser
}