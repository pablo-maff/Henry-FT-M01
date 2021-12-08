// Extra Credit
// OOP - Prototypes

// Repeatify

// Crear un método repeatify que este disponible para todos los objetos Strings. Esta función debe aceptar un entero que indica cuantas veces el string tiene que repetirse.
// La función retorna el string repetido el número de veces que indicamos. Controlar que el número no sea menor que cero, y si es cero que devuelva '' (String vacío).


String.prototype.repeatify = function(n) {
  return this.repeat(n);
}

//console.log('hola'.repeatify(3));


//Shapes

// Crea un objeto llamado shape que tenga una propiedad type y un método getType.
// Ahora defini una función Triangle cuyo prototipo sea shape. Los objetos creados con Triangle deberían tener tres propiedades: a, b y c. 
// Que representan cada lado del triángulo. type debe ser Triangle. Agregá un nuevo método al prototipo llamado getPerimeter.



// Doing it as asked
/*
var Shape = { // Declare Shape object
  type : '',
  getType : function() {return this.type;}
};
//console.log(Object.prototype)


//console.log(Triangle)


function Triangle(a, b, c) { // Declare Triangle Object
  this.type = 'Triangle';
  this.a = a;
  this.b = b;
  this.c = c;
}

Triangle.prototype = Shape; // Set prototype of Triangle as Shape
Triangle.prototype.getPerimeter = function() { // Add getPerimeter function to Triangle object
  return this.a + this.b + this.c;
};
Triangle.prototype.constructor = Triangle; // Set constructor for each instance of Triangle
*/


// Using ES6

class Shape {
  constructor(type) {
    this.type = type;
  }
    getType() {
      return this.type
    }
  
}
s = new Shape('Shape')
console.log(s.getType())


class Triangle extends Shape {
  constructor(a, b, c, type){
    super(type),
    this.type = 'Triangle',
    this.a = a,
    this.b = b,
    this.c = c
  }
  getPerimeter() {return this.a + this.b + this.c}
}

// Ahora creá un nuevo constructor que herede de shape, llamado Circle. Implementalo de tal modo que puedas calcular su perímetro en la función getPerimeter.

class Circle extends Shape {
  constructor(radius, type){
    super(type),
    this.type = 'Circle',
    this.radius = radius
  }
  getPerimeter() {return 2 * Math.PI * this.radius}
}

// Creá una última shape llamada Square.

class Square extends Shape {
  constructor(side, type){
    super(type),
    this.type = 'Square',
    this.side = side
  }
  getPerimeter() {return this.side * 4}
}

// Agregá el método getArea de todas las shapes.

Shape.prototype.getArea = function() {
  let area = -1;
  if (this.getType() === 'Square') {
      area = this.side ** 2
  }
  else if (this.getType() === "Circle") {
      area = Math.PI * this.radius ** 2;
  }
  else if (this.getType() === "Triangle") {
      area = 0.5 * (this.a * this.b)
  }
  return area
}


// Adding properties and methods one by one
/*
let Triangle = Object.create(Shape)
Triangle.type = 'Triangle'
Triangle.a = this.a;
Triangle.b = this.b;
Triangle.c = this.c;
Triangle.getPerimeter = function() {return a+b+c}
*/

var t = new Triangle(1, 2, 3);
console.log(t)
console.log(t instanceof Triangle)
// true
console.log(Shape.isPrototypeOf(t));
// true
console.log(t.getPerimeter())
// 6
console.log(t.getType());
// "Triangle"
console.log('area triangle=',t.getArea())

var c = new Circle(2);
console.log(c)
console.log(c instanceof Circle)
// true
console.log(Shape.prototype.isPrototypeOf(c));
// true
console.log(c.getPerimeter());
// 12.566370614359172
console.log(c.getType());
// "Circle"
console.log('area circle=',c.getArea())

var s = new Square(5);
console.log(s)
console.log(s instanceof Square)
// true
console.log(Shape.prototype.isPrototypeOf(s));
// true
console.log(s.getPerimeter());
// 12.566370614359172
console.log(s.getType());
// "Circle"
console.log('area square=',s.getArea())