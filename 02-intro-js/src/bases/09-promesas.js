import { getHeroeById } from "./bases/08-impo-exp";

// // Promesa
// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // Aqui lo que se hace es llamar el resolve o el reject, dependiendo de la respuesta y esto lo que hara es notificar que se hizo la promesa
//     // console.log('Se espero 2 segundos para mostrar');
//     const heroe = getHeroeById(1);
//     // console.log(heroe);
//     resolve(heroe);
//     // reject("No se puede encontrar el Heroe");
//   }, 2000);
// });

// // Aqui lo que se va a hacer es, usar los metodos disponibles de una promesa
// promesa
//   .then((heroe) => {
//     console.log(heroe);

//     // console.log("Desde el Then de la promesa");
//   })
//   .catch((err) => {
//     console.warn(err);
//   });

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Aqui lo que se hace es llamar el resolve o el reject, dependiendo de la respuesta y esto lo que hara es notificar que se hizo la promesa
      // console.log('Se espero 2 segundos para mostrar');
      const heroe = getHeroeById(id);
      // console.log(heroe);
      // resolve(heroe);
      // reject("No se puede encontrar el Heroe");

      if (heroe) {
        resolve(heroe);
      } else {
        reject("No se puede encontrar el Heroe");
      }
    }, 2000);
  });
};

getHeroeByIdAsync(1)
  .then((heroe) => console.log("Este es el Heroe ", heroe))
  .catch((err) => console.warn(err));
