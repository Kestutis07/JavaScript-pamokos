// 4
let masyvas = [];

let n = 10;

for (let i = 0; i < 10; i++) {
  let atsitiktinisSkaicius = Math.floor(Math.random() * 100) + 1;

  tuscias.push(atsitiktinisSkaicius);
}

console.log('Random', tuscias);

// PVZ

let masyvas1 = [];
let i = 0;
while (i < 10) {
  const randomSkaicius = Math.floor(Math.random() * 100) + 1;
  masyvas1.push(randomSkaicius);
  i++;
}

console.log(masyvas);

// 5

let studentas1 = [8, 9, 10, 10];
let studentas2 = [8, 9, 10, 10];

let suma1 = studentas1[0] + studentas1[1] + studentas1[2] + studentas1[3];
let vidurkis1 = suma1 / studentas1.length;

let suma2 = studentas2[0] + studentas2[1] + studentas2[2] + studentas2[3];
let vidurkis2 = suma2 / studentas2.length;

if (vidurkis1 > vidurkis2) {
  console.log('Pirmas mokinys turi didesni vidurki');
} else if (vidurkis2 > vidurkis1) {
  console.log('Antras mokinys turi didesni vidurki');
} else {
  console.log('Abu vidurkiai lygus');
}
