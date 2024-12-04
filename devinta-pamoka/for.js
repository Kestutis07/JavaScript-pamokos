// 1
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// 2
for (let i = 0; i <= 15; i += 2) {
  console.log(i);
}

// 3
for (let i = 1; i <= 20; i += 3) {
  console.log(`[${i}]`);
}

// 4
for (let = 1; i <= 20; i++) {
  if (i % 4 === 0) {
    console.log();
  }
}

// 5
let pradzia = 3;
let pabaiga = 8;

if (pradzia < pabaiga) {
  for (let i = pradzia; i <= pabaiga; i++) {
    console.log(`${i} ${i * i}`);
  }
} else {
  console.log('Pradzia didesne arba lygi pabaigai, todel kodas nevykdomas');
}

// 6
let pradzia = 3;
let pabaiga = 8;

if (pradzia < pabaiga) {
  for (let i = pradzia; i <= pabaiga; i++) {
    if (i % 2 !== 0 || i % 8 === o) {
    }
  }
} else {
  console.log('Pradzia yra didesne arba lygi pabaigai');
}

// 7
let num1 = 5;
let num2 = 3;
let result = 0;

for (let i = 0; i < Math.abs(num2); i++) {
  result += num1;
}
console.log(result);
