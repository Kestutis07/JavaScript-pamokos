// DOM - reprezentuoja HTML dokumenta kaip objektu medi.

// HTML selektoriai

// 1. Pagal elemento ID
const element = document.getElementById('unikalusID');

// 2. Pagal elemento klase
const elementsByClassName =
  document.getElementsByClassName('klasesPavadinimas');

// 3. Pagal visus tam tikro tipo elementus
// Pvz. p, h1, div, span, a, section.. ir t.t.
const eelementsByTagName = document.getElementsByTagName('p');

// 4.Pirmo elemento pasirinkimas
const firstElement = document.querySelector('.klasesPavadinimas');

// 5.Visu elementu pasirinkimas pagal selektoriu
const allElements = document.querySelectorAll('.klasesPavadinimas');

// PVZ:
// Vieno elemento radimas kito elemento viduje
const container = document.querySelector('.klasesPavadinimas');
container.querySelector('span');

// Modifikavimas

// 1. Elemento HTML turinio keitimas
element.innerHTML = '<p>Sveiki!</p>';

// 2. Elemento teksto keitimas
element.textContent = 'Sveiki!';

// 3. Elemento klases pridejimas
element.classList.add('naujaKlase');

// Pakeisti stiliu
element.style.color = 'red';
element.style.padding = '100px';
element.style.margin = '50px';

// Padaryk kazka kiekvienam elementui is masyvo;
// Sugalvojam pavadinima ir nurodom kaip argumenta
// Viduje funkcijos atliekam norimus veiksmus su butent tuo elementu
allElements.forEach
