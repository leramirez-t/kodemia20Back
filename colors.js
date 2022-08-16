/**
 * Crear una funcion que reciba un nombre del proceso.
 * 
 * Y en esta misma funcion imprimirla con color arcoiris
 * 
 * Utilizar el paquete de colors
 */

 var colors = require('colors')

const printColors =(name)=>{
    console.log(colors.rainbow(name))
}

printColors(process.argv[2])