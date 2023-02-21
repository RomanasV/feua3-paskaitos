// UŽDUOTIS:
// Į konsole išvesti apskaičiuotus keturkampio perimetrus pagal šias kraštines:
// 1. 10 ilgis ir 10 plotis.
// 2. 10 ilgis ir 25 plotis.
// 3. 10 ilgis ir 30 plotis.
// 4. 10 ilgis ir 35 plotis.
// 5. 10 ilgis ir 40 plotis.
// 6. 10 ilgis ir 45 plotis.
// 7. 10 ilgis ir 50 plotis.
// 8. 10 ilgis ir 55 plotis.
// 9. 10 ilgis ir 60 plotis.
// 10. 10 ilgis ir 120 plotis.

// console.log('- Perimetras: ' + (10 + 10) * 2 + ' m.');
// console.log('- Perimetras: ' + (10 + 25) * 2 + ' m.');
// console.log('- Perimetras: ' + (10 + 30) * 2 + ' m.');
// console.log('- Perimetras: ' + (10 + 35) * 2 + ' m.');
// console.log('- Perimetras: ' + (10 + 40) * 2 + ' m.');
// console.log('- Perimetras: ' + (10 + 45) * 2 + ' m.');
// console.log('- Perimetras: ' + (10 + 50) * 2 + ' m.');
// console.log('- Perimetras: ' + (10 + 55) * 2 + ' m.');
// console.log('- Perimetras: ' + (10 + 60) * 2 + ' m.');
// console.log('- Perimetras: ' + (10 + 120) * 2 + ' m.');

// DRY - Don't Repeat Yourself

// FUNKCIJOS
// Funkcijos sukūrimas:
// 1. Iniciavimo žodelis (function)
// 2. Funkcijos pavadinimas
// 3. Paprasti skliaustai () - funkcijos argumentai
// 4. Riestiniai skliaustai {} - funkcijos apibrėžimas

function hello() {
  console.log('Sveikas');
}

// Funkcijos iškvietimas:
// 1. Funkcijos pavadinimas
// 2. Paprasti skliaustai
hello();

function helloWithName(personName, personSurname) {
  let text = 'Hello, ' + personName + ' ' + personSurname + '.';
  console.log(text);
}

helloWithName('John', 'Doe');
helloWithName('Steve', 'Doe');
helloWithName('Peter', 'Doe');

function perimeter(height, width, units) {
  let answer = (height + width) * 2;
  let output = `Perimeter: ${answer} ${units}`;
  console.log(output);
}

perimeter(10, 10, 'km.');
perimeter(10, 15, 'km.');
perimeter(10, 20, 'km.');
perimeter(10, 25, 'km.');
perimeter(10, 30, 'km.');
perimeter(10, 35, 'm.');
perimeter(10, 50, 'm.');
perimeter(10, 55, 'm.');
perimeter(10, 70, 'm.');
perimeter(10, 100, 'cm.');
perimeter(1654654, 465632, 'cm.');


// Užduotis 1:
// 1. Sukurti funkciją, kuri skaičiuotų stačiakampis plotą.
// 2. Funkcija turi priimti du argumentus (ilgį ir plotį).
// 3. Funkcija turi grąžinti tekstą: „Stačiakampio plotas yra 10 kv. vnt."
// 4. Į konsolę išvesti šios funkcijos rezultatą.

function rectArea(height, width, units) {
  // Pirmas būdas
  // let unitsText = 'vnt';
  // if (units !== '' && units !== undefined) {
  //   unitsText = units;
  // }

  // Antras būdas
  // let unitsText = units;
  // if (units === '' || units === undefined) {
  //   unitsText = 'vnt';
  // }

  // Trečias
  // let unitsText;
  // if (units === '' || units === undefined) {
  //   unitsText = 'vnt';
  // } else {
  //   unitsText = units;
  // }

  // Ketvirtas
  // let unitsText = 'vnt';
  // if (units) {
  //   unitsText = units;
  // }

  // Penktas būdas
  let unitsText = units ? units : 'vnt';

  let answer = height * width;
  let output = `Stačiakampio plotas yra ${answer} kv. ${unitsText}.`;
  console.log(output);
}

rectArea(10, 15, 'cm');
rectArea(10, 20, 'm');
rectArea(30, 40, '');
rectArea(30, 45);

// Užduotis 2:
// Atlikti tą patį kaip ir pirmoje užduotyje, tačiau apskaičiuoti stačiojo trikampio plotą.

function triangleArea(height = 0, width = 0, units = 'vnt') {
  // if (height && width) {
  //   let answer = height * width / 2;
  //   let output = `Stačiojo trikampio plotas yra ${answer} kv. ${units}.`;
  //   console.log(output);
  // } else {
  //   console.log('Neteisingai nurodyti duomenys');
  // }

  let answer = height * width / 2;
  let output = `Stačiojo trikampio plotas yra ${answer} kv. ${units}.`;
  console.log(output);
}

triangleArea(10, 15, 'cm');
triangleArea(10, 20, 'm');
// triangleArea(30, 40, '');
triangleArea(30, 45);
triangleArea(30);
triangleArea();

// Užduotis 3:
// Sukurti naują funkciją, kuri apjungtų šias dvi užduotis ir išvestų abu rezultatus.
function allAreas(figureHeight = 0, figureWidth = 0, units = 'vnt') {
  console.log('-----');
  rectArea(figureHeight, figureWidth, units);
  triangleArea(figureHeight, figureWidth, units);
}

