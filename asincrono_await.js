const axios = require('axios')

const url = `https://rickandmortyapi.com/api/character`;


const personajes = async() => {
    const response = await axios.get(url)
    let arreglo = response.data.results
    arreglo.forEach((personaje) => {
        console.log(personaje)
        console.log("--------")
    })
}

personajes()