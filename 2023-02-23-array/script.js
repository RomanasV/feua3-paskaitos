let plants = ['apple', 'tomato', 'orange', 'banana', 'pineapple'];
// Ineksai       0         1        2         3           4

// console.log(plants);
// console.log(plants.length);

// console.log(plants[0]);
plants[0] = 'pear';
// plants[5] = 'apple';
plants[plants.length] = 'apple';

// console.log(plants[1]);
// console.log(plants[2]);
// console.log(plants[3]);
// console.log(plants[4]);

function loop(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// loop(plants);

console.log(plants);
// POP metodas pašalina paskutinį masyvo narį - modifikuoja originalų masyvą
let lastPlant = plants.pop();
console.log(lastPlant);

plants.pop();

console.log(plants);

// SHIFT metodas pašalina pirmą masyvo narį - modifikuoja originalų masyvą
let firstPlant = plants.shift();
console.log(firstPlant);

plants.shift();

console.log(plants);

// PUSH metodas prideda į masyvo pabaigą naują narį - modifikuoja originalų masyvą
let plantsPushCount = plants.push('apple');
console.log(plantsPushCount);

plants.push('pear', 'pineapple');

console.log(plants);

// UNSHIFT metodas prideda į masyvo pradžią naują narį - modifikuoja originalų masyvą
let plantsUnshiftCount = plants.unshift('tomato');
console.log(plantsUnshiftCount);

console.log(plants);


const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// INDEKSAS         0       1        2       3         4
// Slice (+)    0     1        2        3       4          5
// Slice (-)   -5    -4       -3       -2      -1         

// SLICE - nemutuoja (nemodifikuoja) originalaus masyvo reikšmių

console.log('-----SLICE-----');

console.log(animals);

let slicedAnimals1 = animals.slice();
console.log(slicedAnimals1);

let slicedAnimals2 = animals.slice(0);
console.log(slicedAnimals2);

let slicedAnimals3 = animals.slice(2);
console.log(slicedAnimals3);

let slicedAnimals4 = animals.slice(2, 4);
console.log(slicedAnimals4);

let slicedAnimals5 = animals.slice(4, 2);
console.log(slicedAnimals5);

let slicedAnimals6 = animals.slice(-3);
console.log(slicedAnimals6);

let slicedAnimals7 = animals.slice(-4, -1);
console.log(slicedAnimals7);

let slicedAnimals8 = animals.slice(-2, -3);
console.log(slicedAnimals8);

let slicedAnimals9 = animals.slice(-4, 3);
console.log(slicedAnimals9);

let slicedAnimals10 = animals.slice(2, -2);
console.log(slicedAnimals10);


// SLICE UZDUOTIS dirbant su pirkinių sąrašu (bent 7 pirkiniai):
let shoppingList = ['bread', 'meat', 'milk', 'banana', 'jogurt', 'paper', 'nuts'];

// Kiekvienam iš punktų sukurti po atskirą kintamąjį ir jame išsaugoti reikšmę. Šią reikšmę atvaizduoti konsolėje.
// 1. Išimti pirmus du pirkinius.
let task1 = shoppingList.slice(0, 2);
console.log(task1);

// 2. Išimti tris paskutinius pirkinius.
let task2 = shoppingList.slice(-3);
console.log(task2);

// 3. Išimti ketvirtą ir penktą pirkinį.
let task3 = shoppingList.slice(3, 5);
console.log(task3);

// 4. Išimti antrą ir trečią pirkinį.
let task4 = shoppingList.slice(1, 3);
console.log(task4);

// 5. Išimti visus, išskyrus pirmą pirkinį.
let task5 = shoppingList.slice(1);
console.log(task5);

// SPLICE
// splice - modifikuoja (mutuoja) originalų masyvą.
console.log('----------------SPLICE----------------');
let nums = [1, 2, 3, 4, 5, 6, 7];
console.log(nums);

// let splicedNums = nums.splice(1);
// let splicedNums = nums.splice(1, 3);
// let splicedNums = nums.splice(5, 1);
// let splicedNums = nums.splice(-4, 2);
// let splicedNums = nums.splice(2, 0);
// let splicedNums = nums.splice(2, 0, 2.5);
// let splicedNums = nums.splice(2, 2, 2);
// let splicedNums = nums.splice(1, 5, 15, 20, 'Labas');
// let splicedNums = nums.splice(-1, 0, 100);
// let splicedNums = nums.splice(0, 1);
let splicedNums = nums.splice(0, 0, 15);

console.log(splicedNums);
console.log(nums);