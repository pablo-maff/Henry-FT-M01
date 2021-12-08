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
  this.head = null;
  this._length = 0;
}
LinkedList.prototype.add = function (value){ 
  let node = new Node(value);
  let contenedor;
  if (this.head === null){
    this.head = node;
    this._length ++;
    return
  } else {
    contenedor = this.head;
  } 
  while (contenedor.next){
    contenedor = contenedor.next
  }
  contenedor.next = node;
  this._length ++;
}

LinkedList.prototype.remove = function (){
  if (this.head === null){
    return
  } if (this.head._length === 1) {
    console.log('Este es el ultimo elemento')
    this.head = null;
    this.head._length --;
    return 1;}
  let contenedor = this.head;
  let cont2;
  while (contenedor.next){
    cont2 = contenedor;
    contenedor = contenedor.next}
    cont2.next = null;
    return contenedor.value;
}

LinkedList.prototype.search = function (value){
  let contenedor = this.head;
  while(contenedor){
    if (contenedor.value === value){
      return contenedor.value;
    }
    contenedor = contenedor.next;
  }
  return null;
}

function Node(value){
  this.value = value;
  this.next = null;
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
  this.bucket = [];
}

HashTable.prototype.set = function(key,value) {
  this.bucket.push({key,value});
  console.log(this.bucket)
}

HashTable.prototype.get = function() {
  // Devolver el valor de key
}

HashTable.prototype.hasKey = function() {

}

HashTable.prototype.hash = function(key) {
  let acumulador = 0
  for (let i=0; i <= key.length -1; i++) {
    let clave = key[i].charCodeAt();
    acumulador += clave;
  };
  return acumulador % this.bucket.length;
};
//var hashTable = new HashTable();
//console.log(hashTable.set('a'))
//console.log(hashTable.set('a'.charCodeAt(), 'a'))
//console.log('a'.charCodeAt())

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
