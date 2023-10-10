//request , needle
const request = require('request');

//definir la URl de la api
const url = `https://rickandmortyapi.com/api/character`;

//hacer una peticion (request)
//a la api rick & morty
//utilizando request
let r = request(url, 
                {json : true} , 
                (err, res , body ) => { 
                    let arreglo = body.results
                    arreglo.forEach((personaje) => {
                        console.log(personaje)
                        console.log("--------")
                    });
 } )