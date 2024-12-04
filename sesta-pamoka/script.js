// Loginiai operatoriai &&, ||, !

// && - ir
// false && false = false
// false && true = false
// true && false = false
// true && true = true

const a = 4;
const b = 6;
// Turi butinai atitikti abi salygas
if (a > 0 && b > 0) {
  console.log('a ir b yra teigiami skaiciai');
} else {
  console.log('a arba b nera teigiamas skaicius');
}

// PVZ

let skaicius = 101;

if (skaicius > 0 && skaicius <= 100) {
  console.log('skaicius patenka tarp reziu nuo 0 iki 100');
} else if (skaicius > 0 && skaicius <= 1000) {
  console.log('Skaicius patenka tarp 100 ir 1000');
}

// || - arba
// fale || false = false;
// false || true = true;
// true || false = true;
// true || true = true;
const c = 1;
const d = false;

if (c >= 1 || d === true) {
  console.log('salyga yra teisinga');
} else {
  console.log('salyga yra neteisinga');
}

// PVZ

let skaicius = 100;

if (skaicius === 100 || skaicius === 90 || skaicius === 80 || skaicius === 70) {
  console.log('Salyga atitinka!');
} else {
  console.log('Salyga neatitinka');
}

// ! - ne
// !true = false;
// !false = true;

const isLoggedIn = false;

if (!isLoggedIn) {
  console.log('Tu esi neprisijunges!');
} else {
  console.log('Tu esi prisijunges!');
}

// PVZ

const arTuriBilieta = false;
const yraVipNarys = true;

if (arTuriBilieta) {
  console.log('Uzeikite i koncerta!');
} else if (!arTuriBilieta && yraVipNarys) {
  console.log('Tu neturi bilieto, bet esi VIP narys tai uzeik i koncerta!');
} else if (!arTuriBilieta && !yraVipNarys) {
  console.log('Tu neturi nei bilieto nei esi vip narys.');
}
