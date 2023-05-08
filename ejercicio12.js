const operacion = prompt('Ingrese operación (suma, resta, multiplicación, división)')
const numero1 = Number(prompt('Ingrese número 1'))
const numero2 = Number(prompt('Ingrese número 2'))

switch(operacion.toLowerCase()) {
    case 'suma':
        alert(`El resultado de sumar ${numero1} y ${numero2} es: ${numero1 + numero2}`)
        break
    case 'resta':
        alert(`El resultado de restar ${numero1} y ${numero2} es: ${numero1 - numero2}`)
        break
    case 'multiplicacion':
        alert(`El resultado de multiplicar ${numero1} y ${numero2} es: ${numero1 * numero2}`)
        break
    case 'division':
        if (numero2 === 0) {
            alert('ERROR: No se puede dividir por 0')
        } else {
            alert(`El resultado de dividir ${numero1} y ${numero2} es: ${numero1 / numero2}`)
        }
    break
    default:
        alert('ERROR: Operación desconocida')
}