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

let counterNumber = 5;

numberDisplay.textContent = counterNumber;
minus1Button.textContent = '-1';
minus2Button.textContent = '-2';
plus1Button.textContent = '+1';
plus2Button.textContent = '+2';
resetButton.textContent = 'Reset';

numberDisplay.style.color = 'green';

numbers.append(
  numberDisplay, 
  minus2Button, 
  minus1Button, 
  plus1Button, 
  plus2Button, 
  resetButton
);

minus1Button.addEventListener('click', () => {
  counterNumber--;
  numberDisplay.textContent = counterNumber;

  if (counterNumber <= 1) {
    minus1Button.setAttribute('disabled', true);
  }
  
  if (counterNumber <= 2) {
    minus2Button.setAttribute('disabled', true);
  }

  if (counterNumber < 10) {
    plus1Button.removeAttribute('disabled');
  }

  if (counterNumber < 9) {
    plus2Button.removeAttribute('disabled');
  }

  if (counterNumber < 5) {
    numberDisplay.style.color = 'red';
  }
})

plus1Button.addEventListener('click', () => {
  counterNumber++;
  numberDisplay.textContent = counterNumber;

  if (counterNumber >= 10) {
    plus1Button.setAttribute('disabled', true);
  }

  if (counterNumber >= 9) {
    plus2Button.setAttribute('disabled', true);
  }

  if (counterNumber > 1) {
    minus1Button.removeAttribute('disabled');
  }

  if (counterNumber > 2) {
    minus2Button.removeAttribute('disabled');
  }

  if (counterNumber >= 5) {
    numberDisplay.style.color = 'green';
  }
})

minus2Button.addEventListener('click', () => {
  // counterNumber = counterNumber - 2;
  counterNumber -= 2;
  numberDisplay.textContent = counterNumber;

  if (counterNumber <= 1) {
    minus1Button.setAttribute('disabled', true);
  }

  if (counterNumber <= 2) {
    minus2Button.setAttribute('disabled', true);
  }

  if (counterNumber < 10) {
    plus1Button.removeAttribute('disabled');
  }
  
  if (counterNumber < 9) {
    plus2Button.removeAttribute('disabled');
  }

  if (counterNumber < 5) {
    numberDisplay.style.color = 'red';
  }
})

plus2Button.addEventListener('click', () => {
  counterNumber += 2;
  numberDisplay.textContent = counterNumber;

  if (counterNumber >= 10) {
    plus1Button.setAttribute('disabled', true);
  }

  if (counterNumber >= 9) {
    plus2Button.setAttribute('disabled', true);
  }

  if (counterNumber > 1) {
    minus1Button.removeAttribute('disabled');
  }

  if (counterNumber > 2) {
    minus2Button.removeAttribute('disabled');
  }

  if (counterNumber >= 5) {
    numberDisplay.style.color = 'green';
  }
})

resetButton.addEventListener('click', () => {
  counterNumber = 5;
  numberDisplay.textContent = counterNumber;
  numberDisplay.style.color = 'green';
  minus1Button.removeAttribute('disabled');
  plus1Button.removeAttribute('disabled');
  minus2Button.removeAttribute('disabled');
  plus2Button.removeAttribute('disabled');
})
