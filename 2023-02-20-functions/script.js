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