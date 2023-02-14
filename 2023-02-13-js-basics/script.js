console.groupCollapsed('JavaScript Basics');

// Kintamojo sukūrimas:
// 1. Iniciavimo žodelis (var, let, const)
// 2. Kintamojo pavadinimas
// 3. Lygybės ženklas
// 4. Kintamojo vertė

var vardas = "Steve"; // String (tekstas) tipo kintamasis
let pavarde = 'Doe'; // String (tekstas) tipo kintamasis
let miestas = `Kaunas`; // String (tekstas) tipo kintamasis
const asmensKodas = 389879798797; // Number (skaičius) tipo kintamasis
let amzius = 28; // Number (skaičius) tipo kintamasis
let yraStudentas = true; // Boolean (true/false) tipo kintamasis

console.log(vardas);
console.log(pavarde);
console.log(asmensKodas);
console.log(miestas);
console.log(amzius);
amzius = 29;
console.log(amzius);

vardas = 'John';
console.log(vardas);

// typeof parodo kokio tai tipo duomenys
console.log(typeof vardas);
console.log(typeof asmensKodas);
console.log(typeof yraStudentas);

console.log('Hello, ' + vardas + ' ' + pavarde + '.');

// John Doe (amžius 25 m.), asmens kodas: 37878787878, gyvenamasis miestas: Kaunas.

console.log('John Doe (amžius 25 m.), asmens kodas: 37878787878, gyvenamasis miestas: Kaunas.');

console.log(vardas + ' ' + pavarde + ' (amžius ' + amzius + ' m.), asmens kodas: ' + asmensKodas + ', gyvenamasis miestas: ' + miestas + '.');

console.log(vardas + " " + pavarde + " (amžius " + amzius + " m.), asmens kodas: " + asmensKodas + ", gyvenamasis miestas: " + miestas + ".");

console.log(`${vardas} ${pavarde} (amžius ${amzius} m.), asmens kodas: ${asmensKodas}, gyvenamasis miestas: ${miestas}.`);

// John said: "Good morning".
console.log('John said: "Good morning".');
console.log(`John said: "Good morning".`);
console.log("John said: \"Good morning\".");

// That's my car.
console.log("That's my car.");
console.log(`That's my car.`);
console.log('That\'s my car.');

// John said: "That's my car".
console.log(`John said: "That's my car".`);
console.log('John said: "That\'s my car".');
console.log("John said: \"That's my car\".");

// John `said`: "That's my car".
console.log('John `said`: "That\'s my car".');
console.log("John `said`: \"That's my car\".");
console.log(`John \`said\`: "That's my car".`);

// John `said`: "That's \my\ car".
console.log('John `said`: "That\'s \\my\\ car".');
console.log("John `said`: \"That's \\my\\ car\".");
console.log(`John \`said\`: "That's \\my\\ car".`);

// John \`said\`: "That's my car".
console.log('John \\`said\\`: "That\'s my car".');
console.log("John \\`said\\`: \"That's my car\".");
console.log(`John \\\`said\\\`: "That's my car".`);

// Matematiniai operatoriai
let num1 = 22;
let num2 = 10;
let num3 = '10';

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

console.log(num1 + num3);
console.log(num1 - num3);
console.log(num1 * num3);
console.log(num1 / num3);
console.log(num1 % num3);

console.log(num1 + num2 * num2);
console.log((num1 + num2) * num2);

// SĄLYGOS

// Dviguba lygybė (loosely Equal ==): tikrina tik reikšmes. Ir nekreipia dėmesio į duomenų tipą. 
console.log(10 == 10); // true
console.log('vienas' == 'vienas'); // true
console.log('10' == '10'); // true
console.log(10 == '10'); // true

// Triguba lygybė (strictly equal ===): pirmiausiai tikrina duomenų tipą ir tik jeigu duomenų tipas sutampa, tada tikrina jų reikšmes.

