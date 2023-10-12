const axios = require('axios')

const url = `https://rickandmortyapi.com/api/character`;

//ejecutar transaccion async
axios.get( url )
    .then( ( respuesta )  => {
        console.log(respuesta.data.results)
    })
    .catch( ( error ) => {
        console.log(error)
    })