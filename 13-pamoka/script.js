// 17. Susikurkite bet kokiy Zodziy masyva ir upildykite ji duomenimis. Isveskite
// visus todzius su indeksais j atskiras eilutes. Pvz: 0 - medis, 1 - tvora, ...

let zodziai = ['medis', 'tvora', 'kede', 'stalas'];

for (let indeksas in zodziai) {
  console.log(`${indeksas} - ${zodziai[indeksas]}`);
}

// 18. Susikurkite masyva pirkiniy sarasui saugoti ir uzpildykite ji duomenimis.
// Isveskite kiek pirkiniu yra siame sarase. Taip pat, isveskite kiekviena jrasa atskiroje eiluteje, pries kiekviena parasant bruksniuka ar koki kita skirtuka.

const pirkiniai = ['Pienas', 'Kefyras', 'Duona', 'Alus'];

console.log('Isviso pirkiniu yra', pirkiniai.length);

for (const pirkinys of pirkiniai) {
  console.log(`- ${pirkinys}`);
}

// 19. Susikurkite masyva studento pazymiams saugoti. Upildykite sj masyva.
// duomenimis. Raskite pazymiu vidurki. Isveskite visus siuos pazymius ir
// gauta vidurki.

const pazymiai = [10, 7, 8, 5];
let sum = 0;

for (let pazymys of pazymiai) {
  sum += pazymys;
}

vidurkis = sum / pazymiai.length;

console.log('Pazymiai:');

for (let index in pazymiai) {
  console.log(`${Number(index) + 1}: ${pazymiai[index]}`);
}

console.log('Vidurkis:', vidurkis);

//20. Susikurkite masyva keliones nuovaziuotiems kilometrams saugoti ir
// upildykite ji duomenimis (pvz 120, 145, 90 ir pan., kur kiekvienas skaicius reiskia kiek km kuria diena buvo nuvaziuota). Isveskite visus nuvaziuotus
// per diena kilometrus, kurie yra didesni nei 150.

const kilometrai = [100, 150, 50, 40, 200, 300];
const kilometraiVirs150 = [];

for (let km of kilometrai) {
  if (km > 150) {
    kilometraiVirs150.push(km);
  }
}

console.log(kilometraiVirs150);

// 21. Susikurkite masyva faily pavadinimams saugoti, upildykite ji duomenimis.
// Jums reikes nuskaityti siuos failus, todel pirma noresite patikrinti su kuriais galite dirbti. Isveskite j ekrana tik tuos failus, kuriy galune yra .txt arba json tipo

let failai = [
  'ataskaita.txt',
  'duomenys.json',
  'nuotrauka.png',
  'apskaita.csv',
];

for (let failas of failai) {
  if (failas.endsWith('.txt') || failas.endsWith('.json')) {
    console.log(failas);
  }
}

// 22. Susikurkite masyva automobiliy markems saugoti ir uzpildykite ji duomenimis. Isveskite kiekviena automobili atskiroje eilutéje, nurodant
// kiek raidziy sudaro jo pavadinima.

const automobiliuMarkes = ['bmw', 'audi', 'toyota', 'ford'];

for (let marke of automobiliuMarkes) {
  console.log(`${marke.toUpperCase()} - ${marke.length} raidės`);
}

// 23. Susikurkite masyva ivykusiu klaidy kodams saugoti ir upildykite si masyva
// duomenimis. Tuomet isveskite visas sukauptas klaidas administratoriui, taip, kad jis suprasty kas per klaidos jvyko. Pavyzdziui, jeigu yra kodas
// "ui87"
// ', tai kad isvesty "Grafines sasajos klaida navigacijoje"
// ', arba jeigu
// kodas "sys12",
// , tuomet "Truksta operatyviosios atminties sistemoje" ir pan.

const kodai = ['404', '401', '500', '501'];
const koduZinutes = [
  'Sasajos klaida',
  'Serverio klaida',
  'Nera duomenu',
  'Dingo internetas',
];

