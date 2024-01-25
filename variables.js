

// comentarios de una sola linea.

/**
 * Estos son los comentario en linea 
 * puedes hacer hasta un listado con esto 
 * ya estufas */
 

/**    // Variable en cadena de texto.
var miNombre = "Enrique";

//valor de variable numerica.
var edadEnrique = 25;

// typeof: señala que forma se esta utlizando en console como numero, string etc.

// Variable en cadena de texto (string).
console.log("Mi nombre es: " + miNombre);
// Variable numerico.
console.log("Tengo: " + edadEnrique);

// Estas tambien son variables numericas.

let enriqueYearBirth = 1998;
console.log("Naci en el año " + enriqueYearBirth)
let suma = edadEnrique + enriqueYearBirth;
console.log("Es la suma entre 1998 y 25: " + suma)

// Variable de tipo string. (2a demostracion.) mas comillas (dobles("") o simples('')).

let postreFavorito = "Helado";

var movieFav = 'Star Wars';

// Variables de tipo booleano.

let miNombreEsEnrique = true;

var amIAlive = true;

// Variables de tipo nulo (null).

let datoVacio = null;

// Variables tipo Arrays.

let coleccionDeCoches = ["Porsche", "Mercedes-Benz", "Ferrari", "Nissan"];

let frutas = ["Manzana", "Platano", "Mango"];

let productos = ["Higiene", "Salud", "Alimentos"];

// Variable de tipo Objetos.

let libro = {
    nombre: "El mundo de Sofia",
    editorial: "ABC",
    año: "1990",
    genero: "cuento"
};

// Variable de una constante.

/** const NOMBRE_USUARIO = "Fernando";
NOMBRE_USUARIO = "Alberto"; // Este es un ejemplo de malas practicas en las constantes. */

/** 
const NOMBRE_USUARIO = "Fernando"; // Buena practica.

// Hoisting.

x = 1;
alert("x = " + x);
let x;

// Scope.

// var
var nombre = "Marcus";
console.log(nombre)

if (true){
    var nombre = "Dominic";
    console.log(nombre);
}
 // let
console.log(nombre);

var edad = 45;
console.log(edad);

if (true){
    let edad = 40;
    console.log(edad)
}

console.log(edad); */


// Conversion de tipos de datos.

/** 
let nombre = "Enrique";
let edad = 25;
let condicion = true;

let edadString = String(edad);
let nombreNumerico = Number(nombre);
*/


// --------------- Ejercicio para esta sesion del Dia 8 de Enero del 2024 ---------- 


/**   1.- Declarar 10 variables de cada tipo de dato sin tomar en cuenta objetos, arrays y null
        Pueden variar entre las palabras reservadas var, let y const
       -number
       -string
       -boolean
*/

// *numeros:                          
    
    var numberUno = 1;
    let numberDos = 2;
    const numberTres = 3;
    var numberCuatro = 4;
    let numberCinco = 5;
    const numberSeis = 6;
    var numberSiete = 7;
    let numberOcho = 8;
    const numberNueve = 9;
    var numberDiez = 10;

    console.log("NumberUno: " + numberUno);
    console.log("NumberDos: " + numberDos);
    console.log("NumberTres: " + numberTres);
    console.log("NumberCuatro: " + numberCuatro);
    console.log("NumberCinco: " + numberCinco);
    console.log("NumberSeis: " + numberSeis);
    console.log("NumberSiete: " + numberSiete);
    console.log("NumberOcho: " + numberOcho);
    console.log("NumberNueve: " + numberNueve);
    console.log("NumberDiez: " + numberDiez);

// *String:
 
   var numberText1 = "Uno";
   let numberText2 = "Dos";
   const numberText3 = "Tres";
   var numberText4 = "Cuatro";
   let numberText5 = "Cinco";
   const numberText6 = "Seis";
   var numberText7 = "Siete";
   let numberText8 = " Ocho";
   const numberText9 = "Nueve";
   var numberText10 = "Diez";

   console.log("NumberText1: " + numberText1);
   console.log("NumberText2: " + numberText2);
   console.log("NumberText3: " + numberText3);
   console.log("NumberText4: " + numberText4);
   console.log("NumberText5: " + numberText5);
   console.log("NumberText6: " + numberText6);
   console.log("NumberText7: " + numberText7);
   console.log("NumberText8: " + numberText8);
   console.log("NumberText9: " + numberText9);
   console.log("NumberText10: " + numberText10);

// *Booleanos:   

   var numberB1Uno = true;
   console.log("NumberB1Uno: " + numberB1Uno);
   let numberB2Dos = false;
   console.log("NumberB2Dos: " + numberB2Dos);
   const numberB3Tres = true;
   console.log("NumberB3Tres " + numberB3Tres);
   var numberB4Cuatro = false;
   console.log("NumberB4Cuatro: " + numberB4Cuatro);
   let numberB5Cinco = true;
   console.log("NumberB5Cinco: " + numberB5Cinco);
   const numberB6Seis = false;
   console.log("NumberB6Seis: " + numberB6Seis);
   var numberB7Siete = true;
   console.log("NumberB7Siete: " + numberB7Siete);
   let numberB8Ocho = false;
   console.log("NumberB8Ocho: " + numberB8Ocho);
   const numberB9Nueve = true;
   console.log("NumberB9Nueve: " + numberB9Nueve);
   var numberB10Diez = false;
   console.log("NumberB10Diez: " + numberB10Diez);

    
