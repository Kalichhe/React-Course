// import heroes, { owners } from "../data/heroes";
import heroes from "../data/heroes";


// { owners }, esa forma de importar se debe a que cuando no tiene las llaves {}, es una exportacion por defecto, pero cuando tiene las llaves {}, es porque es una exportacion individual
// console.log(owners);

// Heroe by id
export const getHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};

// console.log(getHeroeById(2));

// Heroe by owner
export const getHeroeByOwner = (owner) => {
  return heroes.filter((heroe) => heroe.owner === owner);
};

// console.log(getHeroeByOwner("DC"));
