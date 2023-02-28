// Įprasta funkcija
function func1() {
  return 2 + 2;
}
console.log(func1());

// Įprasta funkcija su parametrais
function func2(num1, num2) {
  return num1 + num2;
}
console.log(func2(2, 5));

// Sukuriamas kintamasis ir jam, kaip reikmė, priskiriama anoniminė funkcija
const func3 = function(num1, num2) {
  return num1 + num2;
}
console.log(func3(2, 7));

// ARROW FUNCTION
// Sukūrimas
// 1. Sukuriamas kintamasis.
// 2. Priskiriama reikšmė:
// 2.1. Paprasti skliaustai ()
// 2.2. Rodyklė =>
// 2.3. Riestiniai skliaustai {}

const arrowFunc1 = () => {
  return 2 * 2;
}
console.log(arrowFunc1());

const arrowFunc2 = (num1, num2) => {
  return num1 * num2;
}
console.log(arrowFunc2(3, 3));

const arrowFunc3 = (num) => {
  return num * num;
}
console.log(arrowFunc3(5));

// Jeigu arrow funkcija turi vieną parametrą, tai galima nerašyti paprastų skliaustų. Jeigu neturi nei vieno parametro arba jų turi daugiau nei vieną, tai paprasti skliaustai yra būtini.

const arrowFunc4 = num => {
  return num * num;
}
console.log(arrowFunc4(5));

// Jeigu funkcijos veiksmas aprašomas vienoje eilutėje (arba funkciją grąžina reikšmę), tai galima nerašyti žodelio return ir riestinių skliaustų.

const arrowFunc5 = num => num * num;
console.log(arrowFunc5(5));

const arrowFunc6 = (num1, num2) => num1 * num2;
console.log(arrowFunc6(3, 3));

let nums = [1, 2, 3, 4, 5, 7, 9, 10];
nums.forEach(function(num) {
  console.log('For Each (regular function): ' + num);
});

// nums.forEach((num) => {
//   console.log('For Each (arrow function): ' + num);
// });

// nums.forEach(num => {
//   console.log('For Each (arrow function): ' + num);
// });

nums.forEach(num => console.log('For Each (arrow function): ' + num));

// const filteredNums = nums.filter(function(num) {
//   return num > 5;
// });

// const filteredNums = nums.filter((num) => {
//   return num > 5;
// });

// const filteredNums = nums.filter(num => {
//   return num > 5;
// });

const filteredNums = nums.filter(num => num > 5);

console.log(filteredNums);