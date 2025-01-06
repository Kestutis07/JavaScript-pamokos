const color = ['red', 'blue', 'green', 'yellow', 'pink'];

const palette = document.getElementById('palette');
const addColorBtn = document.getElementById('add-color-btn');

// Sukuriu funkcija, kuri sukurs spalvos dezute
function createColorBox(color) {
  const box = document.createElement('div');
  box.classList.add('color-box');

  box.style.backgroundColor = color;

  box.addEventListener('click', function () {
    alert(color);
  });

  palette.append(box);
}

// Iskvieciama is karto, kadangi nesu nurodes sitos logikos atskiroje funkcijoje
color.forEach((color) => {
  createColorBox(color);
});

// Funkcija kuri sugeneruos random spalva
function generateRandomColor() {
  // Sukurk man tik is situ raidziu random spalva
  const latters = '0123456789ABCDEF';
  let color = '#';
  // Leidziu cikla 6 kartus, kad sugeneruotu HEX koda kuris sudaromas is 6 skaitmenu arba raidziu;
  for (let i = 0; i < 6; i++) {
    color += latters[Math.floor(Math.random() * 16)];
  }

  return color;
}

// Paleidziama tik tada kada bus paspaudziamas mygtukas
addColorBtn.addEventListener('click', function () {
  const randomColor = generateRandomColor();
  createColorBox(randomColor);
});

// Sukuriant papildomas dezutes perkeliame i funkcija. Todel uzkomentuoju
// color.forEach((color) => {
//   const box = document.createElement('div');
//   box.classList.add('color-box');

//   box.style.backgroundColor = color;

//   box.addEventListener('click', function () {
//     alert(color);
//   });

//   palette.append(box);
// });

// addColorBtn.addEventListener('click', function () {
//   alert(1);
// });
