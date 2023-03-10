let paragraph = document.querySelector('p');
paragraph.textContent = 'Labas';
paragraph.textContent = paragraph.textContent + ' vakaras';
paragraph.textContent += '.';

let div = document.querySelector('div');
div.innerHTML = '<p>Labas</p>';

function hello() {
  return 'Sveikas.';
}

paragraph.textContent += ' ' + hello();

div.innerHTML += '<p>' + hello() + '</p>';

let task1Element = document.querySelector('#task-1');
task1Element.textContent = hello();

function helloWithName(personName, personSurname) {
  let text = 'Hello, ' + personName + ' ' + personSurname + '.';
  return text;
}

paragraph.textContent += ' ' + helloWithName('John', 'Doe');

div.innerHTML += `<p>${helloWithName('John', 'Doe')}</p>`;

let task2Element = document.querySelector('#task-2');
task2Element.textContent = helloWithName('John', 'Doe');

function perimeter(height, width, units) {
  let answer = (height + width) * 2;
  let output = `Perimeter: ${answer} ${units}`;
  return output;
}

paragraph.textContent += ' ' + perimeter(40, 10, 'km.');

div.innerHTML += `<p>${perimeter(40, 10, 'km.')}</p>`;

// console.log(perimeter(10, 10, 'km.'));
let task3Element = document.querySelector('#task-3');
task3Element.textContent = perimeter(40, 10, 'km.');

function rectArea(height, width, units) {
  let unitsText = units ? units : 'vnt';

  let answer = height * width;
  let output = `Stačiakampio plotas yra ${answer} kv. ${unitsText}.`;
  return output;
}

// console.log(rectArea(10, 15, 'cm'));

paragraph.textContent += ' ' + rectArea(10, 15, 'cm');

div.innerHTML += `<p>${rectArea(10, 15, 'cm')}</p>`;

let task4Element = document.querySelector('#task-4');
task4Element.textContent = rectArea(10, 15, 'cm');

function triangleArea(height = 0, width = 0, units = 'vnt') {
  let answer = height * width / 2;
  let output = `Stačiojo trikampio plotas yra ${answer} kv. ${units}.`;
  return output;
}

// console.log(triangleArea(10, 15, 'cm'));

paragraph.textContent += ' ' + triangleArea(10, 15, 'cm');

div.innerHTML += `<p>${triangleArea(10, 15, 'cm')}</p>`;

document.querySelector('#task-5').textContent = triangleArea(10, 15, 'cm');

function allAreas(figureHeight = 0, figureWidth = 0, units = 'vnt') {
  let rectText = rectArea(figureHeight, figureWidth, units);
  let triangleText = triangleArea(figureHeight, figureWidth, units);
  let output = rectText + ' ' + triangleText;

  return output;
}

// console.log(allAreas(10, 15, 'cm'));
paragraph.textContent += ' ' + allAreas(10, 15, 'cm');

div.innerHTML += `<p>${allAreas(10, 15, 'cm')}</p>`;

let task6Element = document.querySelector('#task-6');
task6Element.textContent = allAreas(10, 15, 'cm');

function streetLight(originalLight) {
  let light = originalLight.toLowerCase();

  if (light === 'green') return 'Galima eiti!';
  if (light === 'yellow') return 'Pasiruošk';
  if (light === 'red') return 'STOP';
  
  return 'Sugedo';
}

// console.log(streetLight('green'));
paragraph.textContent += ' ' + streetLight('green');

div.innerHTML += `<p>${streetLight('green')}</p>`;

let task7Element = document.querySelector('#task-7');
task7Element.textContent = streetLight('green');

function checkAge(age) {
  if (age < 0) {
    return 'Amžius yra per mažas.';
  } 
  
  if (age >= 0 && age < 16) {
    return 'Pirki negalima.';
  } 
  
  if (age >= 16 && age < 18) {
    return 'Pirkti galima su tėvų sutikimu.';
  } 
  
  if (age >= 18 && age <= 120) {
    return 'Pirkti galima.';
  } 
  
  return 'Amžius per didelis.';
}

// console.log(checkAge(15));
paragraph.textContent += ' ' + checkAge(15);

div.innerHTML += `<p>${checkAge(15)}</p>`;

let task8Element = document.querySelector('#task-8');
task8Element.textContent = checkAge(15);

function checkPassword(originalPassword) {
  let password = originalPassword.trimStart().trimEnd().replaceAll(' ', '');
  
  if (password.length < 16) {
    return 'Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.';
  }

  if (!password.includes('#')) {
    return 'Slaptažodyje privalo būti grotažymės (#).';
  } 
  
  if (password.length > 20) {
    return 'Slaptažodis tinkamas.';
  } 
  
  return 'Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.';
}

