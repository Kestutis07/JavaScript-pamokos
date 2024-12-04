// Switch statement - palyginimo operatorius
// Leidzia palyginti kintamaji su daugybe skirtigu reiksmiu

const day = 2;

switch (day) {
  case 1:
    console.log('Pirmadienis');
    break;
  case 2:
    console.log('Antradienis');
    break;
  case 3:
    console.log('Treciadienis');
    break;
  case 4:
    console.log('Ketvirtadienis');
    break;
  case 5:
    console.log('Penktadienis');
    break;
  case 6:
    console.log('Sestadienis');
    break;
  default:
    console.log('Tokios dienos nera');
}

let skaicius1 = 5;
let skaicius2 = 10;
let veiksmas = '*';

switch (veiksmas) {
    case '+':
        console.log(skaicius1 + skaicius2);
        break;
        case '-':
            console.log(skaicius1 - skaicius2);
            break;
            case '*':
                console.log(skaicius1 * skaicius2);
                break;
                console.log(nezinomas veiksmas);
}