// 6. Susikurkite masyva studiju programu pavadinimams saugoti. Upildykite si masyva duomenimis. liveskite kiekviena studiju programa atskiroje eiluteje.
const studijos = ['Matematika', 'Filosofija', 'Geografija', 'Fizika'];

for (let i = 0; i < studijos.length; i++) {
  console.log(studijos[i]);
}

// 7. Susikurkite masyva saliu pavadinimams saugoti ir ji upildykite duomenimis.
// Isveskite saliu pavadinimus atskirose eilutese, su prierasu "salis" ir tada nurodant sali is masyvo.
const salis = ['JAV', 'Anglija', 'Lietuva', 'Egiptas'];

for (let i = 0; i < salis.length; i++) {
  console.log('Salis', salis[i]);
}

// 8. Susikurkite masyva igyvendintu projektu pavadinimams saugoti. Upildykite
// si masyva duomenimis. Isveskite kiekviena projekta atskirose eilutése, pries
// kiekviena projekta parasant kelintas tai projektas yra (pradedant 1-u).
let projektas = ['Projektas1', 'Projektas2', 'Projektas3'];

for (let i = 0; i < projektas.length; i++) {
  console.log(i + 1 + '-asis projektas ' + projektas[i]);
}

// 9. Susikurkite skaiiu masyva ir upildykite duomenimis. Is masyvo isveskite
// tik tuos skaicius, kurie yra didesni nei 5.
let masyvas = ['2', '3', '5', '7', '10'];

masyvas.forEach((masyvas) => {
  if (masyvas > 5) {
    console.log(masyvas);
  }
});

// 10. Susikurkite skaiciu masyva ir upildykite ji atsitiktiniais skaiciais. Raskite
// visu skaiciu, kurie dalinasi is 4 suma.

n = 10
masyvas = [random.randint(1, 100) for _ in range(n)]

# Išvedame sukurtą masyvą
print("Sukurtas masyvas:", masyvas)

# Randame skaičius, kurie dalinasi iš 4, ir  ų sumą
suma = sum(skaicius for skaicius in masyvas if skaicius % 4 == 0)

# Išvedame rezultatą
print("Skaičių, kurie dalinasi iš 4,, sma:", suma)
