// Palyginimo operatoriai

// == Palyginimas su konvertavimu

console.log(2 == 2); // true
console.log('2' == 2); //true
console.log(0 == false); //true

// Plyginimas be konvertavimo (strict comparison)
// Turime lyginti ne tik reiksmes, bet ir ju tipus

console.log(2 === 2); //true
console.log(2 === 1); //false
console.log(2 === '2'); //false
console.log('Edgaras' == 'Edgaras'); //true

// != Nelygu
// su vienu = konvertuoja tipus

console.log(2 != 2); // false
console.log(2 !== '2'); // false

// > Daugiau

console.log(2 > 1); // true
console.log(2 > 3); // false

// >= Daugiau arba lygu

console.log(2 > 1); //true
console.log(2);


// ternary operator

// salyga ? true : false

let age = 18;
let ageStatus = age >= 18 ? 'adult' : 'child';

console.log.(ageStatus); // adult