/** Declarar variables numericas y realizar las operaciones aritmeticas basicas (+suma, -resta, *multiplicacion,
    /division */

    let numberX = 2;
    let numberY = 2;

    let numberX1 = 10;
    let numberY1 = 5;

    let numberX2 = 2;
    let numberY2 = 7;

    let numberX3 = 4;
    let numberY3 = 8;

    let numberX4 = 3;
    let numberY4 = 9;

    // *Suma 1, 2, 3, 4
       let suma = numberX + numberY;
       console.log("El resultado es: " + suma);
       
       let suma1 = numberX1 + numberY1;
       console.log("El resultado es: " + suma1);

       let suma2 = numberX2 + numberY2;
       console.log("El resultado es: " + suma2);

       let suma3 = numberX3 + numberY3;
       console.log("El resultado es: " + suma3);

       let suma4 = numberX4 + numberY4;
       console.log("El resultado es: " + suma4);

    // *Resta 1, 2, 3, 4
       let resta = numberX - numberY;
       console.log("El resultado es: " + resta);   
       
       let resta1 = numberX1 - numberY1;
       console.log("El resultado es: " + resta1);  

       let resta2 = numberX2 - numberY2;
       console.log("El resultado es: " + resta2);  

       let resta3 = numberX3 - numberY3;
       console.log("El resultado es: " + resta3);  

       let resta4 = numberX4 - numberY4;
       console.log("El resultado es: " + resta4);  

    // *Multiplicacion 1, 2, 3, 4
        let multiplicacion = numberX * numberY;
        console.log("El resultado es: " + multiplicacion);
        
        let multiplicacion1 = numberX1 * numberY1;
        console.log("El resultado es: " + multiplicacion1);   

        let multiplicacion2 = numberX2 * numberY2;
        console.log("El resultado es: " + multiplicacion2);   

        let multiplicacion3 = numberX3 * numberY3;
        console.log("El resultado es: " + multiplicacion3);   

        let multiplicacion4 = numberX4 * numberY4;
        console.log("El resultado es: " + multiplicacion4);   

    // *Division 1, 2, 3, 4
        let division = numberX % numberY;
        console.log("El resultado es: " + division);

        let division1 = numberX1 % numberY1;
        console.log("El resultado es: " + division1);

        let division2 = numberX2 % numberY2;
        console.log("El resultado es: " + division2);

        let division3 = numberX3 % numberY3;
        console.log("El resultado es: " + division3);

        let division4 = numberX4 % numberY4;
        console.log("El resultado es: " + division4);

        
/** -Declarar variables que concatenen cadenas de texto-5 mensajes diferentes en pantalla, sin limite de palabras. */
    
        let comida = "Tomo ";
        let bebida = "Refresco ";
        let mensaje = comida + bebida;
        console.log(mensaje);

        let comida1 = "Tomo ";
        let bebida1 = "Agua ";
        let mensaje1 = comida1 + bebida1;
        console.log(mensaje1);

        let comida2 = "Como ";
        let bebida2 = "Dulces ";
        let mensaje2 = comida2 + bebida2;
        console.log(mensaje2);

        let comida3 = "Como ";
        let bebida3 = "Verduras ";
        let mensaje3 = comida3 + bebida3;
        console.log(mensaje3);

        let comida4 = "Como ";
        let bebida4 = "Frituras ";
        let mensaje4 = comida4 + bebida4;
        console.log(mensaje4);


 /**  Declarar 5 variables y convertirlas a otro tipo de dato */   
    
    var nombre = "Elena";
    var edad = 25;
    var alive = true;
    var apellido = "Lopez";
    var estatura = 1.60;

    console.log("Nombre: " + nombre);
    console.log("Edad: " + edad);
    console.log("Alive: " + alive);
    console.log("Apellido: " + apellido);
    console.log("Estatura: " + estatura);


    var nombre1 = "David";
    var edad1 = 28;
    var alive1 = true;
    var apellido1 = "Layun";
    var estatura1 = 1.80;

    console.log("Nombre1: " + nombre1);
    console.log("Edad1: " + edad1);
    console.log("Alive1: " + alive1);
    console.log("Apellido1: " + apellido1);
    console.log("Estatura1: " + estatura1);


    var nombre2 = "Veronica";
    var edad2 = 22;
    var alive2 = true;
    var apellido2 = "Perez";
    var estatura2 = 1.55;

    console.log("Nombre2: " + nombre2);
    console.log("Edad2: " + edad2);
    console.log("Alive2: " + alive2);
    console.log("Apellido2: " + apellido2);
    console.log("Estatura2: " + estatura2);


    var nombre3 = "Juan";
    var edad3 = 23;
    var alive3 = true;
    var apellido3 = "Reyes";
    var estatura3 = 1.66;

    console.log("Nombre3: " + nombre3);
    console.log("Edad3: " + edad3);
    console.log("Alive3: " + alive3);
    console.log("Apellido3: " + apellido3);
    console.log("Estatura3: " + estatura3);


    var nombre4 = "Andrea";
    var edad4 = 34;
    var alive4 = true;
    var apellido4 = "Vela";
    var estatura4 = 1.70;

    console.log("Nombre4: " + nombre4);
    console.log("Edad4: " + edad4);
    console.log("Alive4: " + alive4);
    console.log("Apellido4: " + apellido4);
    console.log("Estatura4: " + estatura4);










