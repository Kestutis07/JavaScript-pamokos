// 3.const book1

const book1 = {
  title: 'Nuotykiai prie juros',
  author: 'Thomas Thomason',
  genre: 'adventure',
  price: 15.99,
  pages: 2500,
  chapters: ['Izanga', 'Pradzia', 'Paslaptis', 'Pabaiga'],
  year: 2010,
  available: false,
};

const book2 = {
  title: 'Nuotykiai prie dykumos',
  author: 'Thomas Thomasonas',
  genre: 'action',
  price: 35.99,
  pages: 1500,
  chapters: ['Izanga', 'Pradzia', 'Paslaptis', 'Pabaiga', 'The end'],
  year: 2020,
  available: true,
};

if (book1.pages < book2.pages) {
  console.log(
    `Plonesnė knyga "${book1.title}" ji turi ${book1.pages} puslapiu.`
  );
} else if (book1.pages > book2.pages) {
  console.log(
    `Plonesnė knyga "${book2.title}" ji turi ${book2.pages} puslapiu.`
  );
} else {
  console.log('Abi knygos turi vienoda puslapiu kieki');
}
if (book1.chapters.length > book2.chapters.length) {
  console.log(`Daugiau skyriu turi "${book1.title}".`);
} else if (book1.chapters.length < book2.chapters.length) {
  console.log(`Daugiau skyriu turi "${book2.title}".`);
} else {
  console.log('Abi knygos turi vienoda skyriu kieki');
}

const pigesneKnyga = book1.price < book2.price ? book1 : book2;
const brangesneKnyga = book1.price > book2.price ? book1 : book2;

const dvigubaKaina = pigesneKnyga.price * 2;

if (dvigubaKaina > brangesneKnyga.price) {
  console.log(`${brangesneKnyga.title}`);
} else {
  console.log(
    `Net padvigubinus kaina, visvien "${brangesneKnyga.title}" yra brangesne`
  );
}

//
let pigesneKnyga1;
let brangesneKnyga1;

if (book1.price < book2.price) {
  pigesneKnyga1 = book1;
  brangesneKnyga1 = book2;
} else {
  pigesneKnyga1 = book2;
  brangesneKnyga1 = book1;
}

// 4.Sukurkite tris objektus prekiy duomenims saugoti. Kiekviename objekte sudékite sias savybes su reiksmemis: pavadinimas, kaina, savikaina, kodas, turimas kiekis sandelyje, siuntimui dezes matmenys (x, y, z asys). Isveskite
// visy triju prekiy informacija. Isveskite visy prekiy kainas vienoje eiluteje (pirma preke kainuoja - ..., antra preké kainuoja - ..., ir t.t.). Raskite ir isveskite kuri preké yra brangiausia (jos pavadinima ir kaina arba visa rastos prekès informacija). Raskite ir isveskite atskirose eilutese kiekvienos
// prekes dezes türj. Raskite ir isveskite atskirose eilutése kiekvienos prekès
// pelninguma (kaina - savikaina) * kiekis sandelyje).

const preke1 = {
  pavadinimas: 'Prekė A',
  kaina: 50,
  savikaina: 30,
  kodas: '001',
  turimasKiekis: 100,
  siuntimoDydis: { x: 20, y: 15, z: 5 },
};

const preke2 = {
  pavadinimas: 'Prekė B',
  kaina: 70,
  savikaina: 50,
  kodas: '002',
  turimasKiekis: 80,
  siuntimoDydis: { x: 25, y: 20, z: 10 },
};

const preke3 = {
  pavadinimas: 'Prekė C',
  kaina: 40,
  savikaina: 20,
  kodas: '003',
  turimasKiekis: 150,
  siuntimoDydis: { x: 15, y: 10, z: 5 },
};

// Visų prekių informacija
const prekes = [preke1, preke2, preke3];
prekes.forEach((preke) => {
  console.log(
    `Pavadinimas: ${preke.pavadinimas}, Kaina: ${preke.kaina}, Savikaina: ${preke.savikaina}, Kodas: ${preke.kodas}, Kiekis: ${preke.turimasKiekis}, Matmenys: (${preke.siuntimoDydis.x}, ${preke.siuntimoDydis.y}, ${preke.siuntimoDydis.z})`
  );
});

