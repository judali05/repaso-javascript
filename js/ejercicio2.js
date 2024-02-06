//Conexion con matematica.js
// require: conexion con otros archivos
const mat=require('./matematica')

//encapsulamiento
console.log("la suma de 2+2 es= "+mat.sumar(2,2));

console.log("la resta de 4-1 es= "+mat.restar(4,1));

console.log("la division de 6/2 es= "+mat.dividir(6,2));

console.log("el valor de PI es= "+mat.PI);