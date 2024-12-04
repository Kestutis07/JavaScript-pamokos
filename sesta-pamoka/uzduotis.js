// 12.Susikurkite tris skaicius. Suraskite kuris is siu skaiciu yra didziausias.

let skaicius1 = 10;
let skaicius2 = 25;
let skaicius3 = 15;

// Kintamasis didžiausiam skaičiui
let didziausiasSkaicius = Math.max(skaicius1, skaicius2, skaicius3);

console.log(didziausiasSkaicius)

// 13

let skaicius1 = 10;
let skaicius2 = 25;
let skaicius3 = 15;

let maziausiasSkaicius = Math.min(skaicius1, skaicius2, skaicius3)

// 14

let egzaminas1 = 9;
let egzaminas2 = 7;
let egzaminas3 = 4;

let vidurkis = (egzaminas1 + egzaminas2 + egzaminas3) / 3;
let suapvalintasVidurkis = vidurkis.toFixed(1);

console.log('Vidurkis:', suapvalintasVidurkis);

if (suapvalintasVidurkis >= 8 && suapvalintasVidurkis <=10) {
  console.log('Vidurkis tarp 8 ir 10');
}



// 15

let sk1 = 20;
let sk2 =50;

// 15.1
if (sk1 > sk2 || sk1 === 0) {
  console.log('Pirmas skaicius yra didesnis uz antra arba lygus 0');
}

// 15.2

if (sk2 > sk1 || sk2 === 0) {
  console.log('Antras skaicius yra didesnis uz pirmaji arba lygus 0');
}

// 15.3

if (sk1 > sk2 && sk1 ===20) {
  console.log('Pirmas skaicius yra didesnis uz antraji ir yra lygus 20')
}

// 15.4

if ( sk2)

  