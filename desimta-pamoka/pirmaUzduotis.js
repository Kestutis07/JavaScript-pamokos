// 1. Isveskite visus skaidius nuo 1 iki 20.
let i = 1;

while (i <= 20) {
  console.log(i);
  i++;
}

// 2. Isveskite visus skaidius nuo 1 iki 50. Prie kiekvieno lyginio skaiciaus
// parasykite Zodi „lyginis", o prie kiekvieno nelyginio - „nelyginis".
let j = 1;

while (j <= 50) {
  if (j % 2 === 0) {
    console.log('Lyginis skaicius:' + j);
  } else {
    console.log('Nelyginis skaicius' + j);
  }
  j++;
}

// 3. Isveskite visus skaicius nuo 25 iki 50. Vietoj skaiciu, kurie dalinasi is 3 isveskite teksta „skaicius {skaidius) dalinasi is 3".
let k = 25;

while (k <= 50) {
  if (k % 3 === 0) {
    console.log(`skaicius ${k} dalinasi is 3`);
  } else {
    console.log(k);
  }

  k++;
}

// 4. Isvedinekite visus skaidius nuo 1 iki tol kol pasitaikys skaicius, kuris dalinasi is 3 ir is 5.
let m = 1;

while (true) {
  console.log(m);
  if (m % 3 === 0 && m % 5 === 0) {
    break;
  }

  m++;
}

// 5. Is skaiiy nuo 1 iki 100, raskite visy lyginiy skaiiy suma.
let n = 1;
let suma = 0;

while (n <= 100) {
  if (n % 2 === 0) {
    suma += n;
  }

  n++;
}
console.log('suma:', suma);

// 6. Zemiau parodyta pavyzdi pakeiskite taip, kad toje pacioje eiluteje isvesty
// ne tik skaiciu, bet ir jo kvadrata:
let skaicius = 1;

while (skaicius < 5) {
  console.log('skaicius:' + skaicius * skaicius);

  skaicius++;
}

// 7. Sugeneruokime atsitiktinį kiekį (nuo 1 iki 20) atsitiktinių skaičių
let kiekis = Math.floor(Math.random() * 20) + 1;

while (kiekis > 0) {
  let skaicius = Math.floor(Math.random() * 100);
  console.log(skaicius);
  kiekis--;
}

// 8
let kiekis8 = Math.floor(Math.random() * 10) + 1;
let suma8 = 8;

while (kiekis8 > 0) {
  let atsitiktinis = Math.floor(Math.random() * 100);
  suma8 += atsitiktinis;
  kiekis8--;
}

console.log('suma:', suma8);
