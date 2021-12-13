'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `search`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
  this.value = value;
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
    } else{ // If a node exists to the left of the head
			  this.left.insert(val); // Recursively search for the last node on the left and insert new node
		}
  }
  // If tree is not empty and value is greater than his father's value
  if(val >= this.value){
		if(this.right === null){
			this.right = new BinarySearchTree(val); // Insert new node on the right side
		} else{ // If a node exists to the right of the head
			  this.right.insert(val); // Recursively search for the last node on the right and insert new node
		}
  }
  // Return the tree
  return this
}


BinarySearchTree.prototype.search = function(val) {
	if(this.value === val){
		return this;
	}
	if(val <= this.value && this.left !== null){
		return this.left.search(val);
	}else if(val > this.value && this.right !== null){
		return this.right.search(val)
	}else{
		return undefined;
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
  !!array.length && array.shift().breadthFirstForEach(fn, array); // If array search a node, return the first item and 
                                                                  // recursively check for its childrens on the next depth-level.
}


BinarySearchTree.prototype.size = function() {
  if(!this.left && !this.right) return 1;
  if(!this.left && this.right) return 1 + this.right.size();
  if(this.left && !this.right) return 1 + this.left.size();
  return 1 + this.left.size() + this.right.size();
}


BinarySearchTree.prototype.isBalanced = function(){
	if(!this.right && !this.left) return true
	if(Math.abs(this.balanceFactor())>1){
		return false
	}
	if(!this.right){
		return this.left.isBalanced();
	}else if(!this.left){
		return this.right.isBalanced();
	}
	else{
		return this.right.isBalanced() && this.left.isBalanced();
	}
}

BinarySearchTree.prototype.height = function(){ 
	if(!this.left && !this.right){
		return 0;
	}else{
		if(this.left && !this.right){
			return this.left.height() + 1;
		}else if(!this.left && this.right){
			return this.right.height() + 1;
		}else{
			return Math.max(this.left.height() + 1, this.right.height() + 1 );
		}
	}
}

BinarySearchTree.prototype.balanceFactor = function(){
	if(!this.left && !this.right){
		return 0;
	}else{
		if(this.left && !this.right){
			return  - this.left.height() - 1 ;
		}else if(!this.left && this.right){
			return this.right.height() + 1;
		}else{
			return this.right.height() - this.left.height() ;
		}
	}	
}

BinarySearchTree.prototype.maxBalanceFactor = function(m){
	if(m === undefined) var m = 0;
	else{
		if (Math.abs(this.balanceFactor()) > m) m = Math.abs(this.balanceFactor());
	}
	if(!this.left && this.right) return Math.max(this.right.maxBalanceFactor(m), m);
	if(!this.right && this.left) return Math.max(this.left.maxBalanceFactor(m), m);
	if(this.right && this.left)  return Math.max(this.right.maxBalanceFactor(m), this.left.maxBalanceFactor(m))
	if(!this.right && !this.left) return 1;
}

BinarySearchTree.prototype.balance = function(anterior, arbol, from){
	if(!arbol) arbol = this;
	if(!anterior) anterior = this;
	let thisbf  =	this.balanceFactor();
	let leftbf  = Infinity;
	let rightbf = Infinity;
	if(this.isBalanced()) return arbol;
	if(this.left)	leftbf  =	this.left.balanceFactor();
	if(this.right)	rightbf =	this.right.balanceFactor();
	
	// console.log( 'node:',this.data,'l:', leftbf, 'this:',  thisbf  , 'r:', rightbf);
	if((thisbf < 0 && this.maxBalanceFactor() >= Math.abs(thisbf) )){
		//el desbalance está a la izquierda
		if(this.left){
			return this.left.balance(this,arbol, 'left');
		}
	}else if(( thisbf > 0 && this.maxBalanceFactor() >= thisbf)){
		//desbalance a la derecha
		if(this.right){
			return this.right.balance(this, arbol, 'right');
		}
	}else{
		if(this.right) if( !this.right.isBalanced()) return this.right.balance(this, arbol, 'right');
		if(this.left) if( !this.left.isBalanced()) return this.left.balance(this, arbol, 'right');
		//este arbol esta desbalanceado
		if(this == arbol) { return  this.rotate() }
		else{anterior[from] = this.rotate(); }
	}
	return arbol;

}

BinarySearchTree.prototype.rotate = function(){
	var aux;
	if(this.balanceFactor() <= -2){
		if(this.left.left && this.left.balanceFactor() <= 0){
			//Left Left
			// console.log('ll','pivot:', this.value);
			aux = this.left;
			this.left = aux.right;
			aux.right = this;

		}else if(this.left.right){
			//Left Right
			// console.log('lr','pivot:', this.value);
			aux = this.left.right;
			this.left.right = aux.left;
			aux.left = this.left;
			this.left = aux.right;
			aux.right = this;
			}
	}else if (this.balanceFactor() >=2 ){
		if(this.right.right && this.right.balanceFactor() >= 0){
			//Right Right
			// console.log('rr','pivot:', this.value);
			aux = this.right;
			this.right = aux.left;
			aux.left = this;
		}else if(this.right.left){
			//Right Left
			// console.log('rl','pivot:', this.value);
			aux = this.right.left;
			this.right.left = aux.right;
			aux.right = this.right;
			this.right = aux.left;
			aux.left = this;
		}
	}
	return aux;
}


BinarySearchTree.prototype.print = function(s){
	if(!s){
		s=0;
		console.log('===================');
	}
	console.log('--'.repeat(s)+this.value);
	++s;
	if(this.left) this.left.print(s);
	if(this.right) this.right.print(s);
}


BinarySearchTree.prototype.findMin = function(){
	if(this.left && this.right){
		var l = this.left.findMin();
		var r = this.right.findMin();
		if(l.value < r.value) return l;
		else return r
	}else{
		if(this.left){
			let minL = this.left.findMin();
			return minL.value  <= this.value ?  minL: this;
		}
		if(this.right){
			let minR = this.right.findMin();
			return minR.value  <= this.value ?  minR: this;
		}
	}
	if(!this.left && !this.right) return this;
}

BinarySearchTree.prototype.findMax = function(){
	if(this.left && this.right){
		var l = this.left.findMax();
		var r = this.right.findMax();
		if(l.value > r.value) return l;
		else return r
	}else{
		if(this.left){
			let maxL = this.left.findMax();
			return maxL.value  > this.value ?  maxL: this;
			
		}
		if(this.right){
			let maxR = this.right.findMax()
			return maxR.value > this.value ? maxR: this
		}
	}
	if(!this.left && !this.right) return this;
}


BinarySearchTree.prototype.delete = function(v){
	var tree = this;
	var node = this.search(v);
	if(!this.left && !this.right && this === node) return null;
	if(!node) return this;
	if(node.left){
		var target = node.left.findMax();
		if(node.left == target) node.left = target.left;
		node.destroy(target);
		node.value = target.value;
	}else if(node.right){
		var target = node.right.findMin()
		if(node.left === target) node.left = target.left;
		node.destroy(target);
		node.value = target.value;
		node.right = target.right;
	}else{
		this.destroy(node);
	}
	while(!this.isBalanced()){
		tree = tree.balance();
	}
	return tree;
}


BinarySearchTree.prototype.destroy = function(n, anterior, next){
	if(!anterior) var anterior = this;
	if(this == n ){ 
		if( anterior == this){ //Is the root element
			return null;
		}else{
			return anterior[next] = null;
		}
	}
	if(n.value < this.value){
		if(this.left){
			this.left.destroy(n, this, 'left' )
		}
	}else{
		if(this.right){
			this.right.destroy(n, this, 'right' )
		}
	}
	return this;
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = BinarySearchTree