// Kainų suvestinė
const kainos = prekes.map(
  (preke, index) => `Pirma prekė kainuoja - ${preke.kaina}`
);
console.log(kainos.join(', '));

// Brangiausia prekė
const brangiausiaPreke = prekes.reduce(
  (max, preke) => (preke.kaina > max.kaina ? preke : max),
  prekes[0]
);
console.log(
  `Brangiausia prekė: ${brangiausiaPreke.pavadinimas}, Kaina: ${brangiausiaPreke.kaina}`
);

// Dėžės tūris
prekes.forEach((preke) => {
  const tinklinisTūris =
    preke.siuntimoDydis.x * preke.siuntimoDydis.y * preke.siuntimoDydis.z;
  console.log(
    `Prekės ${preke.pavadinimas} dežės tūris: ${tinklinisTūris} kubinių vienetų`
  );
});

// Pelningumas
prekes.forEach((preke) => {
  const pelningumas = (preke.kaina - preke.savikaina) * preke.turimasKiekis;
  console.log(`Prekės ${preke.pavadinimas} pelningumas: ${pelningumas}`);
});

// 5.Sukurkite objekta automobilio duomenims saugoti. I si objekta savybes su reiksmemis sukelkite, po to kai sukursite tuscia objekta (10-as pavyzdys).
// Sudekite sias savybes su reiksmemis: marké, modelis, rida, gamybos metai, spalva, darbinis turis, ar dauzta, ar parduodama. Isveskite visa automobilio informacija. Paskaiciuokite ir isveskite kiek automobiliui yra metu (rankomis jrasykite dabartinius metus arba panaudokite new
//     Date (Date. now () ) .getFullYear () funkcija). Paskaiciuokite ir isveskite kiek
//     vidutiniskai per metus yra nuvaziaves automobilis (jeigu viso nuvaziavo 300 kilometry, o automobiliui yra 2 metai, tai per metus vidutiniskai gaunasi 150 km.).

// Sukuriame tuščią automobilio objektą
const automobilis = {};

// Priskiriame savybes su reikšmėmis
automobilis.marke = 'Toyota';
automobilis.modelis = 'Corolla';
automobilis.rida = 60000; // km
automobilis.gamybosMetai = 2022;
automobilis.spalva = 'Mėlyna';
automobilis.darbinisTuris = 1.8; // L
automobilis.dauzta = false;
automobilis.parduodama = true;

// Išvedame visą automobilio informaciją
console.log('Automobilio informacija:');
console.log(`Markė: ${automobilis.marke}`);
console.log(`Modelis: ${automobilis.modelis}`);
console.log(`Rida: ${automobilis.rida} km`);
console.log(`Gamybos metai: ${automobilis.gamybosMetai}`);
console.log(`Spalva: ${automobilis.spalva}`);
console.log(`Darbinis tūris: ${automobilis.darbinisTuris} L`);
console.log(`Dauzta: ${automobilis.dauzta}`);
console.log(`Parduodama: ${automobilis.parduodama}`);

// Apskaičiuojame automobilio amžių
const dabartiniaiMetai = new Date().getFullYear();
const amzius = dabartiniaiMetai - automobilis.gamybosMetai;
console.log(`Automobiliui yra ${amzius} metų.`);

// Apskaičiuojame vidutinį nuvažiavimą per metus
const nuvaziavimas = automobilis.rida; // Visas nuvažiavimas
const vidutiniskaiPerMetus = nuvaziavimas / amzius; // Vidutinis nuvažiavimas per metus
console.log(
  `Vidutiniškai automobilis nuvažiavo ${vidutiniskaiPerMetus.toFixed(
    2
  )} km per metus.`
);

// Dest PVZ

const automobilis = {};

