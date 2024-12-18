// Norime padaryti h1 centruota per viduri puslapio
// 1. Surandame h1 elementa;
// 2.Pakeiciame jo stiliu, kad jis butu centruotas

const heading = document.querySelector('h1');
heading.style.textAlign = 'center';

const colorBox = document.getElementById('color-box');
const redButton = document.getElementById('btn-red');
const greenButton = document.getElementById('btn-green');
const resetButton = document.getElementById('btn-reset');

redButton.addEventListener('click', function () {
  colorBox.style.backgroundColor = 'red';
});

greenButton.addEventListener('click', function () {
  colorBox.style.backgroundColor = 'gren';
});

resetButton.addEventListener('click', function () {
  colorBox.style.backgroundColor = 'blue';
  colorBox.style.borderRadius = '50%';
  co;
});
