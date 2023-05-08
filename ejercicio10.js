let ingresoJugador1 = prompt('Jugador 1: Ingrese Piedra, Papel o Tijera').toUpperCase()
let ingresoJugador2 = prompt('Jugador 2: Ingrese Piedra, Papel o Tijera').toUpperCase()
const piedraPapelTijera = ['PIEDRA', 'PAPEL', 'TIJERA']

if (!piedraPapelTijera.includes(ingresoJugador1)) {
    alert('El jugador 1 ha hecho trampa')
} else if (!piedraPapelTijera.includes(ingresoJugador2)) {
    alert('El jugador 2 ha hecho trampa')
} else if (ingresoJugador1 === ingresoJugador2) {
    alert('Empate!')
} else if (ingresoJugador1 === 'PIEDRA' && ingresoJugador2 === 'TIJERA' || ingresoJugador1 === 'TIJERA' && ingresoJugador2 === 'PAPEL' || ingresoJugador1 === 'PAPEL' && ingresoJugador2 === 'PIEDRA') {
    alert('El jugador 1 ha ganado!')
} else {
    alert('El jugador 2 ha ganado!')
}