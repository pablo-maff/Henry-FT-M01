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
  let node = new Node(data), // Initialize node
  current = this.head;  // Pointer
  // If list is empty
  if (!current) {
    this.head = node; // The head pointer now is pointing to the new node
    this._length++;  // Length +1
    return node;
  }
  // If not empty, traverse the whole list to find the last node
  while (current.next != null) {
    current = current.next; // Set pointer on the last node of the list
  }
  current.next = node; // Add new node at the end of the list
  this._length++; // Length +1
  return node;
};

LinkedList.prototype.remove = function() {
  let pointer = this.head; // Set pointer to head
  // If list is empty return null
  if (!pointer) return null;
  // If list has 1 element, return element vale and remove it.
  if (pointer.next == null) {  // if next is null means that there is no next, therefore is a 1 element list
    this.head = null  // Set node to null
    return pointer.value; // return removed node value
  }
  // If two positions ahead of the pointer is null, we found the end of the list!
  while (pointer.next.next != null) { 
		pointer = pointer.next; // Set pointer to the second last node
	}
  let aux = pointer.next.value // Save last node value
	pointer.next = null; // Make last node null (remove)
	this._length--; // Length -1
  return aux; // Return node value
}

LinkedList.prototype.search = function(val) {
	let pointer = this.head; // Set pointer to head of the list
  // If list is empty
	if (!pointer) return null;
	let check = false; // Flag
  // If val is found
	if (pointer.value == val) check = true; // Set flag as true
  // If val not found traverse the list until the end
	while (!check && pointer.next != null) {
		pointer = pointer.next; // Set pointer one position ahead with each iteration
		if (pointer.value == val) check = true; // If val is found, set flag as true
	}
  // If val is in the list return val
	if (check) {
		return pointer.value;
  // If not found return undefined
	} else {
		return null;	
	} 
}


let linkedList = new LinkedList();
console.log(linkedList.add('one'));
console.log(linkedList.add('two'));
console.log(linkedList.search(function(nodeValue) {
  return nodeValue === 'two';
}))
console.log(linkedList)


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

}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
