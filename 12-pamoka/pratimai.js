// 9
const skaiciuMasyvas = [1, 5, 6, 10, 13];
const skaiciaiDidesniUz5 = [];

for (let i = 0; i < skaiciuMasyvas.length; i++) {
  const skaicius = skaiciuMasyvas[i];

  if (skaicius >= 5) {
    skaiciaiDidesniUz5.push(skaicius);
  }
}

console.log(skaiciaiDidesniUz5);

// 10
const skaiciuMasyvas2 = [];
const limitas = 10;
let sumaIs4 = 0;

for (let i = 0; i < limitas; i++) {
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  skaiciuMasyvas2.push(randomNumber);
}

for (let i = 0; i < skaiciuMasyvas2.length; i++) {
  const skaicius = skaiciuMasyvas2[i];

  if (skaicius % 4 === 0) {
    console.log(skaicius);
    sumaIs4 += skaicius;
  }
}

console.log('Suma', sumaIs4);

// 11
const pazymiai = [];
let sumaPazymiu = 0;

for (let i = 0; i < 5; i++) {
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  pazymiai.push(randomNumber);
}

for (let i = 0; i < pazymiai.length; i++) {
  sumaPazymiu += pazymiai[i];
}

let vidurkis = sumaPazymiu / pazymiai.length;

console.log('Pazymiai', pazymiai);
console.log('Suma', sumaPazymiu);
console.log('Vidurkis', vidurkis);

// 12
const pazymiai2 = [];
let sumaPazymiu2 = 0;

for (let i = 0; i < 5; i++) {
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  pazymiai2.push(randomNumber);

  console.log('Pazymiai', pazymiai2);

  for (let i = 0; i < pazymiai.length; i++) {
    sumaPazymiu2 += pazymiai2[i];
  }

  let vidurkis = sumaPazymiu2 / pazymiai2.length;
  console.log('Vidurkis', vidurkis);

  for (let i = 0; i < pazymiai2.length; i++) {
    if (pazymiai2[i] > vidurkis) {
      console.log('Skaicius didesnis uz vidurki', pazymiai2[i]);
    }
  }
}
// 13
let skaiciai = [1, 2, 3, 4, 5, 10, 15];

for (let i = 0; i < skaiciai.length; ++i) {
  if (skaiciai [i])


// 14 Susikurkite studento pazymiu masyva ir upildykite ji duomenimis (atsitiktiniais arba kokius jrasysite). Isveskite kiekviena pazymi atskiroje
// eilutéje. Prie kiekvieno pazymio nurodykite ar tai teigiamas, ar neigiamas
// pazymys. Taip pat, jeigu neigiamas pazymys, tuomet dar nurodykite kiek balu truko iki teigiamo paymio. Teigiamas pazymys skaitosi 5 balai.

let pazymiai = [10, 2, 8, 4, 5, 7];
let minimalusTeigiamas = 5;

for (let i = 0; i < pazymiai.length; i++) {
  let pazymis = pazymia [i];

  if (pazymis >= minimalusTeigiamas) {
    console.log(pazymis + ' - Teigiamas pazymis');
  } else {
    let truksta = minimalusTeigiamas - pazymis;
    console.log(pazymis + ' - Neigiamas pazymis' + ' Truksta ' + truksta);
  }
}

// 15
const zodziai = ['medis', 'automobilis', 'alus', 'gira'];
let bndrasRaidziuKiekis = 0;

for (let i = 0; i < zodziai.length; i++) {
  let raidziuKiekis = zodziai [i].length;
  bendrasRaidziuKiekis += raidziuKiekis;
  console.log(`'${zodziai[i]}' raidziu kiekis: ${raidziuKiekis}`);
}

console.log('Bendras raidziu kiekis: ' + bendrasRaidziuKiekis);

// 16
