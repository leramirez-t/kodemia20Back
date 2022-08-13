/**
 *
 * Promesa -> El resultado de un proceso asincrono
 *
 * Reglas ->
 * Tienen 3 estados
 * 1 - Pending -> 5s, 5 segundos pendiente
 * 2 - Rejected -> si ocurrio un error -> si fuera rechaza
 * 3 - Accepted -> si se resolvio -> si fue aceptada
 *
 * Al momento de hacer la promesa, declaracion de la promesa
 * Las promesas se resuelven o se rechazan
 *    - Resolve -> Function que se ejecutan
 *    - Reject -> Function que se ejecutan
 *
 * Al momento de ejecutarlas
 * Recibir el rechazo o la respuesta resuelta
 * .then -> para recibir lo resuelto
 * .catch -> para recibir lo rechazado -> el error
 */

 const koder = {
    seDieronInformes: false,
    seEntrevisto: false,
    sePago: false,
    seInscribio: false,
};

const darInformes = (koderAInformar) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            koderAInformar.seDieronInformes = true;

            if (!koderAInformar.seDieronInformes) {
                reject("No se pudo dar informes");
            }

            // Si se resuelve
            resolve(koderAInformar);
        }, 3000);
    });
};

const entrevistar = (koderAEntrevistar) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            koderAEntrevistar.seEntrevisto = true;

            if (!koderAEntrevistar.seEntrevisto) {
                reject("No se pudo entrevistar");
            }

            // Si se resuelve
            resolve(koderAEntrevistar);
        }, 3000);
    });
};

const pagar = (koderAPagar) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            koderAPagar.sePago = false;

            if (!koderAPagar.sePago) {
                reject("No se pudo pagar");
            }

            // Si se resuelve
            resolve(koderAPagar);
        }, 3000);
    });
};

const inscribir = (koderAInscribir) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            koderAInscribir.seInscribio = true;

            if (!koderAInscribir.seInscribio) {
                reject("No se pudo inscribir");
            }

            // Si se resuelve
            resolve(koderAInscribir);
        }, 3000);
    });
};

const koderInformado = darInformes({ ...koder });
koderInformado
    .then((koderInformado) => {
        console.log(koderInformado);

        // Entrevistar
        entrevistar({ ...koderInformado })
            .then((koderEntrevistado) => {
                console.log("koderEntrevistado", koderEntrevistado);

                pagar({ ...koderEntrevistado })
                    .then((koderPagado) => {
                        console.log("El koder fue pagado", koderPagado);

                        inscribir({ ...koderPagado })
                            .then((koderInscrito) => {
                                console.log("Exito", koderInscrito);
                            })
                            .catch((error) => {
                                console.log("error", error);
                            });
                    })
                    .catch((error) => {
                        console.log("Error", error);
                    });
            })
            .catch((error) => {
                console.log("error", error);
            });
    })
    .catch((error) => {
        console.log("error", error);
    });

/***
 * Pastel
 * 1 - Leer la receta
 * 2 - Conseguir los ingredientes
 * 3 - Preparacion de la masa
 * 4 - Hornear el pastel
 * 5 - Decorar el pastel
 */

 const pastel = {
    seLeeReceta: false,
    seConsiguieronIngredientes: false,
    sePreparo: false,
    seHorneo: false,
    seDecoro: false
};

const leerReceta =(recetaALeer)=>{
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            recetaALeer.seLeeReceta=true;

            if(!recetaALeer.seLeeReceta){
                reject("No se pudo leer la receta")
            }

            resolve(recetaALeer);
        },2000);
    });
}

const consiguiendoIngredientes = ((ingredientesAConseguir)=>{
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            ingredientesAConseguir.seConsiguieronIngredientes=true;
            if(!ingredientesAConseguir.seConsiguieronIngredientes){
                reject("No se consiguieron los ingredientes")
            }
            resolve(ingredientesAConseguir)
        },2000)
    })
})

const preparandoPastel = ((preparando)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            preparando.sePreparo = true;

            if(!preparando.sePreparo){
                reject("No se pudo preparar el pastel")
            }

            resolve(preparando)
        }, 2000);
    })
})

const hornenadoPastel = ((horneando)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            horneando.seHorneo = true;
            if(!horneando.seHorneo){
                reject("No se pudo hornear")
            }
            resolve(horneando)
        },2000)
    })
})

const decorandoPastel = ((decorando)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            decorando.seDecoro=true;
            if(!decorando.seDecoro){
                reject("No se pudo decorar el pastel")
            }
            resolve(decorando)
        },2000)
    })
})



const recetaLeida = leerReceta({...pastel});

recetaLeida
    .then((recetaLeida)=>{
        console.log(recetaLeida)
   
        
        //Conseguir Ingredientes
        consiguiendoIngredientes({...recetaLeida})
   
   
    })