// console.log(checkPassword('a#sdasdjhaksljdhaksdh'));
paragraph.textContent += ' ' + checkPassword('a#sdasdjhaksljdhaksdh');

div.innerHTML += `<p>${checkPassword('a#sdasdjhaksljdhaksdh')}</p>`;

let task9Element = document.querySelector('#task-9');
task9Element.textContent = checkPassword('a#sdasdjhaksljdhaksdh');

function ageStatus(age) {
  if (age < 0) {
    return 'Amžius yra per mažas.';
  } 
  
  if (age < 6) {
    return 'Į mokyklą neina.';
  } 
  
  if (age < 7) {
    return 'Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.';
  } 
  
  if (age < 10) {
    return 'Pradinukas.';
  } 
  
  if (age < 11) {
    return 'Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.';
  } 
  
  if (age < 14) {
    return 'Pagrindinė.';
  } 
  
  if (age < 15) {
    return 'Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.';
  } 
  
  if (age < 18) {
    return 'Gimnazija.';
  } 
  
  if (age < 19) {
    return 'Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.';
  } 
  
  if (age < 120) {
    return 'Mokyklą baigė.';
  } 
  
  return 'Amžius yra per didelis.';
}

// console.log(ageStatus(15));
paragraph.textContent += ' ' + ageStatus(15);

div.innerHTML += `<p>${ageStatus(15)}</p>`;

let task10Element = document.querySelector('#task-10');
task10Element.textContent = ageStatus(25);

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
  
  return output;
}

// console.log(greeting(10, true, 'John', false));
paragraph.textContent += ' ' + greeting(10, true, 'John', false);

div.innerHTML += `<p>${greeting(10, true, 'John', false)}</p>`;

let task11Element = document.querySelector('#task-11');
task11Element.textContent = greeting(10, true, 'John', true);


let ulElement = document.querySelector('ul');

function forLoop() {
  for (let i = 1; i <= 100; i++) {
    ulElement.innerHTML += `<li>- ${i} !!!</li>`;
  }
}

// forLoop();

function task1(start = 1, end = 100, nth = 1) {
  for (let i = start; i <= end; i = i + nth) {
    let answer = i * 2;
    let output = `${i} * 2 = ${answer}`;
    ulElement.innerHTML += '<li>' + output + '</li>';
  }
}

// task1(155, 3483, 30);

function task2(start = 1, end = 100, nth = 1) {
  for (let i = start; i <= end; i += nth) {
    let answer = i * 5;
    let output = `${i} * 5 = ${answer}`;
    ulElement.innerHTML += `<li>${output}</li>`;
  }
}

// task2(10, 50, 5);

function task3() {
  for (let i = 1; i <= 100; i++) {
    ulElement.innerHTML += `<li>${i + 5}</li>`
  }
}

// task3();

// 4. Atima iš skaičiaus 2.
function task4() {
  for (let i = 1; i <= 100; i++) {
    ulElement.innerHTML += '<li>' + (i - 2) + '</li>';
  }
}

// task4();

// 5. Pakelia skaičių kvadratu.
function task5() {
  for (let i = 1; i <= 100; i++) {
    // console.log(i * i);
    // console.log(Math.pow(i, 2));
    // console.log(i**2);
    ulElement.innerHTML += '<li>' + i**2 + '</li>';
  }
}

// task5();

// 6. Pakelia skaičių kūbu.
function task6() {
  for (let i = 1; i <= 100; i++) {
    // console.log(i * i * i);
    // console.log(Math.pow(i, 3));
    // console.log(i**3);

    ulElement.innerHTML += '<li>' + i**3 + '</li>';
  }
}

// task6();

function task12(start = 100, end = 1, nth = 1) {
  for (let i = start; i >= end; i -= nth) {
    let answer = i * 2;
    let output = `${i} * 2 = ${answer}`;
    // console.log(output);
    ulElement.innerHTML += '<li>' + output + '</li>';
  }
}

// task12(500, 470, 2);

function task22() {
  for (let i = 100; i >= 1; i--) {
    // console.log(i * 5);
    ulElement.innerHTML += '<li>' + (i * 5) + '</li>';
  }
}

// task22();

function fizzBuzz3() {
  for (let i = 1; i <= 100; i++) {
    let output = '';

    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    if (i % 7 === 0) output += 'Biff';
    if (i % 9 === 0) output += 'Fuzz';
    if (i % 11 === 0) output += 'Bizz';
    if (i % 13 === 0) output += 'Zuzz';

    if (!output) output = i;

    // console.log(output);

    ulElement.innerHTML += `<li>${output}</li>`;
  }
}

fizzBuzz3();