'use strict'
// No cambies los nombres de las funciones.

/*
Factoreando Números: Se acuerdan como factoreaban números en la escuela? Hagamos un algoritmo para eso! Hay que seguir estos pasos:

Empezamos intentando dividir el número en dos, si el resto es cero, lo seguimos haciendo hasta que no sea cero. En cada pasa agregamos el número como factor.
Pasamos a el siguiente factor que no sea divisible con ningún anterior (en la segunda pasada seria el tres) y dividimos, si el resto es cero, lo agregamos como factor, si no, pasamos al siguiente factor.
¿Cómo implementarían este algoritmo?
¿Funciona bien? Comparen con los resultados de sus compañeros.
¿Qué complejidad tiene el algoritmo que escribieron? ¿Lo pueden mejorar?
*/

// Iterative Solution
function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let arr = [1];  // Array starts with 1 inside because it is required to pass the tests 
  if (num <= 1) return arr; // Safety net, always return 1 if the input can break the program.
  let i = 2;
  while (num >= i) {  // If dividend is greater or equal than divisor continue calculations
    if (num % i === 0) {  // If mod is equal to 0, we've got the divisor we want
    arr.push(i);  // Append divisor to array
    num /= i; // Change dividend to continue the search
    }
    else {    // If mod is not equal to 0 means that we are done with this divisor
      i += 1; // Increase divisor by 1
    }
  }
  return arr
}


/*
// Recursive Solution
function factorear(num) {
  let arr = [1]; // Array starts with 1 inside because it is required to pass the tests 
  if (num <= 1) return arr // Safety net, always return 1 if the input can break the program.
  let i = 2  // Use closures for array and i to preserve variables state
  function factoreando(num) {
    if (num % i !== 0) { // If mod is not equal to 0 means that we are done with this divisor
      i += 1;            // Increase divisor by 1
      return factoreando(num) // Recursive call with new divisor
    }
    else if (num % i === 0) { // If mod is equal to 0, we've got the divisor we want
      arr.push(i);            // Append divisor to array
      if (num === i) return arr; // Exit case, if dividend is equal to divisor that's the last number we are looking for. Return array and finish execution.
      num /= i;            // Change dividend to continue the search
      return factoreando(num); // Recursive call with new dividend
    }
  }
  return factoreando(num)
}
*/


/*
Implementar el algoritmo BubbleSort.
Agregen funcionalidad para poder medir el tiempo que tarda en ordenar.
¿Como podemos reducir el tiempo? Buscar mejoras de BubbleSort.
*/

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let swap = false; // Flag
  while (!swap) { // While flag is false execute the program
    swap = true;  // Set flag to true to exit when all items are sorted
    for (let i = 0; i < array.length; i++) {  // Traverse the list and make comparisons
      if (array[i-1] > array[i]) {  // If preceding item is greater than next item
        swap = false; // Set flag back to false to continue execution
        let aux = array[i];  // Store smaller item in temporary auxiliar variable
        array[i] = array[i-1];  // Swap position of greater item towards the end of the array
        array[i-1] = aux;   // Swap position of smaller item towards the beginning of the array.
      }
    }
  } return array
}

/*
Implementar el algoritmo InsertionSort.
Calculen la complejidad de tu implementación.
*/
function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

}


/*
Implementar el algoritmo SelectionSort.
Calculen la complejidad de tu implementación.
*/
function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
