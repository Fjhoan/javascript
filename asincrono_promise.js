const axios = require('axios')

const url = `https://rickandmortyapi.com/api/character`;

//ejecutar transaccion async
axios.get( url )
    .then( ( respuesta )  => {
        console.log(respuesta.body.results)
    })
    .catch( ( error ) => {
        console.log(error)
    })