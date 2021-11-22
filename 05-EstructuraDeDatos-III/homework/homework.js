'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
  this.root = value;
}

function Node(data){
  this.head = data;
  this.right = null;
  this.left = null;
}

  BinarySearchTree.prototype.insert= function(data) {
    let newnode= new Node(data);
    let current = this.root; // 10
      if (!current) { 
      current = newnode.head;
      return current;
    } 
      if(data > this.data){
          if(this.right === null){
            this.right = newnode.head;          // 4
          } 
          else {
            derecha = this.right; // 11
            return derecha.insert(data)
          }
      }
      if(this.left === null){
          this.left = newnode.head; // 9
        } 
      else {
          izquierda = this.left;
          return izquierda.insert(data)
        }
  }
/*
function BinarySearchTree(value) {
  this.head = value;
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.insert= function(value){
 if(value > this.value){
   if (this.right === null){
     this.right = new BinarySearchTree(value);
   } else {
     this.right.insert(value);
   }
 }
 if (value < this.value){
    if (this.left === null){
     this.left = new BinarySearchTree(value);
   } else {
     this.left.insert(value);
   }
 }
};
  






var casa = new BinarySearchTree()
  



casa.insert(7)
casa.insert(9)
console.log(casa)
*/


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
