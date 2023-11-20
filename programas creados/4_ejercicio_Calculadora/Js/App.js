var operacion = prompt("Ingresa el tipo de operacion (+) (-) (*) (/)");

    // Realizar la operacion correspondiente utilizando un switch
switch (operacion) {
    case "+":
        var num1 = parseInt(prompt("Ingresa el primer numero"));
        var num2 = parseInt(prompt("Ingresa el segundo numero"));
        suma = num1 + num2;
        document.write("El resultado de la suma es " + suma);
    break;

    case "-":
        var num1 = parseInt(prompt("Ingresa el primer numero"));
        var num2 = parseInt(prompt("Ingresa el segundo numero"));
        resta = num1 - num2;
        document.write("El resultado de la resta es " + resta);
    break;

    case "*":
        var num1 = parseInt(prompt("Ingresa el primer numero"));
        var num2 = parseInt(prompt("Ingresa el segundo numero"));
        multiplicacion = num1 * num2;
        document.write("El resultado de la multiplicación es " + multiplicacion);
    break;

    case "/":
        var num1 = parseInt(prompt("Ingresa el numerador"));
        var num2 = parseInt(prompt("Ingresa el divisor"));
            if (num2 !== 0) {
                division = num1 / num2;
            } else {
                alert("No es posible dividir por cero");
            }
        document.write("El resultado de la división es " + division);
        break;

    default:
        alert("Ingresa una operación valida (+) (-) (*) (/)");
}