'use strict'; 

var BinarySearchTree = require('./homework_extra.js');
var _ = require('underscore');
var test = require('tape');

test('Rotations', function (t) {
	var tree = new BinarySearchTree(3).insert(2).insert(1).rotate();
    t.deepEqual(tree, new BinarySearchTree(2).insert(1).insert(3), 'Left Left Rotation.')

	tree = new BinarySearchTree(5).insert(2).insert(3).rotate();
    t.deepEqual(tree, new BinarySearchTree(3).insert(2).insert(5) , 'Left Right Rotation.')

    tree = new BinarySearchTree(6).insert(7).insert(4).insert(5).insert(3).insert(2).rotate();
    t.deepEqual(tree, new BinarySearchTree(4).insert(3).insert(2).insert(6).insert(5).insert(7) , 'Left Left Rotation 2.')

	tree = new BinarySearchTree(1).insert(2).insert(3).rotate();
    t.deepEqual(tree, new BinarySearchTree(2).insert(1).insert(3) , 'Right Right Rotation 1.')

    tree  = new BinarySearchTree(2).insert(1).insert(4).insert(3).insert(5).insert(6).rotate();
    t.deepEqual(tree, new BinarySearchTree(4).insert(2).insert(1).insert(3).insert(5).insert(6) , 'Right Right Rotation 2.');

    tree = new BinarySearchTree(1).insert(3).insert(2).rotate(); 
    t.deepEqual(tree, new BinarySearchTree(2).insert(1).insert(3), 'Right Left Rotation.');

    t.end();
});

test('Height', function (t) {
	var tree = new BinarySearchTree(1).insert(2).insert(3).insert(4).insert(5).insert(6);
	t.equal(tree.height(), 5, 'Height of the tree 1.');

	tree = new BinarySearchTree(6).insert(4).insert(3).insert(5).insert(8).insert(7).insert(9);
	t.equal(tree.height(), 2, 'Height of the tree 2.');

    t.end();
});


test('Searches', function (t) {

	var tree = new BinarySearchTree(1).insert(2).insert(3).insert(4).insert(5).insert(6);
	t.equal(tree.search(2).value,2,'Search 1.');

	tree = new BinarySearchTree(6).insert(4).insert(3).insert(5).insert(8).insert(7).insert(9);
	t.notOk(tree.search(99), 'Search 2.');

    t.end();
});


test('Balance', function (t) {
	var tree = new BinarySearchTree(1).insert(2).insert(3).insert(4).insert(5).insert(6);
	t.notOk(tree.isBalanced(), 'Balance of Tree.');

	tree = new BinarySearchTree(6).insert(4).insert(3).insert(5).insert(8).insert(7).insert(9);
	t.ok(tree.isBalanced(), 'Balance of Tree 2.');

	tree = new BinarySearchTree(4).insert(3).insert(2).insert(1).insert(6).insert(5).insert(7);
	t.notOk(tree.isBalanced(), 'Balance of Tree 3.')
    t.end();
});

test('Balance Factor', function (t) {
	var tree = new BinarySearchTree(1).insert(2).insert(3).insert(4).insert(5).insert(6);
	t.equal(tree.balanceFactor(), 5, 'Balance Factor of Node.');

	tree = new BinarySearchTree(1).insert(2).insert(3).insert(4).insert(5).insert(6).insert(0);
	t.equal(tree.balanceFactor(), 4, 'Balance Factor of Node 2.');

	tree = new BinarySearchTree(6).insert(4).insert(3).insert(5).insert(8).insert(7).insert(9);
	t.equal(tree.balanceFactor(), 0, 'Balance Factor of Node 3.');

    t.end();
});

