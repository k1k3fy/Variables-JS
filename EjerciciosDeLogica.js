// 1.-Perfil del usuario.
// Escriba un programa que solicite al usuario sus datos: nombre de usuario, edad y una lista de sus películas favoritas. Almacene la información y luego muéstrela en la consola. Tenga en cuenta que el resultado de las películas debe agregar un pequeño mensaje como: 'La película {película} es una de mis favoritas'.

const solicitudPerfil = require('solicitudsperfil');

const nombreUsuario = solicitudPerfil.question('Ingrese su nombre de usuario: ');
const edadUsuario = solicitudPerfil.question('Ingrese su edad: ');
const peliculasFavoritas = solicitudPerfil.question('Ingrese sus películas favoritas (separadas por coma): ').split(',');

console.log(`\nPerfil del Usuario:\nNombre de Usuario: ${nombreUsuario}\nEdad: ${edadUsuario}\nPelículas Favoritas:`);
peliculasFavoritas.forEach(pelicula => console.log(`La película ${pelicula.trim()} es una de mis favoritas`));

// ------------------------------------------------------------------------------------------------ //
// 2.-Numero mas alto.
// Escribe un programa que solicite 10 números. Utilizando operadores lógicos y cualquier otra función/estructura de JavaScript que haya visto antes, determine y genere el mayor de esos números.

const readlineSync = require('readline-sync');

// Solicitar 10 números al usuario
const numeros = [];
for (let i = 0; i < 10; i++) {
    numeros.push(readlineSync.question(`Ingrese el número ${i + 1}: `));
}

// Encontrar el número más alto
const numeroMayor = Math.max(...numeros);
console.log(`El número más alto es: ${numeroMayor}`);

// ------------------------------------------------------------------------------------------------ //
// 3.-Alarma.
// Escribe un programa que pregunte a un usuario la cantidad de segundos necesarios hasta que se ejecute una alarma (mensaje) junto con un texto para mostrar una vez que hayan pasado esos segundos en tiempo real.
// Ejemplo de resultado: "Hora de acostarse después de 10 segundos".

const readlineSync = require('readline-sync');

const tiempoSegundos = readlineSync.question('Ingrese la cantidad de segundos hasta la alarma: ');

setTimeout(() => {
    console.log('¡Hora de acostarse después de', tiempoSegundos, 'segundos!');
}, tiempoSegundos * 1000);

// ------------------------------------------------------------------------------------------------ //
// 4.-Palíndromo.
// Escriba un programa que solicite una palabra u oración (puede estar en mayúscula, tener espacios y puntuación). Averigua si la oración/palabra es un palíndromo o no. Ignorando la puntuación, los espacios y las letras mayúsculas.

const readlineSync = require('readline-sync');

const texto = readlineSync.question('Ingrese una palabra u oración: ');

const textoLimpio = texto.toLowerCase().replace(/[^a-zA-Z]/g, '');
const esPalindromo = textoLimpio === textoLimpio.split('').reverse().join('');

console.log(esPalindromo ? 'Es un palíndromo' : 'No es un palíndromo');

// ------------------------------------------------------------------------------------------------ //
// 5.-Factorial.
// Escribe un programa que solicite un número entero n. Donde  1 <= nrecursión.

const readlineSync = require('readline-sync');

const numero = readlineSync.question('Ingrese un número entero (mayor o igual a 1): ');

function calcularFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * calcularFactorial(n - 1);
    }
}

console.log(`El factorial de ${numero} es: ${calcularFactorial(Number(numero))}`);



// ------------------------------------------------------------------------------------------------ //
// 6.-Matriz plana
// Escriba un programa que tome la siguiente matriz anidada y la aplane (convirtiéndola en una matriz 1D). Utilice cualquier tipo de algoritmo que desee, como devoluciones de llamada, recursividad, etc.
// let multiDimensión = [1, [2, 3, [4, 5, [6]]]];

let multiDimension = [1, [2, 3, [4, 5, [6]]]];

function aplanarMatriz(arr) {
    return arr.reduce((acumulador, elemento) => {
        return acumulador.concat(Array.isArray(elemento) ? aplanarMatriz(elemento) : elemento);
    }, []);
}

const matrizPlana = aplanarMatriz(multiDimension);
console.log('Matriz Plana:', matrizPlana);

