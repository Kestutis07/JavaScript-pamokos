// Pratimai

let pirmas = 10;
let antras = 20;
let trecias = -16;

// 1. Ar pirmas ir antras skaiciai yra lygus?

if (pirmas === antras) {
  console.log('1. Pirmas ir antras skaiciai yra lygus');
} else {
  console.log('1. Pirmas ir antras skaiciai nera lygus');
}

// 2. Ar antras ir trecias skaiciai yra lygus?

if (antras === trecias) {
  console.log('2. Antras ir trecias skaiciai yra lygus');
} else {
  console.log('2. Antras ir trecias skaiciai nera lygus');
}

// 3. Ar pirmas skaicius yra didesnis uz antra?

let rezultatas =
  pirmas > antras
    ? '3. Pirmas skaicius yra didesnis uz antra'
    : '3. Pirmas skaicius nera didesnis uz antra';

console.log(rezultatas);

// 4. Ar antras skaicius yra didesnis uz dviguba treciojo skaiciaus reiksme (trecias skaicius padaugintas is 2)?

if (antras > trecias ** 2) {
  console.log('4. Antras skaicius yra didesnis uz trecio kvadrata');
} else {
  console.log('4. Antras skaicius nera didesnis uz trecio kvadrata');
}

// arba ternary
const atsakymas =
  antras > trecias ** 2
    ? '4.2 Antras skaicius yra didesnis uz trecio kvadrata'
    : '4.2 Antras skaicius nera didesnis uz trecio kvadrata';
console.log(atsakymas);

// 5. Ar pirmas skaicius yra lyginis (ar dalinasi is 2)?

if (pirmas % 2 === 0) {
  console.log('5. Pirmas skaicius yra lyginis');
} else {
  console.log('5. Pirmas skaicius yra nelyginis');
}

// 6. Ar antras skaicius yra nelyginis (ar nesidalina is 2)?

if (antras % 2 !== 0) {
  console.log('6. Antras skaicius yra nelyginis');
} else {
  console.log('6. Antras skaicius yra lyginis');
}

// 7. Ar trecias skaicius yra teisingas (didesnis uz 0)?

if (trecias > 0) {
  console.log('7. Trecias skaicius yra teigiamas');
} else {
  console.log('7. Trecias skaicius yra neigiamas');
}

// 8. Ar pirmas skaicius yra neigiamas (mazesnis uz 0)?

if (pirmas < 0) {
  console.log('8, pirrmas skaicius yra neigiamas');
} else {
  console.log('8. pirmas skaicius yra teigiamas');
}

// 9. Ar antras skaicius dalinasi is 4?

if (antras % 4 === 0) {
  console.log('9. Antras skaicius dalinasi is 4');
} else {
  console.log('9. Antras skaicius nesidalina is 4');
}

// 10. Ar trecias skaicius dalinasi is 8?

let antroSkaiciausModulis = 1.1;

if (antroSkaiciausModulis === 0) {
  console.log('10. Antras skaicius dalinasi is 8');
} else {
  console.log('10. Antras skaicius nesidalina is 8');
}
