// 1. Parasyti for, kuris isvesty kiekviena skaiiy pradedant nuo 0 ir baigiant 10.

for (let i = 0; i < 11; i++) {
  console.log(i);
}

// 2. Parasyti for, kuris isvesty kas antra skaiiy pradedant 0 ir baigiant 15.

for (let i = 0; i <= 15; i += 2) {
  console.log(i);
}

// 3. Parasyti for, kuris isvesty kas trecia skaiciu, pradedant 1 ir baigiant 20.
// Kiekviena skaiciu apskliausti lauztiniais skliaustais. Pvz.: [1][4][7]...

for (let i = 1; i <= 20; i += 3) {
  console.log('[' + i + ']');
}

// 4. Parasyti for, kuris eity pro kiekviena skaiiy nuo 1 iki 20.
// Jame apsirasyti if salyga, kuri patikrinty ar dabartinis skaicius dalinasi is 4, jei taip tai si skaiiy isvesti.

for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) {
    console.log(i);
  }
}
