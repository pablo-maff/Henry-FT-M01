'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
  this._length = 0; // Length
  this.head = null; // Puntero
}


function Node(value){
  this.value = value; // Datos
  this.next = null; // Puntero
}


LinkedList.prototype.add = function(data) {
  let node = new Node(data), // Instanciate node
  pointer = this.head;       // Initialize pointer set to head
  // If list is empty
  if (!pointer) {
    this.head = node; // Set head to the new node
    this._length++;
    return node;
  }
  // If not empty, traverse the whole list to find the last node
  while (pointer.next) {
    pointer = pointer.next; // Set pointer to the last node of the list
  }
  pointer.next = node; // Add new node at the end of the list
  this._length++;
  return node;
};


LinkedList.prototype.remove = function() {
  let pointer = this.head; // Set pointer to head
  // If list is empty return null
  if (!pointer) return null;
  // If list has 1 element, return element value and remove it.
  if (!pointer.next) {  // if next is null means that there is no next, therefore is a 1 element list
    this.head = null    // Set node to null
    --this._length;
    return pointer.value; // $eturn removed node value
  }
  // If two positions ahead of the pointer is null, we found the end of the list!
  while (pointer.next.next) { 
		pointer = pointer.next; // Set pointer to the second last node
	}
  let aux = pointer.next.value // Save last node value
	pointer.next = null;         // Make last node null (remove)
	--this._length;
  return aux; // Return removed node value
}


LinkedList.prototype.search = function(val) {
  let pointer = this.head; // Set pointer to head of the list
  // If list is empty
	if (!pointer) return null;
  // If val is found return it.
	else if (pointer.value == val) return pointer.value;
  // If val is a function and its invocation is true (Only if val is the head of the list, otherwise will search for it in the loop)
  else if (typeof val == 'function' && val(pointer.value)) {
    return pointer.value // Return value
  }
  // If val not found traverse the list to search for val until the end
  while (pointer.next != null) {
		pointer = pointer.next; // Set pointer one position ahead with each iteration
		// If val is found, return it
    if (pointer.value == val) return pointer.value; 
    // If val is a function and its invocation is true
	  else if (typeof val == 'function' && val(pointer.value)) {    
      return pointer.value // Return value 
    }
  }
  // If not found return null
	return null;	
}


// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.


function HashTable() {
  // Generar 35 buckets
  this.buckets = new Array(35);
  this.numBuckets = this.buckets.length;
}


HashTable.prototype.hash = function(key) {
  // Pasar valor a la funcion hash (usar charCodeAt) en la posicion que debe ir en el arreglo
  // Esta funcion hasheadora deberia sumar los key code de las letras de la palabra,
  // y hacer el mod de ese numero por el numero de buckets .
  let sum = 0;
  for (let i = 0; i < key.length; i++) {
    sum += key.charCodeAt(i);
  }
  return sum % this.numBuckets;
}


HashTable.prototype.set = function(key, value) {
  // If key is not a string, return TypeError
  if (typeof key != 'string') throw new TypeError("Keys must be strings");
  let index = this.hash(key);
  
  // If bucket contains data
  if (this.buckets[index]) {
    // Check if key already exists
    if (this.hasKey(key)) this.buckets[index] = [[key, value]] // Overwrite it in case the value has changed
    // If key doesn't exists, append data into the bucket
    this.buckets[index].push([key, value])
  }
  
  // If bucket is empty
  if(!this.buckets[index]) {
    this.buckets[index] = []; // Create an empty bucket
    this.buckets[index].push([key, value]) // Insert data
}
  // Return hashed key
  return index;
}


HashTable.prototype.get = function(key) {
  let index = this.hash(key);

  // If key is not found, return false
  if(!this.hasKey(key)) return false;

  // If table has key, return its value
  if (this.buckets[index].length > 1) {
    for (let clave of this.buckets[index]) {
      if (clave[0] === key) { // If key is found, return its value
        return clave[1]
      }
    } return false // If key is not found, return false
  }
    return this.buckets[index][0][1] // Return value
}


HashTable.prototype.hasKey = function(key) {
  let index = this.hash(key);
  // If bucket is empty, return false
  if(!this.buckets[index]) return false;
  // If bucket is not empty, search for the key
  for (let clave of this.buckets[index]) {
    if (clave[0] === key) { // If key is found, return true
      return true
    }
  } return false // If key is not found, return false
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
