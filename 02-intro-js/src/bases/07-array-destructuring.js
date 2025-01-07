const personajes = ["Goku", "Vegeta", "Freezer"];

const [first] = personajes;
const [, second] = personajes;
const [, , third] = personajes;

console.log(first, second, third);

const retornArray = () => {
  return ["ABC", 123];
};

const [letters, numbers] = retornArray();

console.log(letters, numbers);

// Task

// No deja usar el useState, porque no se
const use = (nombre) => {
  return [
    nombre,
    () => {
      console.log("Hello world!");
    },
  ];
};

const [nombre, setNombre] = use("Carlos");

console.log(nombre);
setNombre();
