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

let Shape = {
  type : 'Shape',
  getType: function() {
    return this.type
  }
}
//console.log(Shape.getType())


//Shape.prototype.Triangle = function(a,b,c){
//  type = 'Triangle',
//  getPerimeter = function() {return a+b+c}
//}

let Triangle = Object.create(Shape)
Triangle.type = 'Triangle'
Triangle.a = this.a;
Triangle.b = this.b;
Triangle.c = this.c;
Triangle.getPerimeter = function() {return a+b+c}


var t = new Triangle(1, 2, 3);

t instanceof Triangle
// true
Shape.prototype.isPrototypeOf(t);
// true
t.getPerimeter();
// 6
t.getType();
// "Triangle"
