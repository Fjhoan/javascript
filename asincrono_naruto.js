//request , needle
const request = require('request');

//definir la URl de la api
const url = `https://narutodb.xyz/api/kekkei-genkai`;

//hacer una peticion (request)
//a la api rick & morty
//utilizando request
let r = request(url, 
                {json : true} , 
                (err, res , body ) => { 
                    let arreglo = body.kekkeigenkai
                    arreglo.forEach((poderes) => {
                        console.log(poderes.name)
                        console.log("--------")
                    });
 } )