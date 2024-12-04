// for ... of loops
// - Grazina reiksmes is masyvo (ne indeksus)
// Sukurtas veikti su masyvais, objektais ir stringais

const string = 'string';

for (let raide of string) {
  console.log(raide);
}

const array = [1, 2, 3, 4, 5];

for (let number of array) {
  console.log(number);
}

// for...in loops
// - Grazina indeksus is masyvo (ne reiksmes);

const masyvas = ['a', 'b', 'c'];

for (let index in masyvas) {
  console.log(index);
}

// pvz

const pazymis = [10, 2, 6, 6, 1];

for (let pazymis of pazymiai) {
  if (p > 5) {
    console.log('Pazymis yra teigiamas', p);
  } else {
    console.log('Pazymis yra neigiamas', p);
  }
}

let komanda = [
  'Programuotojas',
  'Dizaineris',
  'Vadybininkas',
  'Senjoras',
  'Jauniklis',
  'Vidutinis',
];

// Grazina reiksme
for (const narys of komanda) {
  console.log(narys);
}

// Grazina indeksa
for (const narys in komanda) {
  console.log(narys);
}

let pirmas_studentas = [7, 5, 6, 8];
let antras_studentas = [8, 9, 10, 7];

for (const pazymys of pirmas_studentas) {
  console.log('Pirmo studento', pazymys);
}

for (const pazymys of antras_studentas) {
  console.log('Antro studento', pazymys);
}
