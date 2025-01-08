const heroes = [
  {
    id: 1,
    name: "Batman",
    owner: "DC",
  },
  {
    id: 2,
    name: "Spiderman",
    owner: "Marvel",
  },
  {
    id: 3,
    name: "Superman",
    owner: "DC",
  },
  {
    id: 4,
    name: "Flash",
    owner: "DC",
  },
  {
    id: 5,
    name: "Wolverine",
    owner: "Marvel",
  },
];

// Esta es una exportacion por individual

export const owners = ["DC", "Marvel"];

// Esta es una exportacion por defecto
export default heroes;

// Tambien se puede hacer exportaciones de un grupo de export o como un objeto se puede exportar.

// export { heroes as default, owners }
