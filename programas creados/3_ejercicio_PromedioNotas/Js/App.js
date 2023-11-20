var CantidadNotas = prompt("Ingresa la cantidad de notas del materia");

var cantidad = parseInt(CantidadNotas);

    // Verificar si el valor ingresado es un número válido
if (isNaN(cantidad) || cantidad <= 0) {
    alert("Por favor, ingresa un número válido y mayor que cero para la cantidad de notas.");

} else {
    var sumaNotas = 0;

    for (var i = 1; i <= cantidad; i++) {
        var nota = parseFloat(prompt("Ingresa la nota " + i + ":"));

            // Verificar si la entrada es un número válido y resta uno para que no cambie el resultado
        if (isNaN(nota) || nota < 1 || nota > 10) {
            alert("Ingresa una nota válida entre 0 y 10.");
            i--;

        } else {
          sumaNotas += nota;   

        }
    }

    var promedio = sumaNotas / cantidad;
        // Muestra el resultado con solo dos decimales
    document.write("El promedio de las " + cantidad + " notas ingresadas es: " + promedio.toFixed(2));

}