automobilis.marke = 'Toyota';
automobilis.modelis = 'Prius';
automobilis.rida = 145795;
automobilis.spalva = 'Raudona';
automobilis.darbinisTuris = 1.9;
automobilis.gamybosMetai = 2015;
automobilis.arDauztas = false;
automobilis.arParduodamas = true;

const dabartiniaiMetai2 = new Date(Date.now()).getFullYear();
const autoAmzius = dabartiniaiMetai - automobilis.gamybosMetai;
console.log(`Autmobilio amžius: ${autoAmzius} metai`);

const vidutineRidaPerMetus = automobilis.rida / autoAmzius;

console.log(vidutineRidaPerMetus.toFixed(2));

// 6. Susikurkite objekta informacijai apie knygyna saugoti. I sj objekta sudekite tokias savybes su reiksmemis: pavadinimas, adresas, plotas (kv. m.), kiek turi knygu, darbo valandos, ar atidarytas. Isveskite sio knygyno objekto
// raktus su reiksmémis. Tuomet isveskite visas knygyno savybes, kuriy
// reiksmes yra ne string tipo (plotas, kiek turi knygu ir pan.).

const knygaSaugoti = {};

knyga.pavadinimas = 'Apie mus';
knyga.adresas = 'Vilnius';
knyga.PLOTAS;

// 7. Susikurkite objekta informacijai apie knygyna saugoti. I si objekta sudekite tokias savybes su reiksmémis: pavadinimas, adresas, plotas (kv. m.), kiek turi knygu, darbo valandos, ar atidarytas. Isveskite sio knygyno objekto
// raktus su reiksmemis. Tuomet isveskite visas knygyno savybes, kuriu
// reiksmés yra ne string tipo (plotas, kiek turi knygu ir pan.).

const knygynas = {
  pavadinimas: 'Knygelis',
  adresas: 'Vilnius',
  plotas: 300,
  knyguKiekis: 5000,
  darboValandos: '9:00 - 21:00',
  arAtidarytas: true,
};

for (const raktas in knygynas) {
  if (typeof knygynas[raktas] !== 'string') {
    console.log(`${raktas}: ${knygynas[raktas]}`);
  }
}

// 8. Susikurkite du objektus, dviejy studenty informacijai saugoti. Abiejuose objektuose sudekite sias savybes su reiksmemis: vardas ir pavarde, studiju programos pavadinimas, pazymiai. Raskite abiejy studenty pazymiu vidurkius. Isveskite abiejy studenty informacija, bei pazymiy vidurkius.
// Raskite ir isveskite, kurio studento pazymiy vidurkis yra didesnis ir isveskite jo varda su pavarde.

let studentas1 = {
  vardas: 'Jonas',
  pavarde: 'Jonaitis',
  studijuProgramosPavadinimas: 'Informatika',
  pazymiai: [5, 4, 8, 7, 9],
};
let studentas2 = {
  vardas: 'Petras',
  pavarde: 'Petraitis',
  studijuProgramosPavadinimas: 'Matematika',
  pazymiai: [8, 9, 7, 6, 5],
};

for (let key in studentas1) {
  console.log(`${key}: ${studentas1[key]}`);
}
for (let key in studentas1) {
  console.log(`${key}: ${studentas1[key]}`);
}
let suma1 = 0;
let suma2 = 0;
for (let i = 0; i < studentas1.pazymiai.length; i++) {
  suma1 += studentas1.pazymiai[i];
}
for (let i = 0; i < studentas2.pazymiai.length; i++) {
  suma2 += studentas2.pazymiai[i];
}
let vidurkis1 = suma1 / studentas1.pazymiai.length;
let vidurkis2 = suma2 / studentas2.pazymiai.length;
if (vidurkis1 > vidurkis2) {
  console.log(`${studentas1.vardas} ${studentas1.pavarde} ${vidurkis1}`);
} else if (vidurkis2 > vidurkis1) {
  console.log(`${studentas2.vardas} ${studentas2.pavarde} ${vidurkis2}`);
} else {
  console.log('Abu studentai turi vienodą vidurkį.');
}