for (let indeksas in kodai) {
  console.log(`${kodai[indeksas]} - ${koduZinutes[indeksas]}`);
}

// 24. Susikurkite masyva sandelio likuciams saugoti (kiekvienas atskiras narys masyve
// yra atskiros prekès likutis). Su kiekvienu likuciu paskaiciuokite per kiek dienu bus
// ispirktas, jei per diena vidutiniskai yra nuperkami 5 vnt. Isveskite atsakymus
// atskirose eilutese, nurodant kiek yra dabar ir kiek dienu uzteks jo. Pavyzaziui, jeigu yra likuciai 74, 54 ir 32, tai 74 vnt. prekes uzteks mazdaug 15 dienu, 54 vnt. prekes uzteks mazdaug 11 dienu ir t.t.

let sandelioLikutis = [74, 54, 32, 90, 129];
let perDienaPerkama = 5;

for (let likutis of sandelioLikutis) {
  let dienuUzteks = Math.ceil(likutis / perDienaPerkama);
  console.log(`${likutis}vnt. prekes uzteks mazdaug ${dienuUzteks} `);
}

// 25. Susikurkite masyva studeno pazymiams saugoti. Uzpildykite si masyva atsitiktinai sugeneruotais pazymiais.Raskite vidurki. Raskite kiek neigiamu pazymiu studentas gavo (mazesniu nei5). Isvestite visus teigiamus pazymius, gauta vidurki ir neigiamu pazymiu kieki.

let pazymiu = Array.from(
  { length: 5 },
  () => Math.floor(Math.random() * 10) + 1
);

let suma = 0;
let neigiamuKiekis = 0;

console.log('Teigiami pazymiai:');

for (let pazymys of pazymiu) {
  suma += pazymys;
  if (pazymys < 5) {
    neigiamuKiekis++;
  }
}

let vidurkis = suma / pazymiu.length;

console.log('Vidurkis:', vidurkis.toFixed(0));
console.log('Neigiamu pazymiu kiekis:', neigiamuKiekis);

// 26. susikurkite du pazymiu masyvus, kur vienas masyvas reiks vieno studentopazymius, kitas masyvas kito studento pazymius. Raskite kiekvieno studento pazymiu vidurki. Isveskite abisju studentu pazymius, vidurkius ir nurodykite kuris studentas turi didesni vidurki.

let studentoPazymiai1 = [8, 7, 8, 9, 10];
let studentoPazymiai2 = [5, 7, 8, 9, 4];

// Pirmo studento vidurkis
let suma1 = 0;
for (let pazymys of studentoPazymiai1) {
  suma1 += pazymys;
}

let vidurkis1 = suma1 / studentoPazymiai1.length;

console.log('Pirmo studento vidurkis', vidurkis1);

// Antro studento vidurkis
let studentoPazymiai_2 = 0;
for (let pazymys of studentoPazymiai_2) {
  suma2 += pazymys;
}

let vidurkis2 = suma1 / studentoPazymiai_2.length;

console.log('Antro studento vidurkis', vidurkis2);

if (vidurkis1 > vidurkis2) {
  console.log('Pirmo studento vidurkis didesnis');
} else if (vidurkis2 > vidurkis1) {
  console.log('Antro studento vidurkis didesnis');
} else {
  console.log('Abieju studentu vidurkiai vienodi');
}

// 27. susikurkite masyva norimiems zodziams saugoti. Uzpildykite si masyva duomenimis. I kita masyva atrinkite tuos zodzius, kurie yra trumpi (sudaro maziau nei 5 raides). Isveskite pradinius duomenis ir atrinktus.

const zodziu = ['medis', 'namas', 'tortas', 'masina'];
const trumpiZodziai = [];

for (let zodis of zodziu) {
  if (zodis.length < 5) {
    trumpiZodziai.push(zodis);
  }
}

console.log(trumpiZodziai);
