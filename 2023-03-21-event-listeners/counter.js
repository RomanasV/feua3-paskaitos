// Užduotis:
// 1. Sukurti HTML elementą, kurio id „numbers"
// 2. JavaScript pagalba šio elemento viduje sukurti: h3 elementą ir du mygtukų elementus
// 3. h3 elemento tekstas turėtų būti „5"
// 4. Mygtukų tekstas turėtų būti „+" ir „-"
// 5. Sukurti „click" (paspaudimo) event listener'ius abiems mygtukams.
// 6. „-" mygtuko event listeneris turėtų iškviesti funkciją, kuri sumažina skaičių h3 elemente, o „+" mygtuko paspaudimas turėtų skaičių padidinti

// 7. Jeigu skaitmuo h3 komponente yra mažesnis už du, tai „-" mygtukas turėtų patapti neveiksnus (disabled)- element.setAttribute('disabled', true) / element.removeAttribute('disabled')
// 8. Jeigu skaitmuo h3 komponente yra 10, tai „+" mygtukas turėtų patapti neveiksnus (disabled)
// 9. Jeigu skaitmuo yra 5 arba daugiau, tai jo spalva turėtų būti žalia. Kitu atveju - raudona.
// 10. Sukurti naują mygtuką „Reset". Jį paspaudus viskas atstatoma į pradinę padėtį.

// 11. Sukurti input elementą (number tipo) ir jame įrašytą skaičių pridėti kaip h3 elemento tekstą.

// 12. Sukurti du naujus mygtukus, kurie:
// 12.1. Prideda dvejetą prie esamos h3 elemento reikšmės.
// 12.2. Atima dvejetą iš esamos h3 elemento reikšmės.

// 13. Sukurti naują elementą (h4) ir jį pridėti į „numbers" elemento pabaigą.
// 13.1. Šio elemento tekstas turėtų būti „Balai:"
// 14. Sukurti naują elementą (ul) ir jį pridėti į „numbers" elemento pabaigą.
// 14.1. Sukurti naują mygtuką, kurio teksta būtų „Įrašyti balą".
// 14.2. Paspaudus šį mygtuką, reikia paimti reikšmę iš h3 elemento ir sukurti naują li elementą bei jį prepend'inti prie ul elemento.

const numbers = document.querySelector('#numbers');
const numberDisplay = document.createElement('h3');
const minus1Button = document.createElement('button');
const plus1Button = document.createElement('button');
const minus2Button = document.createElement('button');
const plus2Button = document.createElement('button');
const minus5Button = document.createElement('button');
const plus5Button = document.createElement('button');
const resetButton = document.createElement('button');
const input = document.createElement('input');
const gradesTitle = document.createElement('h4');
const gradesList = document.createElement('ul');
const gradeButton = document.createElement('button');

const initialNumber = 5;
let counterNumber;

numberDisplay.textContent = counterNumber;
minus1Button.textContent = '-1';
minus2Button.textContent = '-2';
minus5Button.textContent = '-5';
plus1Button.textContent = '+1';
plus2Button.textContent = '+2';
plus5Button.textContent = '+5';
resetButton.textContent = 'Reset';
input.type = 'number';
input.value = initialNumber;

gradesTitle.textContent = 'Balai:';
gradeButton.textContent = 'Add Grade';

numbers.append(
  numberDisplay,
  input, 
  minus5Button, 
  minus2Button, 
  minus1Button, 
  plus1Button, 
  plus2Button, 
  plus5Button, 
  resetButton,
  gradeButton,
  gradesTitle,
  gradesList
);

checkData(initialNumber);

minus1Button.addEventListener('click', () => checkData(counterNumber - 1));
plus1Button.addEventListener('click', () => checkData(counterNumber + 1));
minus2Button.addEventListener('click', () => checkData(counterNumber - 2));
plus2Button.addEventListener('click', () => checkData(counterNumber + 2));
minus5Button.addEventListener('click', () => checkData(counterNumber - 5));
plus5Button.addEventListener('click', () => checkData(counterNumber + 5));
resetButton.addEventListener('click', () => checkData(initialNumber));

function checkColor() {
  let color = 'black';
  
  if (counterNumber < 5) {
    color = 'red';
  } else if (counterNumber < 7) {
    color = 'orange';
  } else {
    color = 'green';
  }

  numberDisplay.style.color = color;
}

function checkData(newCounterNumber) {
  counterNumber = newCounterNumber;
  numberDisplay.textContent = counterNumber;

  if (counterNumber >= 10) {
    plus1Button.setAttribute('disabled', true);
  } else {
    plus1Button.removeAttribute('disabled');
  }

  if (counterNumber >= 9) {
    plus2Button.setAttribute('disabled', true);
  } else {
    plus2Button.removeAttribute('disabled');
  }

  if (counterNumber >= 6) {
    plus5Button.setAttribute('disabled', true);
  } else {
    plus5Button.removeAttribute('disabled');
  }

  if (counterNumber > 1) {
    minus1Button.removeAttribute('disabled');
  } else {
    minus1Button.setAttribute('disabled', true);
  }

  if (counterNumber > 2) {
    minus2Button.removeAttribute('disabled');
  } else {
    minus2Button.setAttribute('disabled', true);
  }

  if (counterNumber > 5) {
    minus5Button.removeAttribute('disabled');
  } else {
    minus5Button.setAttribute('disabled', true);
  }

  checkColor();
}


