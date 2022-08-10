console.log("hola mundo")

// console.log(process)

// console.log(process.argv)

// console.log(process.argv[2])

console.log("nombre",process.argv[2])
console.log("nombre2",process.argv[3])
console.log("apellido",process.argv[4])
console.log("apellido2",process.argv[5])

//FUNCION QUE RECIBA DE PARAMETRO UN NOMBRE DEL process.argv Y SI EXISTE QUE SE IMPRIMA "Bienvenido y el nombre"
//SI NO, imprimir "Afuera de aqui"

let names = process.argv[2]+process.argv[3]
let firstLastName = process.argv[4]
let secondLastName = process.argv[5]

console.log("Tu eres",typeof(firstLastName))

const printName =(testName)=>{
    if(testName){
        console.log(`Bienvenido ${testName}`)
    }else{
        console.log("Fuera de aqui")
    }
}

printName(names)