// 8. Raskite visu skaiciu nuo 1 iki 100 suma.

let suma = 0;
for (let i = 1; i <= 100; i++) {
  suma += i;
}

console.log('Visu skaiciu nuo 1 iki 100 suma yra:' + suma);

// 9. Raskite visu lyginiu skaiciu nuo 20 iki 50 suma.
let sum = 0;
for (let i = 20; i <= 50; i++) {
  if (i % 2 === 0) {
    suma += i;
  }
}
console.log(suma);

// 10. Raskite visy nelyginiy skaiiy nuo 30 iki 60 suma.
let suma = 0;
for (let i = 30; i <= 60; i++) {
  if (i % 2 !== 0) {
    suma += i;
  }
}
console.log(suma);

// 11. Rasti visu skaiciu, Zemesniu uz 1000 ir kurie dalinasi is 3 arba 5, suma.
let num = 0;
for (let i = 1; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    num += i;
  }
}
console.log(suma);

// 12.
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

// 13
let num1 = 1;
let num2 = 1;

let sum = 0;

for (let i = 2; i <= 10; i++) {
  sum = num1 + num2;
  num1 = num2;
  num2 = sum;

  console.log(sum);
}