console.log(10 === 10); // true
console.log('vienas' === 'vienas'); // true
console.log('10' === '10'); // true
console.log(10 === '10'); // false

console.log(10 > 10); // false
console.log(10 >= 10); // true
console.log(10 < 10); // false
console.log(10 <= 10); // true

console.log(10 != 10); // false
console.log(10 !== 10); // false

console.log(true); // true
console.log(!true); // false
console.log(!!true) // true

console.groupEnd();

// IF, ELSE IF, ELSE

let originalLight = 'YELLOW';
let light = originalLight.toLowerCase();

// OR (||) operator - AR operatorius

// if (light === 'green' || light === 'Green' || light === 'GREEN') {
//   console.log('Galima eiti!');
// } else if (light === 'yellow') {
//   console.log('Pasiruošk');
// } else if (light === 'red') {
//   console.log('STOP');
// } else {
//   console.log('Sugedo');
// } 

if (light === 'green') {
  console.log('Galima eiti!');
} else if (light === 'yellow') {
  console.log('Pasiruošk');
} else if (light === 'red') {
  console.log('STOP');
} else {
  console.log('Sugedo');
} 


let age = 17;

// if (age >= 18) {
//   console.log('Pirkti galima');
// } else {
//   console.log('Pirkti negalima');
// }

// if (age > 17) {
//   console.log('Pirkti galima');
// } else {
//   console.log('Pirkti negalima');
// }

// if (age < 18) {
//   console.log('Pirkti negalima');
// } else {
//   console.log('Pirkti galima');
// }

// if (age <= 17) {
//   console.log('Pirkti negalima');
// } else {
//   console.log('Pirkti galima');
// }

// if (age >= 18) {
//   console.log('Pirkti galima');
// } else if (age >= 16) {
//   console.log('Pirkti galima su tėvų sutikimu');
// } else {
//   console.log('Pirkti negalima');
// }

// if (age >= 18) {
//   console.log('Pirkti galima');
// } else if (age < 16) {
//   console.log('Pirkti negalima');
// } else {
//   console.log('Pirkti galima su tėvų sutikimu');
// }

// if (age > 120) {
//   console.log('Amžius per didelis');
// } else if (age >= 18) {
//   console.log('Pirkti galima');
// } else if (age >= 16) {
//   console.log('Pirkti galima su tėvų sutikimu');
// } else if (age < 0) {
//   console.log('Amžius yra per mažas');
// } else {
//   console.log('Pirkti negalima');
// }

// AND (&&) operator - IR operatorius

if (age < 0) {
  console.log('Amžius yra per mažas');
} else if (age >= 0 && age < 16) {
  console.log('Pirki negalima');
} else if (age >= 16 && age < 18) {
  console.log('Pirkti galima su tėvų sutikimu');
} else if (age >= 18 && age <= 120) {
  console.log('Pirkti galima');
} else {
  console.log('Amžius per didelis');
}

let originalPassword = 'aadasasdasdasd      dasdhaskjdh                ';
let password = originalPassword.trimStart().trimEnd().replaceAll(' ', '');

console.log(password);
console.log(password.length);
console.log(password.includes('#'));

// 1. Jeigu slaptažodis yra trumpesnis už 16 simbolių, tai parašyti jog „Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo."
// 2. Jeigu slaptažodis yra ilgesnis už 15 simbolių, tai:
// 2.1. Patikrinti ar jis yra ilgesnis už 20 simbolių. Jeigu ilgesnis, tai parašyti: „Slaptažodis tinkamas".
// 2.2. Jeigu jis nėra ilgesnis už 20 simbolių, tai parašyti jog: „Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo."
if (password.length < 16) {
  console.log('Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.');
} else {
  if (password.includes('#') === false) {
    console.log('Slaptažodyje privalo būti grotažymės (#)');
  } else if (password.length > 20) {
    console.log('Slaptažodis tinkamas');
  } else {
    console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.');
  }
}