//TAREA--->HACER EL CRUD CON EXPRESS

//HTTP

// const { request, response } = require("express")
const express = require("express")
const app = express()

//1.-CREAMOS EL SERVIDOR----->NO ES NECESARIO DEBIDO A QUE ESTAMOS USANDO express
//2.-EMPEZAMOS A ESCUCHAR

app.get("/",(request,response)=>{


    response.write("Hola Bienvenido al get del Home,actualizado")
    response.end()
})

app.post("/",(request,response)=>{


    response.write("Hola Bienvenido al post del Home")
    response.end()
})

app.put("/",(request,response)=>{


    response.write("Hola Bienvenido al put del Home")
    response.end()
})

app.patch("/",(request,response)=>{


    response.write("Hola Bienvenido al patch del Home")
    response.end()
})

app.delete("/",(request,response)=>{


    response.write("Hola Bienvenido al delete del Home")
    response.end()
})


//2.-
app.listen("8080",()=>{
   console.log("SERVIDOR ESCUCHANDO") 
})



