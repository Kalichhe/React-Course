// Arreglos en JS

const arreglo = [1,2,3,4];

// No se recomienda usar el push para insertar datos en un array
// arreglo.push(1)
// arreglo.push(2)
// arreglo.push(3)

// Porque sucedera esto
// let arreglo2 = arreglo;
// arreglo2.push(5);

// Entonces se realizara de esta forma
// Y asi se evita que se modifique el primer array
let arreglo2 = [...arreglo,5];

const arreglo3 = arreglo2.map( function (numero) {
    return numero * 2
} );


console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);