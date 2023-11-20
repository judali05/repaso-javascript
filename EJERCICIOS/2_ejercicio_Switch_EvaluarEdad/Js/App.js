var edad = prompt("Ingresa tu edad solo numeros:");

edad = parseInt(edad);

    // Verificar si la edad es mayor o menor que 18 con switch
switch (true) {
    case edad > 18:
        document.write("Eres mayor de edad, tienes " + edad );
        break;
    case edad <= 18:
        document.write("Eres menor de edad, tienes " + edad);
        break;
}
  