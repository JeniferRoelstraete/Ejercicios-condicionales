const nombre = prompt('Ingrese Nombre')
const apellido = prompt('Ingrese Apellido')
const sexo = prompt('Ingrese Sexo (F/M)')
const nacionalidad = prompt('Ingrese Nacionalidad')
const fechaNacimiento =  prompt('Ingrese Fecha de Nacimiento (dd/mm/aaaa)')
const fechaEmision =  prompt('Ingrese Fecha de Emisión (dd/mm/aaaa)')
const fechaVencimiento =  prompt('Ingrese Fecha de Vencimiento (dd/mm/aaaa)')
const tramiteNumero =  Number(prompt('Ingrese Número de Trámite'))
const numeroDni = Number(prompt('Ingrese Número de DNI'))

const dni = {
    nombre: nombre,
    apellido: apellido,
    sexo: sexo,
    nacionalidad: nacionalidad,
    fechaNacimiento: fechaNacimiento,
    fechaEmision: fechaEmision,
    fechaVencimiento: fechaVencimiento,
    tramiteNumero: tramiteNumero,
    numeroDni: numeroDni
}

const datosCorrectos = prompt(`Son correctos los datos ingresados (S/N):
Nombre: ${nombre}
Apellido: ${apellido}
Sexo: ${sexo}
Nacionalidad: ${nacionalidad}
Fecha Nacimiento: ${fechaNacimiento}
Fecha Emisión: ${fechaEmision}
Fecha Vencimiento: ${fechaVencimiento}
Número de Trámite: ${tramiteNumero}
Número de DNI: ${numeroDni}`)

if (datosCorrectos.toLowerCase() === 's') {
    console.table(dni)
} else {
    alert('vuelva a intentarlo en 1 mes')
}

