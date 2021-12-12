'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(data) {
  this.value = data;
  this.left = null;
  this.right = null;
}


BinarySearchTree.prototype.insert = function(val) {
  // If node is empty
  if (this.value === null) {
    this.value = val // Set node
  }

  // If tree is not empty and value is less than his father's value
  if (val < this.value) {
    if(this.left === null){
			this.left = new BinarySearchTree(val); // Insert new node on the left side
      this.length++;
    } else{ // If a node exists to the left of the head
			  this.left.insert(val); // Recursively search for the last node on the left and insert new node
		}
  }
  // If tree is not empty and value is greater than his father's value
  if(val >= this.value){
		if(this.right === null){
			this.right = new BinarySearchTree(val); // Insert new node on the right side
      this.length++;
		} else{ // If a node exists to the right of the head
			  this.right.insert(val); // Recursively search for the last node on the right and insert new node
		}
  }
  // Return the tree
  return this
}


BinarySearchTree.prototype.contains = function(val) {
	if(this.value === val){
		return true;
	}
	if(val <= this.value && this.left !== null){
		return this.left.contains(val);
	}else if(val > this.value && this.right !== null){
		return this.right.contains(val)
	}else{
		return false;
	}
}


BinarySearchTree.prototype.depthFirstForEach = function(fn, option) {
  // See https://stackoverflow.com/questions/61285224/javascript-binary-search-tree-in-order-traversal-recursive-confusion
  if (!option || option === 'in-order') {
    this.inOrder(fn)
  }

  if (option === 'pre-order') {
    this.preOrder(fn)
  }

  if (option === 'post-order') {
    this.postOrder(fn);
  }
}

// Return a sorted list of nodes, from minimum to maximum
BinarySearchTree.prototype.inOrder = function(fn) {
  // If node has no children
  if (!this.left && !this.right) return fn(this.value) // Return node

  // If node has children to its left
  if (this.left) this.left.inOrder(fn) // Find the last node to the left and return it first, followed by its parents and the parents childrens to the right
  fn(this.value) // Return parent node after all its children to the left have been returned
  // If node has children to its right
  if (this.right) this.right.inOrder(fn) // Repeat above process on the right side (first search for children to the left, etc)
}

// Return nodes as they are found, starting for root, then moving to the left and returning nodes as found, at last do the same for the right side
BinarySearchTree.prototype.preOrder = function(fn) {
  fn(this.value) // Return parent node
  if(this.left) this.left.preOrder(fn) // Return nodes to the left
  if(this.right) this.right.preOrder(fn) // Return nodes to the right
}

// Return nodes, starting for the last leave and finishing with the root
BinarySearchTree.prototype.postOrder = function(fn) {
  if(this.left) this.left.postOrder(fn) // Reach the last node to the left
  if(this.right) this.right.postOrder(fn) // Check if it has a child to the right
  fn(this.value) // Return the last node
}       


// Return nodes per level, from left to right, starting from root and finishing on the last one
BinarySearchTree.prototype.breadthFirstForEach = function(fn, array) {
  if(!array) {
    var array = [];
  }
  // Short-circuit evaluation. 
  !!this.left && array.push(this.left); // If there is a node to the left of the parent, push that node to the array
  !!this.right && array.push(this.right); // If there is a node to the right of the parent, push that node to the array
  fn(this.value); // Return parent node value
  !!array.length && array.shift().breadthFirstForEach(fn, array); // If array contains a node, return the first item and 
                                                                  // recursively check for its childrens on the next depth-level.
}


BinarySearchTree.prototype.size = function() {
  if(!this.left && !this.right) return 1;
  if(!this.left && this.right) return 1 + this.right.size();
  if(this.left && !this.right) return 1 + this.left.size();
  return 1 + this.left.size() + this.right.size();
}





const tree = new BinarySearchTree(20);
let testArr = [];
let valuesToInsert = [15, 25,5]//, 5, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34];

valuesToInsert.forEach(function(value){
  tree.insert(value);
});

var depth = [];
tree.breadthFirstForEach(function(val){ depth.push(val); });
//expect(depth).toEqual([20, 15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 13, 45, 12, 30, 11, 35, 33, 31, 34]);
console.log(depth)

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
