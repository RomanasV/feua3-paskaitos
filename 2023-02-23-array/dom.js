function hello() {
  return 'Sveikas';
}

let task1Element = document.querySelector('#task-1');
task1Element.textContent = hello();

function helloWithName(personName, personSurname) {
  let text = 'Hello, ' + personName + ' ' + personSurname + '.';
  return text;
}

let task2Element = document.querySelector('#task-2');
task2Element.textContent = helloWithName('John', 'Doe');

function perimeter(height, width, units) {
  let answer = (height + width) * 2;
  let output = `Perimeter: ${answer} ${units}`;
  return output;
}

console.log(perimeter(10, 10, 'km.'));

function rectArea(height, width, units) {
  let unitsText = units ? units : 'vnt';

  let answer = height * width;
  let output = `Stačiakampio plotas yra ${answer} kv. ${unitsText}.`;
  return output;
}

console.log(rectArea(10, 15, 'cm'));
console.log(rectArea(10, 20, 'm'));

function triangleArea(height = 0, width = 0, units = 'vnt') {
  let answer = height * width / 2;
  let output = `Stačiojo trikampio plotas yra ${answer} kv. ${units}.`;
  return output;
}

console.log(triangleArea(10, 15, 'cm'));

function allAreas(figureHeight = 0, figureWidth = 0, units = 'vnt') {
  let rectText = rectArea(figureHeight, figureWidth, units);
  let triangleText = triangleArea(figureHeight, figureWidth, units);
  let output = rectText + ' ' + triangleText;

  return output;
}

console.log(allAreas(10, 15, 'cm'));

function streetLight(originalLight) {
  let light = originalLight.toLowerCase();

  if (light === 'green') return 'Galima eiti!';
  if (light === 'yellow') return 'Pasiruošk';
  if (light === 'red') return 'STOP';
  
  return 'Sugedo';
}

console.log(streetLight('green'));

function checkAge(age) {
  if (age < 0) {
    return 'Amžius yra per mažas';
  } 
  
  if (age >= 0 && age < 16) {
    return 'Pirki negalima';
  } 
  
  if (age >= 16 && age < 18) {
    return 'Pirkti galima su tėvų sutikimu';
  } 
  
  if (age >= 18 && age <= 120) {
    return 'Pirkti galima';
  } 
  
  return 'Amžius per didelis';
}

console.log(checkAge(15));

function checkPassword(originalPassword) {
  let password = originalPassword.trimStart().trimEnd().replaceAll(' ', '');
  
  if (password.length < 16) {
    return 'Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.';
  }

  if (!password.includes('#')) {
    return 'Slaptažodyje privalo būti grotažymės (#)';
  } 
  
  if (password.length > 20) {
    return 'Slaptažodis tinkamas';
  } 
  
  return 'Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.';
}

console.log(checkPassword('a#sdasdjhaksljdhaksdh'));

function ageStatus(age) {
  if (age < 0) {
    return 'Amžius yra per mažas';
  } 
  
  if (age < 6) {
    return 'Į mokyklą neina';
  } 
  
  if (age < 7) {
    return 'Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.';
  } 
  
  if (age < 10) {
    return 'Pradinukas';
  } 
  
  if (age < 11) {
    return 'Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.';
  } 
  
  if (age < 14) {
    return 'Pagrindinė';
  } 
  
  if (age < 15) {
    return 'Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.';
  } 
  
  if (age < 18) {
    return 'Gimnazija';
  } 
  
  if (age < 19) {
    return 'Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.';
  } 
  
  if (age < 120) {
    return 'Mokyklą baigė';
  } 
  
  return 'Amžius yra per didelis';
}

console.log(ageStatus(15));

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

console.log(greeting(10, true, 'John', false));

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

// gameLevel1();

function gameLevel2() {  
  let correctAnswer21 = 1;
  let correctAnswer22 = 1;

  let playerAnswer21 = prompt('2 lygis, 1 klausimas: .....');
  let playerAnswer22 = prompt('2 lygis, 2 klausimas: .....');

  if (correctAnswer21 == playerAnswer21 && correctAnswer22 == playerAnswer22) {
    alert('Patekai: abu teisingi.');
    gameLevel3();
  } else if (correctAnswer21 == playerAnswer21) {
    alert('Nepatekai: pirmas teisingas.');
  } else if (correctAnswer22 == playerAnswer22) {
    alert('Nepatekai: antras teisingas');
  } else {
    alert('Nepatekai: abu neteisingi.');
  }
}

function gameLevel3() {
  let correctAnswer31 = 1;
  let correctAnswer32 = 1;
  let correctAnswer33 = 1;
  
  let playerAnswer31 = prompt('3 lygis, 1 klausimas: .....');
  let playerAnswer32 = prompt('3 lygis, 2 klausimas: .....');
  let playerAnswer33 = prompt('3 lygis, 3 klausimas: .....');
  
  let answer1 = correctAnswer31 == playerAnswer31;
  let answer2 = correctAnswer32 == playerAnswer32;
  let answer3 = correctAnswer33 == playerAnswer33;
  
  if (answer1 && answer2 && answer3) {
    alert('Patekai: visi atakymai teisingi.');
    gameLevel4();
  } else if (answer2 && answer3) {
    alert('Patekai: bet pirmas neteisingas.');
    gameLevel4();
  } else if (answer1 && answer3) {
    alert('Patekai: bet antras neteisingas.');
    gameLevel4();
  } else if (answer1 && answer2) {
    alert('Patekai: bet trečias neteisingas.');
    gameLevel4();
  } else if (answer1) {
    alert('Nepatekai: bet pirmas teisingas.');
  } else if (answer2) {
    alert('Nepatekai: bet antras teisingas.');
  } else if (answer3) {
    alert('Nepatekai: bet trečias teisingas.');
  } else {
    alert('Nepatekai: visi neteisingi :(');
  }
}

function gameLevel4() {
  let correctAnswer31 = 1;
  let correctAnswer32 = 1;
  let correctAnswer33 = 1;
  
  let playerAnswer31 = prompt('4 lygis, 1 klausimas: .....');
  let playerAnswer32 = prompt('4 lygis, 2 klausimas: .....');
  let playerAnswer33 = prompt('4 lygis, 3 klausimas: .....');
  
  let answer1 = correctAnswer31 == playerAnswer31;
  let answer2 = correctAnswer32 == playerAnswer32;
  let answer3 = correctAnswer33 == playerAnswer33;
  
  if (answer1 && answer2 && answer3) {
    alert('Sveikiname, laimėjai!')
  } else if (answer2 && answer3) {
    alert('Nelaimėjai: bet antras ir trečias buvo teisingi.')
  } else if (answer1 && answer3) {
    alert('Nelaimėjai: bet pirmas ir trečias buvo teisingas.')
  } else if (answer1 && answer2) {
    alert('laimėjai: bet pirmas ir antras buvo teisingas.')
  } else if (answer1) {
    alert('Nelaimėjai: bet pirmas teisingas.')
  } else if (answer2) {
    alert('Nelaimėjai: bet antras teisingas.')
  } else if (answer3) {
    alert('Nelaimėjai: bet trečias teisingas.')
  } else {
    alert('Nelaimėjai: visi neteisingi :(')
  }
}