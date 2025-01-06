
// Desestructuracion
// Asignacion desestructurante

const person = {
  name: "Carlos",
  age: 21,
  alias: "Kalichhe",
};

// const {nombre, edad, clave} = persona;

// console.log(name);
// console.log(age);
// console.log(alias);

const userContext = ({ name, age, alias, charge = "user" }) => {
  //   console.log(`Welcome ${name}, ${name} is a ${charge}`);
  return {
    name2: name,
    age2: age,
    alias2: alias,
    latlng: {
        lat: 12.3213,
        lng: -7.1232
    }
  };
};

const { name2, age2, alias2, latlng } = userContext(person);

const { lat, lng } = latlng;

console.log(name2, age2, alias2, lat, lng);