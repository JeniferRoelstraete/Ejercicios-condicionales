let colores = prompt("ingrese su color: ");

switch (colores) {
  case "blanco":
  case "negro":
    alert("Falta de color");
    break;
  case "verde":
    alert("El color de la naturaleza");
    break;
  case "azul":
    alert("El color del agua");
    break;
  case "amarillo":
    alert("El color del sol.");
    break;
  case "rojo":
    alert("El color del fuego");
    break;
  case "marron":
    alert("El color de la tierra");
    break;
  default:
    alert("Excelente elección, no lo teníamos pensado");
    break;
}
