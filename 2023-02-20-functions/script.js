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