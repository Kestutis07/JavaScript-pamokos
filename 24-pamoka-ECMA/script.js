// ES6 (ECMAscript 2015)

// 1.Atsirado kintanieji cost ir let jie pakeite senaji var

if (true) {
    let massage = 'Sveiki!';
    console.log(message);
}

console.log(massage);  

const PI = 3.14159;

PI = 3.14; 

// 2. Arrow funkcijos
// Arrow funkcijos yra trumpesnes ir patogesnes nei senosios funkcijos

// senoji funkcija
function add(a, b) {
    return a + b;
}

// Arrow funkcija, jei funkcija turi tik viena eilute. taigalima nerasyti {} ir return;
console.log(add(2, 3));

const multiply = (a, b) => a * b;

console.log(multiply(2, 3));

const greet = (name) => `Sveiki, ${name}`;

const button = document.getElementById('button');

// Tradicinis budas
button.addEventListener('click', function () {
    console.log('Paspaudei!');
})

// Arrow funkcijos budu
button.addEventListener('click', () => {
    console.log('Paspaudei!');
})

// 3.Destructing assignments
// Destructing assignements leidzia iskart issitraukti kintamuosius ir objekto arba masyvo

const user = {
    name: 'Tomas',
    age: 25,
};

// Senuoju budu
const oldName = user.name;
const oldAge = user.age;

// Naujoju budu
const { name, age } = user;

console.log(name);
console.log(age);

// Masyvo atveju;
const colors = ['red', 'green', 'blue'];
const [firstColor, secondColor, thirdColor] = colors;

console.log(fourthColor);

// 4.Spread operator
// ... operatorius leidzia isskaidyti masyvo arba objekto turini, ir leidzia pripildyti naujomis reiksmemis

const numers = [1, 2, 3];
const.newNumbers = [...numers, 4, 5, ...numers, ...numers];

// 5. Default parametrai
// Default parametrai leidzia nurodyti kintamojo reiksme, jei ji nebuvo suteikta;
