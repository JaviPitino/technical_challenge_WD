import service from "./config.services";


// Mostramos todos los tlfns de la DB
const getAllPhonesService = () => {
    return service.get('/phones')
}

// Mostramos los detalles de cada tlf en concreto
const getPhonesDetailsService = (id) => {
    return service.get(`/phones/${id}`)
}

export { getAllPhonesService, getPhonesDetailsService }