/**
 * Construir una funcion que separe los nombres largos de los cortos un nombre largo es
 * aquel que supera los 4 caracteres de longitud
 * 
 * Destructurado
 * Input: ["Rodolfo"....]
 * Output: const [nombresCortos, nombresLargos] = funcion(nombres)
 * 
 * console.log(nombresCortos)
 * console.log(nombresLargos)
 */

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


  

  const styleNames = (nombres)=>{
    let nombresCortos=[]
    let nombresLargos=[]

    nombres.forEach(item => {
        if (item.length<4) {
            nombresCortos.push(item)
        } else {
            nombresLargos.push(item)
        }
    })
    
    return [nombresCortos,nombresLargos]
  }

  const [namesShort, namesLong]=styleNames(nombres)

  console.log(namesShort)
  console.log(namesLong)


  /**
   * 
Hacer una funcion que se llame transformarNombres reciba como parametro un array de nombres y regresar un objeto de objetos que contenga el nombre, el length del nombre y si es mayor a 4 o no
Input: ["Ale", "Mariana", "Adrian"]...
Output:
{
	0: {
		name: "Ale", -> string
		length: 3, -> numero
		isGreaterThanFour: true -> booleano
	}
}



const { ale: { apellido: apellidoDeAle }, mariana: { apellido: apellidoDeMariana } } = apellidos;
console.log("apellido", apellidoDeAle)
console.log("apellido", apellidoDeMariana)

   */

let transformarNombres = (names)=>{

    const objetoDeKoders={}

    names.forEach((item,indice)=>{


        objetoDeKoders[indice]={
            name:item,
            length:item.length,
            isGreaterThanFour: item.length>3
        }

    })
   return objetoDeKoders
}

const transformerNames = transformarNombres(nombres)

console.log("transformedNames",transformerNames)
