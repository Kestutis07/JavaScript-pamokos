let skaicius = 1;
const masyvas_pirmas = [skaicius, skaicius, skaicius];

console.log(masyvas);

// PVZ
const masyvas = [90, 30, 20, 30, 50, 60];

for (let i = 0; i < masyvas.length; i++) {
  console.log(masyvas[i]);
}

// Pvz1

let miestai = ['Vilnius', 'Kaunas', 'Klaipeda', 'Siauliai'];

for (let i = 0; i < miestai.length; i++) {
  console.log('Miestas', miestai[i]);
}

// Pvz3
let miestai1 = ['Vilnius', 'Kaunas', 'Klaipeda', 'Siauliai'];

for (let i = 0; i < miestai1.length; i++) {
  console.log(i + 1 + '-asis miestas ' + miestai1[i]);
}

// 17 Pvz

let skaiciai = [9, 8, 6, 3, 5, 2];

let lyginiaiSkaiciuSuma = 0;
let nelyginiaiSkaiciu = 0;

for (let i = 0; i < skaiciai.length; i++) {
  if (skaiciai[i] % 2 === 0) {
    lyginiaiSkaiciuSuma += skaiciai[i];
  } else {
    nelyginiaiSkaiciu += skaiciai[i];
  }
}

console.log('Visi skaiciai', skaiciai);
console.log('Lyginiai skaiciai', lyginiaiSkaiciuSuma);
console.log('Nelyginiai skaiciai', nelyginiaiSkaiciuSuma);
