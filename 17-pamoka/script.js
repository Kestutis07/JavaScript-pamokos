function showOfficerInfo(
  vardas,
  pavarde,
  amzius,
  alga,
  etatas,
  specializacija
) {
  let suformatuotasSakinys = `
      Sveiki, mano vardas ir pavarde yra ${vardas} ${pavarde}, man yra ${amzius} metu, dirbu ${etatas} etatu as 
      uzdirbu ${alga} euru per menesi, mano specializacija: ${specializacija}
    `;

  return suformatuotasSakinys;
}

console.log(
  showOfficerInfo('Pavardenis', 'Edgaras', 30, 2000, 'pilnas', 'kriminalistas')
);

// Pvz
function showOfficerInfo() {
  const officer = {
    vardas: 'Edgaras',
    pavarde: 'Pavarde',
    amzius: 30,
    statusas: 'aktyvus',
  };

  return officer;
}

console.log(showOfficerInfo().vardas);
console.log(showOfficerInfo().pavarde);

// Pvz
function showOfficerInfo() {
  const officer = {
    vardas: 'Edgaras',
    pavarde: 'Pavarde',
    amzius: 30,
    statusas: 'aktyvus',
  };

  return [officer];
}

console.log(showOfficerInfo());

// 7. Sukurkite funkcija, kuri isvestu 10 atsitiktiniu skaiciu vienoje eiluteje,
// skaitius atskiriant tarpu. Sia funkcija iskvieskite 5 kartus.

function atsitiktinisSkaicius() {
  let numbers = [];
  for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100));
  }
  console.log(numbers.join(' '));
}

for (let j = 0; j < 5; j++) {
  atsitiktinisSkaicius();
}

// 8. Sukurkite funkcija, kuri isvestu atsitiktini skaidiu. Uz funkcijos ribu
// sukurkite cikla, kuri butu vykdomas 10 kartu. Iskvieskite sukurta funkcija cikle. Turetumète pamatyti 10 atsitiktiniu skaiciu.

function sugalvotiSkaiciai() {
  return Math.floor(Math.random() * 100);
}

for (let i = 0; i < 10; i++) {
  let randomNum = sugalvotiSkaiciai();
  console.log(randomNum);
}

// Pvz.

function generateRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  return randomNumber;
}

for (let i = 0; i < 10; i++) {
  console.log(generateRandomNumber());
}

// Pvz.

function turnOnWipers() {
  // ijungia valytuvus
}

function turnOnAc() {
  // Ijungtu kondicionieriu
}

function createWeatherAlert(temperature, isRaining) {
  if (temperature < 0) {
    return 'Ispejimas: lauke minusas, atsargiai vairuokite!';
  } else if (isRaining) {
    turnOnWipers();
    return 'Ispejimas: lauke lyja, slidus kelias!';
  } else if (temperature > 30) {
    turnOnAc();
    return 'Ispejimas: Lauke karsta! nepalikite augintiniu';
  } else {
    return '';
  }
}

// PVZ

function isShopOpen() {
  const currentHour = new Date().getHours();

  if (currentHour >= 9 && currentHour <= 20) {
    return 'Parduotuve yra atidaryta!';
  } else {
    return 'Parduotuve yra uzdaryta.';
  }
}

console.log(isShopOpen());

// Pvz.
function checkTicketPrice(age) {
  switch (age) {
    case 1:
      return 'kaina 1 euras';
      break;
    case 2:
      return 'kaina 2 eurai';
      break;
    default:
      return 'Pilna kaina: 10 euru';
  }
}

console.log(checkTicketPrice(3));

// FUNKCIJU PAVADINIMAi
// a. kai norime gauti duomenis

function getUserName() {
  return 'username123..';
}

function checkWeather() {
  return 'sunny';
}

function retrieveOrderDetails() {
  return 'order details...';
}

// b. Kai norime atlikti veiksma pvz nustatyti duomenis arba juos pakeisti

function setUserName(name) {
  console.log('setting username to:', temperature);
}

function changePassword(newPassword) {
  console.log('changing password to:', newPassword);
}

// c. Tikrinimas arba validacija

function isEmailValid(email) {
  return email.includes('@');
}

function hasPermissions(role) {
  return role === 'admin';
}

// PVZ
function hasPermissions(role) {
  return role === 'admin';
}

function deletePost(role, postName) {
  if (hasPermissions(role)) {
    console.log(`Postas su pavadinimu: "${postName}" buvo istrintas.`);
  } else {
    console.log(
      `Klaida. vartotojas su role "${role.toUpperCase()}" neturi teises istrinti irasu.`
    );
  }
}

deletePost('admin', 'Kaip investuoti pinigus?');

// 11. Sukurkite funkcija, kuri per argumentus gautu automobiliu duomenis (marke, modelis, gamybos metai, darbinis turis).
// Si funkcija turetu siuos duomenis isvesti kaip nors graziai formatuotai. lskvieskite sia funkcija du kartus, perduodant skirtingus duomenis jai.

const bmw = {
  id: 1,
  make: 'Toyota',
  model: 'Corolla',
  year: 2022,
  color: 'Silver',
  mileage: 20000,
  price: 25000,
  fuelType: 'Gasoline',
  transmission: 'Automatic',
  engine: '2.0L 4-cylinder',
  horsepower: 169,
  features: ['Bluetooth', 'Backup Camera', 'Keyless Entry'],
  owners: 1,
  image: 'https://fakeimg.pl/500x500/cccccc',
};

