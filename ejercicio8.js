
//ejercicio 8

const numeroIncognita = 9
const numeroMayor = 'el numero ingresado es mayor, vuelve a intentarlo'
const numeroMenor = 'el numero ingresado es menor, vuelve a intentarlo'
const acierto = 'Ganaste, has adivinado el número.'

function validarNumeroIngresado(numeroIngresado) {
    let resultado

    if (numeroIngresado > numeroIncognita) {
        alert(numeroMayor)
        resultado = 1
    } else if (numeroIngresado < numeroIncognita) {
        alert(numeroMenor)
        resultado = -1
    } else {
        alert(acierto)
        resultado = 0
    }

    return resultado
}

let numeroIngresado = Number(prompt('Ingrese un número entre 1 y 10 para adivinar el número de sorteo'))
const primerValidacion = validarNumeroIngresado(numeroIngresado);
if ( primerValidacion > 0) {
    numeroIngresado = Number(prompt('Ingrese un número entre 1 y 10 para adivinar el número de sorteo'))
    const segundaValidacion = validarNumeroIngresado(numeroIngresado)
    if( segundaValidacion > 0) {
        numeroIngresado = Number(prompt('Ingrese un número entre 1 y 10 para adivinar el número de sorteo'))
        validarNumeroIngresado(numeroIngresado)
    } else if (segundaValidacion < 0 ) {
        numeroIngresado = Number(prompt('Ingrese un número entre 1 y 10 para adivinar el número de sorteo'))
        validarNumeroIngresado(numeroIngresado)
    }
} else if (primerValidacion < 0 ) {
    numeroIngresado = Number(prompt('Ingrese un número entre 1 y 10 para adivinar el número de sorteo'))
    const segundaValidacion = validarNumeroIngresado(numeroIngresado)
    if( segundaValidacion > 0) {
        numeroIngresado = Number(prompt('Ingrese un número entre 1 y 10 para adivinar el número de sorteo'))
        validarNumeroIngresado(numeroIngresado)
    } else if (segundaValidacion < 0 ) {
        numeroIngresado = Number(prompt('Ingrese un número entre 1 y 10 para adivinar el número de sorteo'))
        validarNumeroIngresado(numeroIngresado)
    }
}