allAreas(10, 15, 'cm');
allAreas(10, 20, 'm');
allAreas(30, 40, '');
allAreas(30, 45);



function streetLight(originalLight) {
  let light = originalLight.toLowerCase();

  if (light === 'green') {
    console.log('Galima eiti!');
  } else if (light === 'yellow') {
    console.log('Pasiruošk');
  } else if (light === 'red') {
    console.log('STOP');
  } else {
    console.log('Sugedo');
  } 
}

streetLight('green');


streetLight('Red');
streetLight('YELLOW');
streetLight('blue');


function checkAge(age) {
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
}

checkAge(15);
checkAge(25);
checkAge(17);
checkAge(150);
checkAge(-50);


function checkPassword(originalPassword) {
  let password = originalPassword.trimStart().trimEnd().replaceAll(' ', '');
  
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
}

checkPassword('a#sdasdjhaksljdhaksdh');
checkPassword('a#sdasd');
checkPassword('aaskdjalksjdlsdasd');

function ageStatus(age) {
  if (age < 0) {
    console.log('Amžius yra per mažas');
  } else if (age < 6) {
    console.log('Į mokyklą neina');
  } else if (age < 7) {
    console.log('Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.');
  } else if (age < 10) {
    console.log('Pradinukas');
  } else if (age < 11) {
    console.log('Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.');
  } else if (age < 14) {
    console.log('Pagrindinė');
  } else if (age < 15) {
    console.log('Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.');
  } else if (age < 18) {
    console.log('Gimnazija');
  } else if (age < 19) {
    console.log('Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.');
  } else if (age < 120) {
    console.log('Mokyklą baigė');
  } else {
    console.log('Amžius yra per didelis');
  }
}

ageStatus(15);
ageStatus(6);
ageStatus(-50);
ageStatus(20);
ageStatus(200);

function greeting(time, isLoggedIn, personName, isBirthday) {
  let timeOutput = '';
  let nameOutput = '';
  let birthdayOutput = '';
  
  if (time > 4 && time <= 12) {
    timeOutput = 'Good Morning';
  } else if (time > 12 && time <= 18) {
    timeOutput = 'Good Afternoon';
  } else if (time > 18 && time < 24 || time >= 0 && time <= 4) {
    timeOutput = 'Good Evening';
  } else {
    timeOutput = 'Hello';
  }
  
  if (isLoggedIn && personName) {
    nameOutput = ', ' + personName;
  }
  
  if (isLoggedIn && isBirthday) {
    birthdayOutput = ' and have a great birthday!';
  }
  
  let output = timeOutput + nameOutput + birthdayOutput;
  
  console.log(output);
}

greeting(10, true, 'John', false);
greeting(3, true, 'John', true);
greeting(18, false, 'John', true);


// function gameLevel1(playerAnswer11, playerAnswer12) {
//   // Kiek bus 123 + 456 = 579
//   let correctAnswer11 = 579;
//   // Kaip vadinasi arčiausiai Žemės esanti Žvaigždė? sun
//   let correctAnswer12 = 'sun';

//   if (correctAnswer11 === playerAnswer11 && correctAnswer12 === playerAnswer12) {
//     console.log('Patekai: abu teisingi.');
//   } else if (correctAnswer11 === playerAnswer11) {
//     console.log('Patekai: antras neteisingas.')
//   } else if (correctAnswer12 === playerAnswer12) {
//     console.log('Patekai: pirmas neteisingas');
//   } else {
//     console.log('Nepatekai: abu neteisingi.')
//   }
// }

// gameLevel1(155, 'moon');
// gameLevel1(579, 'sun');
// gameLevel1(579, 'moon');



function gameLevel1() {
  let correctAnswer11 = 579;
  let correctAnswer12 = 'sun';

  let playerAnswer11 = prompt('1 lygis, 1 klausimas: kiek bus 123 + 456?');
  let playerAnswer12 = prompt('1 lygis, 2 klausimas: kaip vadinasi arčiausiai Žemės esanti Žvaigždė?');

  if (correctAnswer11 == playerAnswer11 && correctAnswer12 == playerAnswer12) {
    alert('Patekai: abu teisingi.');
    gameLevel2();
  } else if (correctAnswer11 == playerAnswer11) {
    alert('Patekai: antras neteisingas.');
    gameLevel2();
  } else if (correctAnswer12 == playerAnswer12) {
    alert('Patekai: pirmas neteisingas');
    gameLevel2();
  } else {
    alert('Nepatekai: abu neteisingi.');
  }
}

gameLevel1();

function gameLevel2() {  
  let correctAnswer21 = 1;
  let correctAnswer22 = 1;

  let playerAnswer21 = prompt('2 lygis, 1 klausimas: .....');
  let playerAnswer22 = prompt('2 lygis, 2 klausimas: .....');

  if (correctAnswer21 == playerAnswer21 && correctAnswer22 == playerAnswer22) {
    alert('Patekai: abu teisingi.');
  } else if (correctAnswer21 == playerAnswer21) {
    alert('Nepatekai: pirmas teisingas.');
  } else if (correctAnswer22 == playerAnswer22) {
    alert('Nepatekai: antras teisingas');
  } else {
    alert('Nepatekai: abu neteisingi.');
  }
}

