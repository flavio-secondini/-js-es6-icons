const bici = [
  {
    nome: "bici1",
    peso: 25,
    colore: "rossa"
  },
  {
    nome: "bici2",
    peso: 2,
    colore: "rossa"
  },
  {
    nome: "bici3",
    peso: 5,
    colore: "rossa"
  },
  {
    nome: "bici4",
    peso: 17,
    colore: "rossa"
  },
  {
    nome: "bici5",
    peso: 1,
    colore: "rossa"
  },
]

let pesoMinore = bici[0]

bici.forEach((element, i) => {
  if (element.peso < pesoMinore.peso) {
    pesoMinore = element
  }
});

console.log(pesoMinore);
