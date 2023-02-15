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

let personAge = 19;

// Pagal amžiu surašyti į kurią klasė eina mokinys:
// 1. Iki 6 metų į mokyklą neina.
// 2. 7-10 metų eina į pradinę klasę.
// 3. 11-14 metų eina į pagrindinę.
// 4. 15-18 metų eina į gimnaziją.
// 5. 19+ mokyklą baigė.

// 6.1. Jeigu amžius yra mažiau nei 0, tai parašyti jog įvestas amžius yra per mažas.
// 6.2. Jeigu amžius yra daugau nei 120, tai parašyti jog įvestas amžius yra per didelis.

// 7.1. Jeigu amžius yra 6 metai, tai parašyti: "Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas."
// 7.2. Jeigu amžius yra 10 metai, tai parašyti: "Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas."
// 7.3. Jeigu amžius yra 14 metai, tai parašyti: "Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas."
// 7.3. Jeigu amžius yra 18 metai, tai parašyti: "Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs."

if (personAge < 0) {
  console.log('Amžius yra per mažas');
} else if (personAge < 6) {
  console.log('Į mokyklą neina');
} else if (personAge < 7) {
  console.log('Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.');
} else if (personAge < 10) {
  console.log('Pradinukas');
} else if (personAge < 11) {
  console.log('Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.');
} else if (personAge < 14) {
  console.log('Pagrindinė');
} else if (personAge < 15) {
  console.log('Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.');
} else if (personAge < 18) {
  console.log('Gimnazija');
} else if (personAge < 19) {
  console.log('Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.');
} else if (personAge < 120) {
  console.log('Mokyklą baigė');
} else {
  console.log('Amžius yra per didelis');
}


// UŽDUOTIS: sukurti galvosūkį su keletu klausimu
// PIRMAS LYGIS:
// 1. Norint patekti į kitą lygį, reikia atsakyti bent į vieną klausimą iš dviejų:
// 2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris klausimas buvo neteisingas.

// 1. Patekai i kita lygi: abu atsakymai teisingi.
// 2. Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.
// 3. Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.
// 4. Nepatekai i kita lygi: abu atsakymai buvo neteisingi.

// Kiek bus 123 + 456 = 579
let correctAnswer11 = 579;
// Kaip vadinasi arčiausiai Žemės esanti Žvaigždė? sun
let correctAnswer12 = 'sun';

let playerAnswer11 = 579;
let playerAnswer12 = 'sun';

// if (correctAnswer11 === playerAnswer11 || correctAnswer12 === playerAnswer12) {
  
//   if (correctAnswer11 === playerAnswer11 && correctAnswer12 === playerAnswer12) {
//     console.log('Patekai: abu teisingi.');
//   } else if (correctAnswer11 === playerAnswer11) {
//     console.log('Patekai: antras neteisingas.')
//   } else {
//     console.log('Patekai: pirmas neteisingas');
//   }

// } else {
//   console.log('Nepatekai: abu neteisingi.')
// }

if (correctAnswer11 === playerAnswer11 && correctAnswer12 === playerAnswer12) {
  console.log('Patekai: abu teisingi.');
} else if (correctAnswer11 === playerAnswer11) {
  console.log('Patekai: antras neteisingas.')
} else if (correctAnswer12 === playerAnswer12) {
  console.log('Patekai: pirmas neteisingas');
} else {
  console.log('Nepatekai: abu neteisingi.')
}


let correctAnswer21 = 1;
let correctAnswer22 = 1;

let playerAnswer21 = 1;
let playerAnswer22 = 0;

if (correctAnswer21 === playerAnswer21 && correctAnswer22 === playerAnswer22) {
  console.log('Patekai: abu teisingi.');
} else if (correctAnswer21 === playerAnswer21) {
  console.log('Nepatekai: pirmas teisingas.')
} else if (correctAnswer22 === playerAnswer22) {
  console.log('Nepatekai: antras teisingas');
} else {
  console.log('Nepatekai: abu neteisingi.')
}

// let correctAnswer31 = 1;
// let correctAnswer32 = 1;
// let correctAnswer33 = 1;

// let playerAnswer31 = 1;
// let playerAnswer32 = 0;
// let playerAnswer33 = 1;

// let answer3 = '';

