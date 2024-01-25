/**Ejercicios para esta sesion
 * 
 * Declara una funcion para cada problema planteado
 * 
 * calcular el perimetro de un circulo
 * calcular el area de un rectangulo
 * calcular el cuadrado de un numero
 * calcular la conversion de grados celsius a farenheit
 * calcular el valor del voltaje dadas la resistencia y la corriente
 * calcular el volumen de una esfera
 * 
 * CONSIDERACIONES: poner en practica las mejores practicas para declarar funciones
 * Los ejercicios se entregan tanto en funciones con nombre como funciones flecha
 */

   // ---- 1.-Calcular el perimetro de un circulo. ---- //

function calcularPerimetroCirculo(radio) {
    return 2 * Math.PI * radio;
  }
  
  const calcularPerimetroCirculoFlecha = (radio) => 2 * Math.PI * radio;
  
  // ---- 2.-Calcular el área de un rectángulo. ---- //

  function calcularAreaRectangulo(base, altura) {
    return base * altura;
  }
  
  const calcularAreaRectanguloFlecha = (base, altura) => base * altura;
  
  // ---- 3.-Calcular el cuadrado de un número. ---- //

  function calcularCuadrado(numero) {
    return numero ** 2;
  }
  
  const calcularCuadradoFlecha = (numero) => numero ** 2;
  
  // ---- 4.-Calcular la conversión de grados Celsius a Fahrenheit. ---- //

  function convertirCelsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  const convertirCelsiusAFahrenheitFlecha = (celsius) => (celsius * 9/5) + 32;
  
  // ---- 5.-Calcular el valor del voltaje dadas la resistencia y la corriente. ---- //

  function calcularVoltaje(resistencia, corriente) {
    return resistencia * corriente;
  }
  
  const calcularVoltajeFlecha = (resistencia, corriente) => resistencia * corriente;
  
  // ---- 6.-Calcular el volumen de una esfera. ---- //

  function calcularVolumenEsfera(radio) {
    return (4/3) * Numero.PI * radio ** 3;
  }
  
  const calcularVolumenEsferaFlecha = (radio) => (4/3) * Numero.PI * radio ** 3;
  