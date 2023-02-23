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