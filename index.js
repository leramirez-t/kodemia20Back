console.log("hola mundo")
// console.log("nombre", process.argv[2])
// console.log("apellido", process.argv[3])
// console.log("apellido 2", process.argv[4])

//Funcion que reciba de parametro un nombre
//del proces.argv , y si existe que me imprima "Bienvenido y el nombre"
//Si no, imprimir "afuera de aqui"


const printName = (name)=>{
    if(name){
        console.log(`Bienvenido ${name}`)
    }else{
        console.log("Fuera de aqui")
    }
}

printName(process.argv[2])



console.log("test")
console.log('Que onda')



//EJERCICIOS

/**
 * 1.- Construir una funcion que separe los nombres largos de los cortos un nombre largo es aquel
 * que supera los 4 carecteres de longitud
 * 
 * Input:["Rodolfo"......]
 * Output:const[nombresCortos, nombresLargos] = funcion(nombres)
 * 
 * console.log(nombresCortos) ["Pete","Gio"....]
 * console.log(nombresLargos) ["Mariana", "Sofia"....]
 */

/**
 * DESESTRUCTURACION
 *          ES SACAR COSAS CON EL TIPO DE DATO QUE SON
 */

const apellidos={
    ale:{
        apellido:"Hernandez"
    },
    mariana:{
        apellido:"Rechy"
    }
}

//SI DESESTRUCTURO EL OBJETO SERIA DE LA SIGUIENTE MANERA......CUANDO ES CON OBJETOS, TIENE QUE SER EL NOMBRE DE LA LLAVE

const {ale,mariana}=apellidos

console.log("ale",ale)
console.log("mariana",mariana)

//SI DESESTRUCTURO UN ARREGLO, SE DEBE RESPETAR LA POSICION

const animales = [
    "perro",
    "gato"
]

const [perro,gato]=animales

console.log(perro)
console.log(gato)

 const nombres = [
    "Rodolfo",
    "Araceli",
    "Brisa",
    "Eduardo",
    "Gio",
    "Jose",
    "Luis",
    "Marco",
    "Mariana",
    "Pete",
    "Sebastian",
    "Sofia"
  ]

 
const sizeNames =(namesInt)=>{
    const nombresCortos=[]
    const nombresLargos=[]

    namesInt.forEach(names => {
        if(names.length>=4){
            nombresLargos.push(names)
        }else{
            nombresCortos.push(names)
        }

    });

  

    return [nombresCortos,nombresLargos]
}

const [nombresCortos,nombresLargos]=sizeNames(nombres)

// console.log(sizeNames(nombres))

console.log("nombres cortos",nombresCortos)
console.log("nombres largos", nombresLargos)


//EJERCICIO2
/**
 * Hacer una funcion que se llama transoformarNombres, reciba como parametro un array de nombres y
 * regresar un objeto
 * 
 * Input:["Ale", "Mariana", "Adrian"].....
 * Output:
 * {
 *  0:{
 *      name:"Ale",->string
 *      length:3,->numero
 *      isGreaterThanFour: true->booleano
 * 
 *  }
 * }
 * 
 * Metodo reduce->cambiar datos
 */

//EJERCICIO CON FOREACH

// const cambioNombres=(names)=>{
    // const nombresRetornados={}
    // console.log("antes nombresRetornados",nombresRetornados)

    // names.forEach((item,index)=>{
    //     nombresRetornados[index]={
    //         name:item,
    //         length:item.length,
    //         isGreaterFour: item.length>3
    //     }
    // })
    // console.log("despues nombresRetornados",nombresRetornados)

    // return nombresRetornados
// }


//EJERCICIO CON reduce



const cambioNombres =(names)=>{


    const nombresArray=names.reduce((accum,cv,index)=>{
        // console.log("indice",index)
        // console.log("acumulador",accum)
        return{
            ...accum,
            [index]:{
                name:cv,
                length:cv.length,
                isGreaterThanFour:cv.length>3
            }
        }
    },{})
    return nombresArray
}

console.log(cambioNombres(nombres))