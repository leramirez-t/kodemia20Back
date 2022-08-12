const fs=require("fs")
const { text } = require("stream/consumers")


// fs.appendFile("index.js","\nconsole.log('Que onda')","utf8",(err)=>{
//     if (err) {
//         console.log("err",err)
//         return     
//     } else {
//         console.log("Tu archivo fue actualizado con exito")
//     }
// })

// Eliminar un archivo

// fs.unlink("text1.txt",(err)=>{
//     if (err) {
//         console.log("err",err)
           
//     } else {
//         console.log("Tu archivo fue eliminado")
//     }
// })


//ASINCRONIDAD-> Cuando varias se estan haciendo al mismo tiempo, y la que sale primero se va

//SINCRONIDAD-> Que se esta haciendo una cosa despues de la otra



//Leer directorio con callback

// const directorio = "directorio1"

fs.readdir("directorio1", "utf-8", (err,files)=>{
    
    if(err) throw err
    
    if(files.length===0){
        console.log("No hay algo que se deba eliminar")
    }
    files.forEach(item=>{
        fs.unlink(`directorio1/${item}`,(err)=>{
            if(!err){
                console.log("Tu archivo fue eliminado")
            }else{
                console.log(err)
            }
        })
    })
    
})


/* Ejercicio 2
* Con callbacks
* 1 - Leer los archivos de un directorio y eliminarlos.
* - Tienen que validar que tenga archivos, si no imprimir un console.log de no hay archivos
*/

// fs.readFile("text2.txt","utf8",(err,data)=>{
//     if(err){
//         console.log("error de archivo", err)
//     }else{
//         console.log("data", data)
//     }
// })

