const nombre = "Carlos";
const apellido = "Lopez";

// Concatenar strings
// Existen varias formas de concatenar strings
// 1. Usando el operador +
// const nombreCompleto = nombre + ' ' + apellido

// 2. Usando template string que usa ` ` eso que son comillas invertidas
const nombreCompletoTemplate = `${nombre} ${apellido}`;

console.log(nombreCompletoTemplate);

function greet(nombre) {
  return nombre;
}

console.log(`Hola ${greet(nombre)}, que mas pues, bien o no?`);
