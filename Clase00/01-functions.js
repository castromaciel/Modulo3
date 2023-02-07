//TODO: Ordenar los objetos de menor a mayor por la edad 

const john = { name: "John", age: 25 };
const pete = { name: "Pete", age: 30 };
const mary = { name: "Mary", age: 28 };

const arr = [pete, john, mary]

//* Crear funcion para el ordenamiento
sortByAge(arr)

//* ahora: [john, mary, pete]
console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete
