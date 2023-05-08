

let numeroUno = 30
let numeroDos = 10
let numeroTres = 5

console.log(`Número 1: ${numeroUno}`)
console.log(`Número 2: ${numeroDos}`)
console.log(`Número 3: ${numeroTres}`)

// Ejercicio 1
if (numeroUno > numeroDos) {
    console.log(`El número ${numeroUno} es mayor que el ${numeroDos}`)
}


// Ejercicio 2
if (numeroUno === numeroDos) {
    console.log('Ambos números son iguales')
} else {
    console.log('Los números son diferentes')
}

// Ejercicio 3
if (numeroUno > numeroDos) {
    console.log(`El número ${numeroUno} es mayor que el ${numeroDos}`)
} else if (numeroUno === numeroDos) {
    console.log('Ambos números son iguales')
} else {
    console.log(`El número ${numeroDos} es mayor que el ${numeroUno}` )
}

if (numeroUno < numeroDos && numeroUno < numeroTres) {
    console.log(`El numero ${numeroUno} es menor que ${numeroDos} y menor que ${numeroTres}` ) 
}

//ejercicio 4
if (numeroUno < numeroDos && numeroUno < numeroTres) {
    console.log(`el numero mas pequeño es ${numeroUno}`)

} else if (numeroDos < numeroUno && numeroDos < numeroTres) {
    console.log(`él numero mas pequeño es ${numeroDos}`)
}

else if (numeroTres < numeroUno && numeroTres < numeroDos) {
    console.log(`el numero mas pequeño es ${numeroTres}`)
}
//ejercicio 5
const persona1 = { 
    nombre: 'Susana',
    edad: 35,
    altura: 1.80

}

const persona2 = {
    nombre: 'Marcelo',
    edad:55,
    altura:1.70
}

if (persona1.edad > persona2.edad) {
console.log(`la persona mas grande de edad es ${persona1.nombre}`) 
} else {
    console.log(`la persona mas grande de edad es ${persona2.nombre}`)
}

if (persona1.altura > persona2.altura) {
    console.log(`la persona mas alta es ${persona1.nombre}`) 
    } else {
        console.log(`la persona mas alta es ${persona2.nombre}`)
    }
    
//ejercicio 6
const nombre = prompt('Ingrese su nombre: ')
const edad = Number(prompt('Ingrese su edad: '))
const altura = Number(prompt('Ingrese su altura: '))
const vision = Number(prompt('Ingrese su visión 1 al 10: '))

if (edad >= 18 && altura > 150 && vision >= 8 ) {
    console.log(`${nombre} se encuentra habilitado para conducir`);
} else {
    console.log(`${nombre} no se encuentra habilitado para conducir`);
}

// ejercicio 7
const miNombre = 'monica'
const nombreInvitado = prompt('Ingrese su nombre:')
const siPoseeEntrada = prompt("¿posee entrada?") // SI si s true NO no n false
const pase = prompt('Ingrese su pase si es vip o normal') 
const mensajeBienvenida = `Bienvenido/a ${nombreInvitado}!`

function poseeEntrada(poseeEntrada) {
    if (poseeEntrada.toLowerCase().startsWith('s') || poseeEntrada === 'true') {
        return true
    } else {
        return false
    }
}

if (nombreInvitado === miNombre || pase.toLowerCase() === 'vip') {
    console.log(mensajeBienvenida)
} else if (poseeEntrada(siPoseeEntrada) === true) {
    const utilizarEntrada = prompt('Desea utilizar su entrada?')
    if (utilizarEntrada === true) {
        console.log(mensajeBienvenida)
    }
} else {
    const comprarEntrada = prompt('Desea comprar una entrada S/N?')
    if (comprarEntrada.toLowerCase() === 's') {
     const dineroDisponible = prompt('Cuánto dinero tiene disponible?')
     if (dineroDisponible >= 1000) {
        console.log('Ha comprado su entrada! ' + mensajeBienvenida)
     } else {
        console.log(`La cantidad disponible ${dineroDisponible} no es suficiente`)
     }
    } else {
        console.log('Gracias por su visita!')
    }
}




