const bmw = {
  modelis: '530',
  kuroTypas: 'Dyzelinas',
  variklioTuris: 3.0,
  spalva: 'melyna',
  arNaudotas: true,
  pravardes: ['Peleda', 'Ryklys', 'Penktukas'],
  sukurejas: {
    vardas: 'Bambalis',
    pavarde: 'Bambalinis',
  },
  rida: null,
};

const audi = {
  modelis: 'a4',
  kuroTypas: 'Dyzelinas',
  variklioTuris: 1.9,
  spalva: 'geltona',
  arNaudotas: true,
  pravardes: null,
  sukurejas: {
    vardas: 'Audrius',
    pavarde: 'Audinius',
  },
  rida: 150000,
};

const vokiskiAutomobiliai = [bmw, audi];

console.log(vokiskiAutomobiliai);

// Pvz
const zmogus = {
  asdasdad: 'Vardenis',
  pavarde: 'Pavardenis',
  amzius: 18,
  pazymiai: [5, 6, 8, 9],
};

for (const pazymys of zmogus.pazymiai) {
  console.log(pazymys);
}

//

const zmogus1 = {
  asdasdad: 'Vardenis',
  pavarde: 'Pavardenis',
  amzius: 18,
  pazymiai: [5, 6, 8, 9],
};

let suma = 0;

for (const pazymys of zmogus.pazymiai) {
  suma += pazymys;
}

console.log(suma);

// PVZ

let studentas = {
  vardas: 'Tomas',
  pavarde: 'Tomasas',
};

// Gauti kiekviena reiksme
for (const index in studentas) {
  console.log(studentas[index]);
}
