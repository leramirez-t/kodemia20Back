const { request, response } = require("express")
const express = require("express")
const app = express()

app.get("/",(request,response)=>{
   response.write("Hola Bienvenido al get de Home") 
   response.end()
})

app.patch("/",(request,response)=>{
    response.write("Hola Bienvenido al patch de Home") 
    response.end()
 })

 app.put("/",(request,response)=>{
    response.write("Hola Bienvenido al put de Home") 
    response.end()
 })

 app.post("/",(request,response)=>{
    response.write("Hola Bienvenido al post de Home") 
    response.end()
 })

 app.delete("/",(request,response)=>{
    response.write("Hola Bienvenido al delete de Home") 
    response.end()
 })

app.listen("8080",()=>{
    console.log("Servidor escuchando")
})

// app.put()

// app.push()

// app.delete()