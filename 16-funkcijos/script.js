let automobilis = {
  marke: 'Toyota',
  modelis: 'Prius',
  kaina: 20000,
  nuolaidaProcentais: 10,
  automobilioKainaSuNuolaida: function () {
    let galutineKaina = this.kaina * (1 - this.nuolaidaProcentais / 100);

    return galutineKaina;
  },
};

console.log(
  `Automobilis kainuos su ${
    automobilis.nuolaidaProcentais
  }% nuolaida: ${automobilis.automobilioKainaSuNuolaida()}$`
);

// PVZ
let kelione = {
  vieta: 'Paryzius',
  trukmeDienomis: 5,
  dienosBiudzetas: 100,
  apskaiciuotiVisaKelionesKaina: function () {
    let suma = this.trukmeDienomis * this.dienosBiudzetas;
    return suma;
  },
  parodykInformacija: function () {
    console.log(
      `Kelione i ${this.vieta}, truks ${
        this.trukmeDienomis
      } dienas, kainuos is viso: ${this.apskaiciuotiVisaKelionesKaina()}`
    );
  },
};

kelione.parodykInformacija();