const bmw2 = {
  id: 1,
  model: 'Corolla',
  year: 2022,
  color: 'Silver',
  mileage: 20000,
  price: 25000,
  fuelType: 'Gasoline',
  transmission: 'Automatic',
  engine: '2.0L 4-cylinder',
  horsepower: 169,
  features: ['Bluetooth', 'Backup Camera', 'Keyless Entry'],
  owners: 1,
  image: 'https://fakeimg.pl/500x500/cccccc',
};

function showCarDetail(car) {
  console.log('Automobilio duomenys:');
  console.log('Markė:', car.make);
  console.log('Modelis:', car.model);
  console.log('Gamybos metai:', car.year);
  console.log('Variklio turis:', car.engine);
  console.log('Papildoma iranga:', car.features);
}

showCarDetail(bmw);

//   12

function sudek(a, b) {
  let suma = a + b;
  console.log(`${a} + ${b} = ${suma}`);
}
function atimk(a, b) {
  let skirtumas = a - b;
  console.log(`${a} - ${b} = ${skirtumas}`);
}
function daugink(a, b) {
  let sandauga = a * b;
  console.log(`${a} * ${b} = ${sandauga}`);
}
function dalink(a, b) {
  let dalmuo = a / b;
  console.log(`${a} / ${b} = ${dalmuo.toFixed(2)}`);
}
function sugeneruok2SkaiciusIrSkaiciuok() {
  let a = Math.floor(Math.random() * 100 + 1);
  let b = Math.floor(Math.random() * 100 + 1);
  sudek(a, b);
  atimk(a, b);
  daugink(a, b);
  dalink(a, b);
}

// Pvz..
function sudek(a, b) {
    let suma = a + b;
    console.log(`${a} + ${b} = ${suma}`);
  }
  
  function atimk(a, b) {
    let skirtumas = a - b;
    console.log(`${a} - ${b} = ${skirtumas}`);
  }
  
  function daugink(a, b) {
    let sandauga = a * b;
    console.log(`${a} * ${b} = ${sandauga}`);
  }
  
  function dalink(a, b) {
    let dalmuo = a / b;
    console.log(`${a} / ${b} = ${dalmuo.toFixed(2)}`);
  }
  
  function sugeneruokRandomSkaiciu() {
    return Math.floor(Math.random() * 100 + 1);
  }
  
  function atvaizduokSkaicius() {
    let a = sugeneruokRandomSkaiciu();
    let b = sugeneruokRandomSkaiciu();
  
    sudek(a, b);
    atimk(a, b);
    daugink(a, b);
    dalink(a, b);
  }
  
  atvaizduokSkaicius();

//   13. Susikurkite funkcija, kuri per argumentus priimtu Zodziu masyva. Funkcijoje isveskite visus Zodius is masyvo atskirose eilutese, nurodant Zodio ilgi
// (simboliu kieki). Uz funkcijos ribu susikurkite Zodziu masyva ir upildykite ji
// duomenimis. Iskvieskite sukurta funkcija perduodant turima masyva.

const zodziuMasyvas =['obuolys',]


PERSIRA^YTI iso pamokso




// 14

function spausdintiSkaicius(skaiciai) {
    for (let i = 0; i < skaiciai.length; i++) {
      let skaicius = skaiciai[i];
      let skaiciausKvadratas = skaicius * skaicius;
      let padalintasSkaicius = skaiciausKvadratas / 2;
      console.log(`Skaicius: ${skaicius}, Kvadratas: ${skaiciausKvadratas}, Padalinta: ${padalintasSkaicius}`);
    }
  }
  
  const masyvas = [2, 100];
  
  spausdintiSkaicius(masyvas);


//   15

function isveskStudentoInformacija(vardas, pavarde, pazymiai) {
    console.log(`Studentas: ${vardas} ${pavarde}`);
    console.log(`Studento pazymiai: ${pazymiai}`);
  
    let suma = 0;
    for (let i = 0; i < pazymiai.length; i++) {
      suma += pazymiai[i];
    }
  
    let vidurkis = suma / pazymiai.length;
  
    console.log(`Vidurkis: ${vidurkis}`);
  }
  
  isveskStudentoInformacija('Tomas', 'Tomaitis', [5, 6, 7, 9]);

//   16

function findBiggestNumber(numbers) {
    let biggestNumber = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > biggestNumber) {
        biggestNumber = numbers[i];
      }
    }
    console.log('Didziausias skaicius masyve yra:', biggestNumber);
  }
  
  function generateRandomNumbers(numbers, amount) {
    for (let i = 0; i < amount; i++) {
      let randomNumber = Math.floor(Math.random() * 100) + 1;
      numbers.push(randomNumber);
    }
  }
  
  let masyvas = [];
  let masyvas1 = [];
  let masyvas2 = [];
  
  generateRandomNumbers(masyvas, 10);
  generateRandomNumbers(masyvas1, 15);
  generateRandomNumbers(masyvas2, 3000);
  
  console.log(masyvas);
  console.log(masyvas1);
  console.log(masyvas2);