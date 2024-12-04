// funkcijos
// Skirtos atlikti veiksmus

// Si funkcija grazina suma, padavus du skaicius
// return zodis grazina reiksme

// Funkcija pati savavališkai nevykdo jokio kodo, todėl norint, kad ji atliktų kokį nors
// darbą - reikės ją iškviesti.

// Jeigu funkcijai reikia kokių nors duomenų, jai tai galima perduoti kaip parametrus /
// argumentus.

function suskaiciuokSuma(a, b) {
  return a + b;
}

const suma = suskaiciuokSuma(1, 2);

console.log(suma);

// Pvz.

function pasisveikinimas(vardas) {
  if (typeof vardas !== 'string') console.log('Labas!', vardas);
}
pasisveikinimas(Jonai);

// pvz
let laikas = '18:00';

function pasisveikink() {
  console.log('Labas rytas');
}

function atsisveikink() {
  console.log('Viso gero!');
}

if (laikas === '18:00') {
  atsisveikink();
} else {
  pasisveikink();
}

// pvz
// funkcijos mato kintamuosius kurie yra isoreje
let skaicius = 10;

function isveskPadaugintaSkaiciu() {
  console.log(skaicius * 2);
}
isveskPadaugintaSkaiciu();

// Sukurkite funkcija, kuri isvesty jüsy varda ir kodel pasirinkote programavima. Iskvieskite sia funkcija tris kartus.
function isveskManoVarda(vardas, sakinys) {
  console.log(vardas, sakinys);
}

isveskManoVarda('Edgaras', 'nes patinka kompai');
isveskManoVarda('Tomas', 'nes patinka $$$');
isveskManoVarda('Tobis', 'Nes patinka logika');

//

function iskvieskEilerasti() {
  console.log('Du gaideliai,Du gaideliai');
}

for (let i = 0; i < 5; i++) {
  iskvieskEilerasti();
}

//
function iskvieskPirmaSakiny() {
  console.log('Pirmas sakinys');
}

function iskvieskAntraSakiny() {
  console.log('Antras sakinys');
}

function iskvieskTreciaSakiny(x) {
  console.log('Trecias sakinys', x);
}

iskvieskPirmaSakiny();
iskvieskAntraSakiny();
iskvieskTreciaSakiny('Edgaras');

// 4.
function pirmaEilute() {
  return 'Labas';
}

function antraEilute() {
  return 'Vakaras';
}

function sujungtosEilutes() {
  console.log(pirmaEilute() + ' ' + antraEilute());
}

sujungtosEilutes();

// 5.
function sugeneruokIrIsveskSuma() {
  const skaicius1 = Math.floor(Math.random() * 10) + 1;
  const skaicius2 = Math.floor(Math.random() * 10) + 1;

  let suma = skaicius1 + skaicius2;

  console.log(`${skaicius1} + ${skaicius2} = ${suma}`);
}

sugeneruokIrIsveskSuma();
sugeneruokIrIsveskSuma();
sugeneruokIrIsveskSuma();
