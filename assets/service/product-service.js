const listProductos = () =>
    fetch('https://my-ecom-website-ex.herokuapp.com/producto').then(respuesta => respuesta.json());


const createProduct = (image, nombre, precio, descripcion, categoria, fechaUltimaActualizacion) => {
    return fetch(`https://my-ecom-website-ex.herokuapp.com/producto`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image, nombre, precio, descripcion, categoria, fechaUltimaActualizacion, id: uuid.v4() })
    })
}

const removeProduct = (id) => {
    return fetch(`https://my-ecom-website-ex.herokuapp.com/producto/${id}`, {
        method: 'DELETE'
    })
}

const detailProduct = (id) => {
    return fetch(`https://my-ecom-website-ex.herokuapp.com/producto/${id}`).then((respuesta) => respuesta.json());
}

const updateProduct = (image, nombre, precio, descripcion, categoria, fechaUltimaActualizacion, id) => {
    return fetch(`https://my-ecom-website-ex.herokuapp.com/producto/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image, nombre, precio, descripcion, categoria, fechaUltimaActualizacion })
    })
        .then(respuesta => (respuesta))
        .catch(err => console.log(err))
}

const searchByCategoryProduct = (categoria) => {
    return fetch(`https://my-ecom-website-ex.herokuapp.com/producto?categoria=${categoria}`).then((respuesta) => respuesta.json());
}

export const productServices = {
    listProductos,
    createProduct,
    removeProduct,
    detailProduct,
    updateProduct,
    searchByCategoryProduct
}