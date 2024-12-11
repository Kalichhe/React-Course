const persona = {

  nombre: 'Carlos',
  apellido: 'Lopez',
  edad: 21,
  direccion: {
    ciudad: 'Chigorodo',
    zip: 410,
    lat: 12.2123,
    lng: 23.1231
  }

}

console.log({
  persona
});

// Se puede imprimir con un console.table
// Se ve muy chimba imprimir esos objetos de esa forma

// console.table(
//   {
//     persona
//   }
// )


// Si se quiere hacer un clon de un objeto, lo debemos de hacer de la siguiente manera

// Usando el operador spread que son ... esos 3 puntos seguidos
const persona2 = {
  ...persona
}

console.log({
  persona2
});
