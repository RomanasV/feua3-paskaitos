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


const numbers = document.querySelector('#numbers');
const numberDisplay = document.createElement('h3');
const minus1Button = document.createElement('button');
const plus1Button = document.createElement('button');
const minus2Button = document.createElement('button');
const plus2Button = document.createElement('button');
const resetButton = document.createElement('button');

const initialNumber = 5;
let counterNumber;

numberDisplay.textContent = counterNumber;
minus1Button.textContent = '-1';
minus2Button.textContent = '-2';
plus1Button.textContent = '+1';
plus2Button.textContent = '+2';
resetButton.textContent = 'Reset';

numbers.append(
  numberDisplay, 
  minus2Button, 
  minus1Button, 
  plus1Button, 
  plus2Button, 
  resetButton
);

checkData(initialNumber);

minus1Button.addEventListener('click', () => checkData(counterNumber - 1));
plus1Button.addEventListener('click', () => checkData(counterNumber + 1));
minus2Button.addEventListener('click', () => checkData(counterNumber - 2));
plus2Button.addEventListener('click', () => checkData(counterNumber + 2));
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

  checkColor();
}


