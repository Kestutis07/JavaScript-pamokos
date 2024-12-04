// Masyvai
// Masyvus galima įsivaizduoti kaip:
// ○ Masyvas yra specialaus tipo kintamasis, kuris gali saugoti daugiau nei vieną reikšmę.
// ○ Masyvas apjungia kelis skirtingus kintamuosius į vieną vietą.
// ○ Masyvas padeda sugrupuoti susijusius duomenis.

const vokiskiAutomobiliai = ['Audi', 'BMW', 'Mercedes'];

console.log(vokiskiAutomobiliai);

// Pvz.:2
const matematika = 10;
const lietuviu = 9;
const anglu = 8;

const pazymiai = [matematika, lietuviu, anglu];

console.log(pazymiai[1]);

// Pvz_3
let suma = 0;
let masyvas = [3, 1, 2];

suma = masyvas[0] + masyvas[1] + masyvas[2];

console.log(suma);

// Pvz.:4
let skaiciai = [1, 2, 3, 4, 5];

console.log(skaiciai.length);

// 5
let automobiliai = [];

// Push metodas

let naujasProduktas = 'grybai';
let pienoProduktai = ['pienas'];
let kitiProduktai = [];

if (naujasProduktas === 'kefyras') {
  pienoProduktai.push(naujasProduktas);
} else {
  kitiProduktai.push(naujasProduktas);
}

console.log(pienoProduktai);
console.log(kitiProduktai);

let skaiciai = ['pirmas', 'antras', 'trecias', 'ketvirtas'];

// Pirma nary
console.log(skaiciai[0]);
// Paskutinis
console.log(skaiciai[skaiciai.length - 1]);

let vardai = ['Tomas', 'Agne', 'Greta'];

console.log(vardai);

vardai[0] = 'Greta';
vardai[2] = 'Tomas';

console.log(vardai);
