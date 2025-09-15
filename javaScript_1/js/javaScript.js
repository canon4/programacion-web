//sentencia de entrada y salida
//salida
// alert(" Hello World! ");

//entrada
//let input = prompt("Enter your name: "); se captura como string
// console.log("Hello " + input);

// comentarios de una linea, se usa el atajo de teclado ctrl + /
/* comentarios
de varias lineas */ // se usa el atajo de teclado shift + alt + A

// imprimir en consola

console.log(" Hello World! ");

var name = "John"; //declaracion usada en todo el programa, tiene problemas al caragr el dom
let lastname = "Doe"; //declaracion usada en un bloque usar let por buenas practicas
const age = 30; // declaracion de una constante

console.log(name);
console.log(lastname);
console.log(age);

// tipos de datos
let number = 100; // number
let string = "Hello"; // string
let boolean = true; // boolean
let array = [1, 2, 3, 4, 5]; // array
//metodo para recorrer un array
// array.forEach(function(element, index) {
//   console.log("Elemento en el índice " + index + ": " + element);
// });
//metodos del los arrays mas usados
// array.push(6); // agrega un elemento al final del array
// array.pop(); // elimina el ultimo elemento del array
// array.shift(); // elimina el primer elemento del array
// array.unshift(0); // agrega un elemento al inicio del array
// console.log(array.indexOf(3)); // devuelve el indice del elemento
// console.log(array.length); // devuelve la longitud del array
let object = { name: "John", age: 30 }; // object
let nul = null; // null
let undef = undefined; // undefined

console.log(number);
console.log(string);
console.log(boolean);
console.log(array);
console.log(object);
console.log(nul);
console.log(undef);

// operadores
let a = 10;
let b = 5;

console.log(a + b); // suma
console.log(a - b); // resta
console.log(a * b); // multiplicacion
console.log(a / b); // division
console.log(a % b); // modulo
console.log(a ** b); // exponente
console.log(a == b); // igual
console.log(a != b); // diferente
console.log(a === b); // estrictamente igual
console.log(a !== b); // estrictamente diferente

// objetos: los objetos son colecciones de propiedades y metodos, a difrencia de java aqui se usan llaves {}  y no se definen clases
// ejemplo de un objeto persona
let person = {
  name: "Jane",
  age: 25,
  greet: function () {
    return "Hello, my name is " + this.name;
  },
};

console.log(person.name);
console.log(person.age);
console.log(person.greet());

// funciones
function greet(name) {
  return "Hello " + name;
}

console.log(greet("Alice"));
console.log(greet("Bob"));

//funciones flecha: las funciones flecha son una forma mas corta de escribir funciones anonimas
const add = (x, y) => x + y;

console.log(add(2, 3));

// funciones anonimas:  son funciones que no tienen un nombre
const multiply = function (x, y) {
  return x * y;
};
console.log(multiply(2, 3));

//funcion de orden superior: son funciones que reciben como parametro otra funcion
const higherOrderFunction = (func, x, y) => func(x, y);

console.log(higherOrderFunction(add, 2, 3));
console.log(higherOrderFunction(multiply, 2, 3));

//map
const squaredArray = array.map((num) => num ** 2);
console.log(squaredArray);

// estructuras de control
if (a > b) {
  console.log("a es mayor que b");
} else {
  console.log("a es menor que b");
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}
// ejemplo de forEach
array.forEach(function (element, index) {
  console.log("Elemento en el índice " + index + ": " + element);
});

// ejemplo de switch
let fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("It's an apple");
    break;
  case "banana":
    console.log("It's a banana");
    break;
  default:
    console.log("It's another fruit");
    break;
}

//json

let jsonString = '{"name": "John", "age": 30}'; // string en formato JSON
let persona = {
  name: "John",
  age: 30,
};
let jsonObject = JSON.parse(jsonString); // convierte el string JSON en un objeto JavaScript

let jsonPersona = JSON.parse(persona); // convierte el objeto JavaScript en un string JSON

let persona2 = {
  nombre: "juan",
  apellido: "ramirez",
};

// eventos
// document.getElementById("myButton").addEventListener("click", function () {
//   alert("Button clicked!");
// });

// DOM
//sirve para manipular el contenido y estilo de los elementos HTML usdando JavaScript
// document.getElementById("myDiv").innerHTML = "Hello DOM!"; //cambia el contenido del div con id myDiv
// document.getElementById("myDiv").innerHTML = "Hello DOM!";
// document.getElementById("myDiv").style.color = "blue";
// document.getElementById("myDiv").style.fontSize = "20px";