// if (correctAnswer31 === playerAnswer31 && correctAnswer32 === playerAnswer32 && correctAnswer33 === playerAnswer33) {
//   answer3 = 'Patekai: visi atakymai teisingi.';
// } else if (correctAnswer32 === playerAnswer32 && correctAnswer33 === playerAnswer33) {
//   answer3 = 'Patekai: bet pirmas neteisingas.';
// } else if (correctAnswer31 === playerAnswer31 && correctAnswer33 === playerAnswer33) {
//   answer3 = 'Patekai: bet antras neteisingas.';
// } else if (correctAnswer31 === playerAnswer31 && correctAnswer32 === playerAnswer32) {
//   answer3 = 'Patekai: bet trečias neteisingas.';
// } else if (correctAnswer31 === playerAnswer31) {
//   answer3 = 'Nepatekai: bet pirmas teisingas.';
// } else if (correctAnswer32 === playerAnswer32) {
//   answer3 = 'Nepatekai: bet antras teisingas.';
// } else if (correctAnswer33 === playerAnswer33) {
//   answer3 = 'Nepatekai: bet trečias teisingas.';
// } else {
//   answer3 = 'Nepatekai: visi neteisingi :(';
// }

// console.log(answer3);

let correctAnswer31 = 1;
let correctAnswer32 = 1;
let correctAnswer33 = 1;

let playerAnswer31 = 0;
let playerAnswer32 = 0;
let playerAnswer33 = 1;

let answer1 = correctAnswer31 === playerAnswer31;
let answer2 = correctAnswer32 === playerAnswer32;
let answer3 = correctAnswer33 === playerAnswer33;

console.log(answer1);

let output3 = '';

if (answer1 && answer2 && answer3) {
  output3 = 'Patekai: visi atakymai teisingi.';
} else if (answer2 && answer3) {
  output3 = 'Patekai: bet pirmas neteisingas.';
} else if (answer1 && answer3) {
  output3 = 'Patekai: bet antras neteisingas.';
} else if (answer1 && answer2) {
  output3 = 'Patekai: bet trečias neteisingas.';
} else if (answer1) {
  output3 = 'Nepatekai: bet pirmas teisingas.';
} else if (answer2) {
  output3 = 'Nepatekai: bet antras teisingas.';
} else if (answer3) {
  output3 = 'Nepatekai: bet trečias teisingas.';
} else {
  output3 = 'Nepatekai: visi neteisingi :(';
}

console.log(output3);


// Pasisveikinimas
// 1. Jeigu vartotojas prisijungęs (true/false), tai prie pasisveikinimo reikia prirašyti jo vardą, pvz. „Good Morning, Tom.".
// 2. Jeigu vartotojas nėra prisijungęs, tai išvesti tik tekstą „Good Morning...".
// 3. Priklausomai nuo paros laiko, pasisveikinimas turėtų būti skirtingas:
// 3.1. 5-12 val. „Good Morning"
// 3.2. 13-18 val. „Good Afternoon"
// 3.3. 19-4 val. „Good Evening"
// 4. Jeigu vartotojas yra ir prisijungęs, ir šiandien yra jo gimtadienis, tai prie pasisveikinimo dar turi būti parašytas ir pasveikinimas, pvz.: „Good Morning, Tom and have a great birthday!"

let isLoggedIn = false;
let personName = 'John';
let time = 4;
let isBirthday = false;




// APRAŠYMAS:
// Sukurti aprašymą apie asmenį pagal pateiktus kintamuosius ir punktus:
// 1. Jeigu asmuo yra vyras, tai naudoti žodžius he/his, jeigu moteris, tai naudoti žodžius she/her.
// 2. Jeigu nenurodyta asmens pavardė arba vardas, tai tekste turėtų būti naudojami tik nurodyti duomenys. Jeigu nenurodytas nei vardas, nei pavardė, tada tekste reikėtų naudoti žodį person.
// 3. Jeigu asmuo yra pilnametis, tai tekste turi būti įvardintas jo darbas (pJob kintamasis).
// 3.1. Jeigu pJob kintamasis neturi reikšmės, tai tekste reikėtų įvardinti jog asmuo yra bedarbis.
// 3.2. Jeigu asmuo yra nepilnametis, tai tekste panaudoti pJob kintamąjį nurodant kuo asmuo norėtų būti užaugęs.
// 3.3. Jeigu asmuo yra nepilnametis ir kintamasis pJob neturi reikšmės, tai tekste įvardinti jog asmuo dar neturi planų kuo bus užaugęs.

// Pavyzdiniai tekstai:
// „John Doe is 20 years old. He is a Designer."
// „John Doe is 10 years old. He is still in school and his dream is to become a Designer."

let pName = 'John';
let pSurname = 'Doe';
let pAge = 20;
let pJob = 'Developer';
let pGender = 'male';