// 1. Sukurti 10-ies skaičių masyvą.
let numbersArray = [4, 65, -8, 8, -91, 1, 3, 8498, 188, -6165, 2, 516, 7, 5151, 651, 11, 78, -787, -20, 100, 456];

// 2. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina jų vidurkį.
// 2.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) vidurkis yra 15"

function task2(arr) {
  
  // let arrSum = arr.reduce((sum, current) => {
  //   return sum + current;
  // });
  
  let arrSum = arr.reduce((sum, current) => sum + current);
  let total = arr.length;
  // let average = (arrSum / total).toFixed(1);
  let average = Math.round(arrSum / total);
    
  // let arrToStr = arr.join(', ');
  // let output = `Skaičių (${arrToStr}) vidurkis yra ${average}.`;
  // console.log(output);
  renderOutputResult(arr, average, 'vidurkis');
}

task2(numbersArray);

// 3. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina jų medianą.
// 3.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) mediana yra 15"

function task3(arr) {
  // Pirmas būdas
  // let arrClone = arr.slice();
  // let sortedArray = arrClone.sort((a, b) => a - b);

  // Antras būdas
  // let arrClone = [...arr];
  // let sortedArray = arrClone.sort((a, b) => a - b);
  
  // Trečias būdas
  let sortedArray = [...arr].sort((a, b) => a - b);
  

  let total = arr.length;

  let median;

  if (total % 2 === 0) {
    let middleTopIndex = total / 2;
    let middleBottomIndex = middleTopIndex - 1;

    let middleTopValue = sortedArray[middleTopIndex];
    let middleBottomValue = sortedArray[middleBottomIndex];

    median = (middleTopValue + middleBottomValue) / 2;
  } else {
    let middleIndex = Math.floor(total / 2);
    median = sortedArray[middleIndex];
  }

  // let arrToStr = arr.join(', ');
  // let output = `Skaičių (${arrToStr}) mediana yra ${median}.`;
  // console.log(output);

  renderOutputResult(arr, median, 'mediana');
}

task3(numbersArray);

// 4. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina didžiausia jame esantį skaičių.
// 4.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) didžiausias skaičius yra 15"

function task4(arr) {
  let max = Math.max(...arr);
  
  // let arrToStr = arr.join(', ');
  // let output = `Skaičių (${arrToStr}) didžiausias skaičius yra ${max}.`;
  // console.log(output);

  renderOutputResult(arr, max, 'didžiausias skaičius')
}

task4(numbersArray)


// 5. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina mažiausią jame esantį skaičių.
// 5.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) mažiausias skaičius yra 1"
function task5(arr) {
  let min = Math.min(...arr);

  // let output = `Skaičių (${arrToStr}) mažiausias skaičius yra ${min}.`;
  // console.log(output);

  renderOutputResult(arr, min, 'mažiausias skaičius');
}

task5(numbersArray)

// 6. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina n-tąjį skaičių pagal dydį (skaičiuojant nuo mažiausio iki didžiausio).
// 6.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) 3 skaičius pagal dydį yra 3"
function task6(arr, nth) {
  let sortedArray = [...arr].sort((a, b) => a - b);

  let index = nth - 1;
  let nthNumber = sortedArray[index];

  let textOutput = `${nth} skaičius pagal dydį`;
  
  renderOutputResult(arr, nthNumber, textOutput);
}

task6(numbersArray, 10);

function renderOutputResult(arr, answer, text) {
  let arrToStr = arr.join(', ');

  let output = `Skaičių (${arrToStr}) ${text} yra ${answer}.`;
  console.log(output);
}