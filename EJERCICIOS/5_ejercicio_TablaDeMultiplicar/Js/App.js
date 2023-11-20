var numero = parseInt(prompt("Ingresa un numero para generar su tabla de multiplicar:"));

    // Verificar si se ingresó un numero válido
if(!isNaN(numero)) {
    document.write("Tabla de multiplicar del " + numero + " :  <br>");
  
    for (var i = 1; i <= 10; i++) {
        var resultado = numero * i;
        document.write(numero + " x " + i + " = " + resultado + "<br>");
    }

}else{
    alert("Por favor, ingresa un número valido");
}