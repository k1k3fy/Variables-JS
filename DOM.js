// Solicitar al usuario 3 números por prompt
var numero1 = parseFloat(prompt("Ingrese el primer número:"));
var numero2 = parseFloat(prompt("Ingrese el segundo número:"));
var numero3 = parseFloat(prompt("Ingrese el tercer número:"));

// Analizar los números para identificar el mayor, el del centro y el menor
var numeros = [numero1, numero2, numero3];
numeros.sort(function(a, b){return a - b;});
var menor = numeros[0];
var centro = numeros[1];
var mayor = numeros[2];

// Imprimir por consola o por el DOM los números ordenados de mayor a menor y de menor a mayor
console.log("Números ordenados de mayor a menor:", mayor, centro, menor);
console.log("Números ordenados de menor a mayor:", menor, centro, mayor);

// Identificar si los números son iguales e imprimir un mensaje correspondiente
if (menor === centro && centro === mayor) {
    console.log("Los números son iguales.");
} else {
    console.log("Los números no son iguales.");
}

// También puedes imprimir en el DOM utilizando document.write o creando elementos y añadiéndolos al DOM según tus necesidades.
