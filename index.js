// LEVANTANDO UN SERVIDOR
//HTTP

//¿QUE ES UN ENDPOINT?
//EL EL PUNTO FINAL A DONDE LLEGA NUESTRO REQUEST Y ES A DONDE RESPONDEMOS
/**
 * LOS ENDPOINTS CAMBIAN POR EL METODO (GET,PUT,POST,PATCH,DELETE) Y POR LA RUTA (URL)->(localhost:8080)
 */

/**
 * 
 * HACER 5 ENDPOINTS
 *  
 * GET -> localhost:8080 ->
 * POST -> localhost:8080 ->
 * PUT -> localhost:8080 ->
 * PATCH -> localhost:8080 ->
 * DELETE -> localhost:8080 ->
 * 
 */

const { utimes } = require("fs")
const http = require("http")

// console.log("http",http)

//1.- Se crea un servidor http

const server =http.createServer((request,response)=>{
    
    //LEER request

    // console.log("method", request.method)
    // console.log("url", request.url)

    const {method, url} =request

    console.log("method", method)
    console.log("url", url)

    //1.- Metodo
    //2.- Ruta
    //Estructura de datos

    const endpoints ={
        "GET":{
            "/":"Bienvenido, estas en el GET",
            "/profile":"Bienvenido, estas en el GET en el profile"
        },
        "POST":{
            "/":"Bienvenido, estas en el POST",
            "/profile":"Bienvenido, estas en el POST en el profile"
        },
        "PUT":{
            "/":"Bienvenido, estas en el PUT",
            "/profile":"Bienvenido, estas en el PUT en el profile"
        },
        "PATCH":{
            "/":"Bienvenido, estas en el PATCH",
            "/profile":"Bienvenido, estas en el GET en el profile"
        },
        "DELETE":{
            "/":"Bienvenido, estas en el DELETE",
            "/profile":"Bienvenido, estas en el DELETE en el profile"
        }

    }

console.log(request.method)
console.log(request.url)

response.write(endpoints[method][url])
response.end()

    //GET -> localhost:8080 ->
    //Bienvenido, estas en el GET, estas leyendo

    // if(method==="GET" && url==="/"){
    //     response.write("Hola bienvenido estas en el GET, en home estas leyendo")
    //     response.end()
    // }else if(method==="POST" && url==="/"){
    //     response.write("Hola bienvenido estas en el POST estas en la ruta /")
    //     response.end()
    // }else if(method==="PATCH" && url==="/"){
    //     response.write("Hola bienvenido estas en el PATCH estas en la ruta /")
    //     response.end()
    // }else if(method==="PUT" && url==="/"){
    //     response.write("Hola bienvenido estas en el PUT estas en la ruta /")
    //     response.end()
    // }else if(method==="DELETE" && url==="/"){
    //     response.write("Hola bienvenido estas en el DELETE estas en la ruta /")
    //     response.end()
    // }else{
    //     response.write("Hola ESTA RUTA NO EXISTE")
    //     response.end()
    // }

    //POST -> localhost:8080 ->
    //Bienenido, estas en el POST, estas creando



    //RESPONDIENDO
    // response.write("Hola bienvenido a mi servidor, modifique algo")
    //response.end()//FINALIZANDO LA RESPUESTA ---- SI NO SE PONE SE QUEDARA EN EL CICLO
})

//2.- Poner a ese servidor a escuchar
//INGRESANDO UN PORT AL SERVIDOR
//¿QUE NECESITA UN SERVIDOR PARA ESCUCAR?-----UN PUERTO

//PARAMETRO 1-----PORT
//PARAMETRO 2-----Callback->LO QUE SE VA A ESCUCHAR
// BD -> 5432
server.listen(8080,()=>{
   console.log("server listening") 
})



