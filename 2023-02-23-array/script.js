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


// UŽDUOTIS:
// Sukurti 10-ties filmų masyvą ir iš jo:
let movies = ['Fast and furious', 'Batman', 'Pirates of the Caribbean', 'Avatar', 'Shutter Island', 'Harry Potter', 'King of thieves', 'In yur eyes', 'The Hobbit', 'Schindler\'s List'];

// 1. Išimti pirmus 5 filmus.
let slicedMovies1 = movies.slice(0, 5);
console.log('Slice: ', slicedMovies1);
// let splicedMovies = movies.splice(0, 5);

// 2. Išimti 4 paskutinius filmus.
let slicedMovies2 = movies.slice(-4);
console.log('Slice: ', slicedMovies2);
// let splicedMovies = movies.splice(-4, 4);
// console.log('Splice: ', splicedMovies);


// 3. Išimti nuo trečio iki septinto filmo.
let slicedMovies3 = movies.slice(2, 7);
console.log('Slice: ', slicedMovies3);
// let splicedMovies = movies.splice(2, 5);
// console.log('Splice: ', splicedMovies);

// 4. Išimti antrą ir trečią filmą.
let slicedMovies4 = movies.slice(1, 3);
console.log('Slice: ', slicedMovies4);
// let splicedMovies = movies.splice(1, 2);
// console.log('Splice: ', splicedMovies);

// 5. Išimti visus, išskyrus pirmą filmą.
let slicedMovies5 = movies.slice(1);
console.log('Slice: ', slicedMovies5);
// let splicedMovies = movies.splice(1);
// console.log('Splice: ', splicedMovies);

// 6. Išimti 5 filmus skaičiuojant nuo trečio.
let slicedMovies6 = movies.slice(2, 7);
console.log('Slice: ', slicedMovies6);
// let splicedMovies = movies.splice(2, 5);
// console.log('Splice: ', splicedMovies);

// 7. Išimti tris filmus nuo galo, tačiau palikti paskutinį.
let slicedMovies7 = movies.slice(-4, -1);
console.log('Slice: ', slicedMovies7);
// let splicedMovies = movies.splice(-4, 3);
// console.log('Splice: ', splicedMovies);

// 8. Vietoje penkto filmo įrašyti du naujus filmus.
let splicedMovies8 = movies.splice(4, 1, 'Filmas naujas');
console.log('Splice: ', splicedMovies8);

// 9. Pašalinti pirmą filmą.
// let task9 = movies.splice(0, 1);
let task9 = movies.shift();
console.log('Task 9: ', task9);

// 10. Įrašyti naują filmą į masyvo pradžią.
// let task10 = movies.splice(0, 0, 'Dar vienas naujas filmas');
let task10 = movies.unshift('Dar vienas naujas filmas');

console.log(movies);

// 11.1. Išimti pirmus tris filmus, skaičiuojant nuo antro filmo.
// let task111 = movies.slice(1, 4);
let task111 = movies.splice(1, 3);
console.log(task111);

// 11.2. Išimti paskutinius tris filmus, skaičiuojant nuo priešpaskutinio filmo.
// let task112 = movies.slice(-4, -1);
let task112 = movies.splice(-4, 3);
console.log(task112);

// 11.3. Šiuos išimtus filmus išsaugoti naujame masyve ir padaryti, jog jo nariai būtų apsukti.
// let task113 = task111.concat(task112).reverse();
// let task113 = [task111, task112].flat().reverse();
let task113 = [...task111, ...task112].reverse();

console.log(task113);


let citiesArr = ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiauliai', 'Panevėžys', 'Marijampolė', 'Alytus'];

// FOR ciklas dirbant su masyvais
for (let i = 0; i < citiesArr.length; i++) {
  // console.log(i);
  console.log('For ciklas: ' + citiesArr[i]);
}

// MAP
// citiesArr.map(function(city, index, array) {
//   console.log(index);
//   console.log('Map: ' + city);
//   console.log(array);
// });

citiesArr.map((city, index, array) => {
  console.log('Map ciklas: ' + city);
});

// ForEach
citiesArr.forEach((city, index, array) => {
  console.log('For each ciklas: ' + city);
});

// MAP RETURN
let citiesMap = citiesArr.map((city) => {
  return `${city} (${city.length})`;
}).reverse();
console.log(citiesMap);

let citiesForEach = citiesArr.forEach((city) => {
  return `${city} (${city.length})`;
});
console.log(citiesForEach);

// FILTER
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let filteredArray = numArray.filter(num => num > 5 && num % 2 === 0);

let filteredNums = numArray.filter((num) => {
  return num > 5 && num % 2 === 0;
});

console.log(filteredNums);

let filteredCities = citiesArr.filter((city) => {
  return city.length > 7 && city.length % 2 === 0 && city[0] === 'K';
});

console.log(filteredCities);


const arr = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end'];

// 4.1. Tik skaičius (number tipo duomenis).
// 4.2. Tik tekstą (string tipo duomenis).
function task41for(data) {
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === 'number') {
      console.log(data[i]);
    }
  }
}

// task41for(arr);

function task41map(data) {
  console.log(data);
  data.map((item) => {
    if (typeof item === 'number') {
      console.log(item);
    }
  });
}

task41map(arr);