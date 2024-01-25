/**
 * 
 * Suma de resistencias en serie
 

Calcule la suma de todas las resistencias conectadas en serie.
Ejemplos:
- `sumResitance([-1,5,6,3])` debería devolver `"15 ohmios"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` debería devolver `'23,5 ohmios'`. (14 + 3,5 + 6 = 23,5)
- `sumResitance([8,15,100])` debería devolver `'123 ohmios'`. (8 + 15 + 100 = 123)

Nota: Este enfoque utiliza el valor absoluto de cada resistencia para garantizar que todos los valores sean positivos.

 */

function sumarResistenciasEnSerie(resistencias) {
    let sumaTotal = 0;
  
    // Recorre cada resistencia en el array
    for (let i = 0; i < resistencias.length; i++) {
      // Suma el valor de cada resistencia al total
      sumaTotal += resistencias[i];
    }
  
    // Formatea el resultado como una cadena con unidades (ohmios)
    const resultadoFormateado = `${sumaTotal.toFixed(1)} ohmios`;
  
    return resultadoFormateado;
  }
  
  console.log(sumarResistenciasEnSerie([-1, 5, 6, 3]));    // Debería devolver "13 ohmios"
  console.log(sumarResistenciasEnSerie([14, 3.5, 6]));       // Debería devolver "23.5 ohmios"
  console.log(sumarResistenciasEnSerie([8, 15, 100]));        // Debería devolver "123 ohmios"

  function dividirNumeroEnMitades(numero) {
    const mitades = [];

    // ----------------------------------------------------------------------------------------------
  
    // Divide el número en dos mitades iguales utilizando un bucle

    for (let i = 0; i < 2; i++) {
      mitades.push(numero / 2);
    }
  
    return mitades;
  }

  console.log(dividirNumeroEnMitades(8));  

  console.log(dividirNumeroEnMitades(15));  
  
  // ------------------------------------------------------------------------------------------------

  // Sociedad Secreta.

  // Encontrar el nombre de la sociedad secreta 

  function nombreSecreto(nombres) {
    let nombreSecreto = "=";
  
    // Recorre cada nombre en el array
    for (let i = 0; i < nombres.length; i++) {
      // Agrega la primera letra de cada nombre al nombre secreto
      nombreSecreto += nombres[i][0];
    }
  
    return nombreSecreto;
  }
  
  console.log(nombreSecreto(["Esperanza", "Franco", "Nia"])); // "EFN" 
  
  console.log(nombreSecreto(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Mónica', 'Rachel'])); // "CJMPRR"
  
  console.log(nombreSecreto(['Harry', 'Ron', 'Hermione'])); // HRH
  
  // ------------------------------------------------------------------------------------------------

  // Estado en línea

// -- Muestra el estado en línea de una lista de usuarios.
 
function enLineaStatus(usuarios) {
    const enLinea = [];
    
    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i] !== 'offline') {
        enLinea.push(usuarios[i]);
      }
    }
  
    const cantidadEnLinea = enLinea.length;
  
    if (cantidadEnLinea === 0) {
      return 'Nadie en línea';
    } else if (cantidadEnLinea === 1) {
      return `${enLinea[0]} en línea`;
    } else {
      const otrosUsuarios = cantidadEnLinea - 1;
      return `${enLinea.slice(0, -1).join(', ')} y ${otrosUsuarios} más en línea`;
    }
  }
  
  console.log(enLineaStatus(['mockIng99', 'J0eyPunch', 'glassedFer']));
  
 // -------------------------------------------------------------------

// Matriz de múltiplos
 
// -- Cree una función que tome dos parámetros (número, longitud) y devuelva una matriz de longitud que contenga múltiplos del número.
 
function arrayMultiplos(numero, longitud) {
    const multiples = [];
    
    for (let i = 1; i <= longitud; i++) {
      multiples.push(numero * i);
    }
  
    return multiples;
  }

  console.log(arrayMultiplos(2, 10));  // Debería devolver [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
  console.log(arrayMultiplos(17, 6));  // Debería devolver [17, 34, 51, 68, 85, 102]
  
// --------------------------------------------------------------------------------------------------

// Dominio positivo en Array
 
// Escribe una función para determinar si una matriz es positivamente dominante.
// Una matriz es positivamente dominante cuando la mayoría de sus elementos son positivos.

function positiveDom(arr) {
  let cantidadNegativos = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      cantidadNegativos++;
    }
  }

  return cantidadNegativos < Math.ceil(arr.length / 2);
}

console.log(positiveDom([-1, -3, -5, 4, 6767])); 

 
 
// --------------------------------------------------------------------------------------------------

// Promedio antípoda

/** Dada una matriz, devuelva una matriz más corta siguiendo estos pasos:
   - Divida la matriz en dos partes iguales*. Si no es igual, elimine el elemento del medio para obtener dos matrices iguales.
   - Suma cada número de la primera parte con los números inversos de la segunda parte.
   - Divide cada número de la matriz resultante por 2.
 */

   function promedioAntipoda(arr) {
    const longitud = arr.length;
    const mitad = Math.floor(longitud / 2);
    
    if (longitud % 2 !== 0) {
      arr.splice(mitad, 1);
    }
  
    const resultado = [];
  
    for (let i = 0; i < mitad; i++) {
      resultado.push((arr[i] + arr[longitud - 1 - i]) / 2);
    }
  
    return resultado;
  }
  
  console.log(promedioAntipoda([1, 2, 3, 5, 22, 6])); 
  