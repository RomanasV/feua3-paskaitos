// console.log('-' + 1 + '!');
// console.log('-' + 2 + '!');
// console.log('-' + 3 + '!');
// console.log('-' + 4 + '!');
// console.log('-' + 5 + '!');
// console.log('-' + 6 + '!');
// console.log('-' + 7 + '!');
// console.log('-' + 8 + '!');
// console.log('-' + 9 + '!');
// console.log('-' + 10 + '!');
// console.log('-' + 11 + '!');
// console.log('-' + 12 + '!');
// console.log('-' + 13 + '!');
// console.log('-' + 14 + '!');
// console.log('-' + 15 + '!');
// console.log('-' + 16 + '!');
// console.log('-' + 17 + '!');
// console.log('-' + 18 + '!');
// console.log('-' + 19 + '!');
// console.log('-' + 20 + '!');

function count(num) {
  console.log('- ' + num + '!!!');
}

// count(1);
// count(2);
// count(3);
// count(4);
// count(5);
// count(6);
// count(7);
// count(9);
// count(10);
// count(11);
// count(12);
// count(13);
// count(14);
// count(15);
// count(16);
// count(17);
// count(19);
// count(20);


// FOR CIKLAS

/*

for (kintamasis; sąlyga; kintamojo pakeitimas) {

}
 
*/

function forLoop() {
  for (let i = 1; i <= 20; i++) {
    count(i);
  }
}

// forLoop();


// for (let i = 0; i < 100; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }


// Sukurti funkcijas, kurios paleidžia ciklą su skaičiais nuo 1 iki 100. Šie ciklai:
// 1. Padaugina skaičių iš 2.

function task1(start = 1, end = 100, nth = 1) {
  for (let i = start; i <= end; i = i + nth) {
    let answer = i * 2;
    let output = `${i} * 2 = ${answer}`;
    console.log(output);
  }
}

// task1(155, 3483, 30);

// 2. Padaugina skaičių iš 5.
function task2(start = 1, end = 100, nth = 1) {
  for (let i = start; i <= end; i += nth) {
    let answer = i * 5;
    let output = `${i} * 5 = ${answer}`;
    console.log(output);
  }
}

// task2(10, 50, 5);

// 3. Prideda prie skaičiaus 5.
function task3() {
  for (let i = 1; i <= 100; i++) {
    console.log(i + 5);
  }
}

// task3();

// 4. Atima iš skaičiaus 2.
function task4() {
  for (let i = 1; i <= 100; i++) {
    console.log(i - 2);
  }
}

// task4();

// 5. Pakelia skaičių kvadratu.
function task5() {
  for (let i = 1; i <= 100; i++) {
    // console.log(i * i);
    // console.log(Math.pow(i, 2));
    console.log(i**2);
  }
}

// task5();

// 6. Pakelia skaičių kūbu.
function task6() {
  for (let i = 1; i <= 100; i++) {
    // console.log(i * i * i);
    // console.log(Math.pow(i, 3));
    console.log(i**3);
  }
}

// task6();

function task12(start = 100, end = 1, nth = 1) {
  for (let i = start; i >= end; i -= nth) {
    let answer = i * 2;
    let output = `${i} * 2 = ${answer}`;
    console.log(output);
  }
}

task12(500, 470, 2);

function task22() {
  for (let i = 100; i >= 1; i--) {
    console.log(i * 5);
  }
}

// task22();



let num = 5;
// console.log(num);

// console.log(num + 1);
// console.log(num);

// num = 6;
// console.log(num);

// // Sudėtis

// num = num + 1;
// console.log(num);

// num += 1;
// console.log(num);

// num++;
// console.log(num);

// num = num + 2;
// console.log(num);

// num += 2;
// console.log(num);

// // Atimtis

// num = num - 1;
// console.log(num);

// num -= 1;
// console.log(num);

// num--;
// console.log(num);

// num = num - 2;
// console.log(num);

// num -= 2;
// console.log(num);

// // Daugyba
// num = num * 2;
// console.log(num);

// num *= 2;
// console.log(num);

// // Dalyba
// num = num / 2;
// console.log(num);

// num /= 2;
// console.log(num);


// // Tekstas
// let str = 'Labas';
// console.log(str);

// console.log(str + ' vakaras');
// console.log(str);

// str = str + ' vakaras';
// console.log(str);

// str += '.';
// console.log(str);