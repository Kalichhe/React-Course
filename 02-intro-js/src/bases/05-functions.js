// Funciones

// Es recomendable asignarle a una funcion una constante, como asi
// Esta es una funcion normarl

const saludar = function (nombre) {
  return `Hello, ${nombre}, how are you?`;
};

// Esta es una funcion flecha
const saludar2 = (nombre) => {
  return `Hello, ${nombre}, how are you?`;
};

const saludar3 = (nombre) => `Hello, ${nombre}, how are you?`;

console.log(saludar("Carlos"));
console.log(saludar2("Kalichhe"));
console.log(saludar3("Mario"));

// Tarea

function getUsuarioActivo(nombre) {
  return {
    uid: "ABC567",
    username: nombre,
  };
}

const usuarioActivo = getUsuarioActivo("Kalichhe");

console.log(usuarioActivo);

// 1. Transformar a una funcion flecha

const getUsuarioActivo2 = (nombre) => {
  return {
    uid: "ABC567",
    username: nombre,
  };
};

// 2. Tiene que retornar un objeto implicito

const getUsuarioActivo3 = (nombre) => ({
  uid: "ABC567",
  username: nombre,
});

// 3. Probar

const usuarioActivo2 = getUsuarioActivo2("Carlos");
console.log(usuarioActivo2);

const usuarioActivo3 = getUsuarioActivo3("Mario");
console.log(usuarioActivo3);