test('Auto Balance', function (t) {
	var tree = new BinarySearchTree(1).insert(2).insert(3).insert(4).insert(5).insert(6).insert(7);
	t.deepEqual(tree, new BinarySearchTree(4).insert(2).insert(1).insert(3).insert(6).insert(5).insert(7) , 'Auto Balance on Insert 1.');


	tree = new BinarySearchTree(7).insert(6).insert(5).insert(4).insert(3).insert(2).insert(1);
	t.deepEqual(tree, new BinarySearchTree(4).insert(2).insert(1).insert(3).insert(6).insert(5).insert(7) , 'Auto Balance on Insert 2.');


	tree = new BinarySearchTree(22).insert(20).insert(62).insert(36).insert(60).insert(78).insert(68)
				.insert(5).insert(37).insert(49);
	var correct = new BinarySearchTree(60).insert(22).insert(20).insert(37).insert(5).insert(36).insert(49).insert(68).insert(62).insert(78);
	t.deepEqual(tree,  correct , 'Auto Balance on Insert random numbers 1.');

	tree = new BinarySearchTree(100).insert(62).insert(34).insert(15).insert(21).insert(86).insert(12)
				.insert(8).insert(8).insert(92);
	correct = new BinarySearchTree(62).insert(12).insert(8).insert(8).insert(21).insert(15).insert(34).insert(92).insert(86).insert(100);
	t.deepEqual(tree,  correct , 'Auto Balance on Insert random numbers 2.');

	tree = new BinarySearchTree(87).insert(93).insert(61).insert(80).insert(8).insert(89).insert(22)
				.insert(91).insert(60).insert(33);
	correct = new BinarySearchTree(87).insert(60).insert(22).insert(8).insert(33).insert(61).insert(80).insert(91).insert(89).insert(93);
	t.deepEqual(tree,  correct , 'Auto Balance on Insert random numbers 3.');

	tree = new BinarySearchTree(100).insert(62).insert(34).insert(15).insert(21).insert(86).insert(12)
				.insert(8).insert(8).insert(92).insert(25).insert(70).insert(55).insert(6).insert(22);
	correct = new BinarySearchTree(21).insert(12).insert(8).insert(6).insert(8).insert(15).insert(62).insert(34).insert(25).insert(55).insert(22).insert(92).insert(86).insert(100).insert(70);
	t.deepEqual(tree,  correct , 'Auto Balance on Insert random numbers 4.');

	t.end();
});


test('Deleting Nodes', function (t) {
	var tree = new BinarySearchTree(1).insert(2).insert(3).insert(4).insert(5).delete(4);
	var correct = new BinarySearchTree(2).insert(1).insert(3).insert(5);
	t.deepEqual(tree, correct, 'Deleting Nodes 1.')

	tree = new BinarySearchTree(1).insert(2).insert(3).insert(4).insert(5).delete(2);
	correct = new BinarySearchTree(4).insert(1).insert(3).insert(5);
	t.deepEqual(tree, correct, 'Deleting Nodes 2.')

	tree = new BinarySearchTree(87).insert(93).insert(61).insert(80).insert(8).insert(89).insert(22)
				.insert(91).insert(60).insert(33).delete(60);
	correct = new BinarySearchTree(87).insert(33).insert(22).insert(8).insert(61).insert(80).insert(91).insert(89).insert(93);
	t.deepEqual(tree,  correct , 'Delete with random numbers 3.');

	tree = new BinarySearchTree(87).insert(33).insert(22).insert(8).insert(61).insert(80).insert(91).insert(89).delete(33);
	correct = new BinarySearchTree(80).insert(22).insert(8).insert(61).insert(89).insert(87).insert(91);
	t.deepEqual(tree,  correct , 'Delete with random numbers 4.');

	tree = new BinarySearchTree(87).insert(93).insert(61).insert(80).insert(8).insert(89).insert(22)
				.insert(91).insert(60).insert(33).delete(60).delete(33);
	correct = new BinarySearchTree(87).insert(22).insert(8).insert(61).insert(80).insert(91).insert(89).insert(93);
	t.deepEqual(tree,  correct , 'Delete with random numbers 5.');

	tree = new BinarySearchTree(1).insert(2).insert(3).insert(4).insert(5).insert(6).insert(7).insert(8)
				.delete(8).delete(7).delete(6).delete(5).delete(4).delete(3).delete(2).delete(1);
	t.deepEqual(tree,  null , 'Completely delete 6.');

	tree = new BinarySearchTree(8).insert(7).insert(6).insert(5).insert(4).insert(3).insert(2).insert(1)
				.delete(8).delete(7).delete(6).delete(5).delete(4).delete(3).delete(2).delete(1);
	t.deepEqual(tree,  null , 'Completely delete Same order 7.');

	tree = new BinarySearchTree(8).insert(7).insert(6).insert(5).insert(4).insert(3).insert(2).insert(1)
				.delete(1).delete(2).delete(3).delete(4).delete(5).delete(6).delete(7).delete(8);
	t.deepEqual(tree,  null , 'Completely delete Inversed order 8.');

	t.end();
});