console.groupCollapsed('Array');
// Masyvo kūrimas
let students = ['John', 'Steve', 'Peter'];

// Masyvo narių pasiekimas
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);

// Kaip iteruojame per masyvą (ciklas/loop)

// for ciklas
for (let i = 0; i < students.length; i++) {
  console.log('For ciklas: ' + students[i]);
}

// map ciklas
students.map((student) => {
  console.log('Map ciklas: ' + student);
})

// forEach ciklas
students.forEach((student) => {
  console.log('ForEach ciklas: ' + student);
})

// while ciklas
let n = 0;
while (n < students.length) {
  console.log('while ciklas: ', students[n]);
  n++;
}

// do while ciklas
let m = 0;
do {
  console.log('do while ciklas: ' + students[m]);
  m++;
} while (m < students.length);

// for ...of ciklas
for (let student of students) {
  console.log('for ...of ciklas: ' + student);
}

//            Vardas,                  Pavarde, Grupe, Amzius, Miestas 
let student1 = ['John', 'Middle name', 'Doe', 30, 25, 'Vilnius'];
console.log(student1);
console.log(student1[0]);
console.log(student1[1]);
console.log(student1[2]);
console.log(student1[3]);
console.log(student1[4]);

console.groupEnd();


/* 

Objekto sintaksė:

let object = {
  key: 'value',
}

Student 1:
  - Name: John,
  - Surname: Doe,
  - Age: 30,
  - Group: 25,
  - City: Vilnius.

*/

let studentObj = {
  name: 'John', // Property (key: value)
  surname: 'Doe',
  'middle name': 'Steve',
  age: 30,
  group: 25,
  city: 'Vilnius',
  getFullName: function() {
    return `${this.name} ${this['middle name']} ${this.surname}`;
  },
  setStudentInactive: function() {
    this.isActive = false;
    return this.isActive;
  },
  setStudentIsActive() {
    this.isActive = true;
  },
  switchStudentActivity() {
    // if (this.isActive) {
    //   this.isActive = false;
    // } else {
    //   this.isActive = true;
    // }

    this.isActive = !this.isActive;
  },
  removeHobby(hobbyToRemove) {
    // let updatedHobbies = this.hobbies.filter((hobby) => {
    //   return hobby !== hobbyToRemove;
    // })

    // this.hobbies = updatedHobbies;
    // return this.hobbies;

    this.hobbies = this.hobbies.filter(hobby => hobby !== hobbyToRemove);
    return this.hobbies;
  }
}

console.log(studentObj.getFullName());

console.log(studentObj);

// Objekto properties pasiekimas
console.log(studentObj['name']);
console.log(studentObj['surname']);
console.log(studentObj['age']);
console.log(studentObj['group']);
console.log(studentObj['city']);

console.log(studentObj.name);
console.log(studentObj.surname);
console.log(studentObj.age);
console.log(studentObj.group);
console.log(studentObj.city);

let propertyName = 'group';
console.log(studentObj[propertyName]);
console.log(studentObj['middle name']);

// Objekto properties pakeitimas
console.log(studentObj.age);
studentObj.age = 31;
console.log(studentObj.age);

console.log(studentObj['group']);
studentObj['group'] = 27;
console.log(studentObj['group']);

// Objekto properties sukūrimas
console.log(studentObj.isActive);
studentObj.isActive = true;
console.log(studentObj.isActive);

studentObj['home town'] = 'Klaipėda';

// Objekto properties ištrynimas
console.log(studentObj['home town']);
delete studentObj['home town'];
console.log(studentObj['home town']);


// Masyvai objektuose
// studentObj.hobbies = ['Sports', 'Books'];
let studentHobbies = ['Sports', 'Books'];
studentObj.hobbies = studentHobbies;

console.log(studentObj.hobbies);
console.log(studentObj.hobbies[0]);
console.log(studentObj.hobbies[1]);

studentObj.hobbies.push('Traveling');

studentObj.hobbies.map(hobby => {
  console.log(hobby);
})


// Objektai objekte
// Pirmas būdas - kuriant naują kintamąjį
// let studentAddress = {
//   city: 'Vilnius',
//   street: 'Vilniaus st.',
//   country: 'Lithuania',
//   apartment: 15,
// }
// studentObj.address = studentAddress;

// Antras būdas - kurti adreso objektą tiesiogiai studento objekte
// studentObj.address = {
//   city: 'Vilnius',
//   street: 'Vilniaus st.',
//   country: 'Lithuania',
//   apartment: 15,
// }

// Trečias būdas
// studentObj.address = new Object();
studentObj.address = {};
studentObj.address.city = 'Vilnius';
studentObj.address.street = 'Vilniaus st.';
studentObj.address.country = 'Lithuania';
studentObj.address.apartment = 15;

console.log(studentObj.address);
console.log(studentObj.address.city);
console.log(studentObj.address.street);
console.log(studentObj.address.country);
console.log(studentObj.address.apartment);

console.log(studentObj);

console.groupCollapsed('Objektai masyve');
// Objektai masyve
let movies = [
  {
    title: 'Filmas 1',
    year: 2001,
  },
  {
    title: 'Filmas 2',
    year: 2002,
  },
  {
    title: 'Filmas 3',
    year: 2003,
  },
  {
    title: 'Filmas 4',
    year: 2004,
  },
];

console.log(movies[0])
console.log(movies[0].title)
console.log(movies[0].year)

console.log(movies[1])
console.log(movies[1].title)
console.log(movies[1].year)

console.log(movies[2])
console.log(movies[2].title)
console.log(movies[2].year)

console.log(movies[3])
console.log(movies[3].title)
console.log(movies[3].year)

console.log(movies);

movies.map((movie) => {
  console.log(movie);
  console.log(movie.title);
  console.log(movie.year);
})

for (let i = 0; i < movies.length; i++) {
  console.log(movies[i]);
  console.log(movies[i].title);
  console.log(movies[i].year);
}

let filteredMovies = movies.filter((movie) => {
  console.log(movie);
  console.log(movie.year);
  console.log(movie.year > 2002);
  return movie.year > 2002;
})
console.log(filteredMovies);

console.groupEnd();

console.log(studentObj.isActive);
studentObj.setStudentInactive();
console.log(studentObj.isActive);
studentObj.setStudentIsActive();
console.log(studentObj.isActive);
studentObj.switchStudentActivity();
console.log(studentObj.isActive);
studentObj.switchStudentActivity();
console.log(studentObj.isActive);
studentObj.switchStudentActivity();
studentObj.switchStudentActivity();
console.log(studentObj.isActive);

studentObj.getAllHobbies = function() {
  let output = `Hobbies: ${this.hobbies.join(', ')}.`;
  return output;
}

console.log(studentObj.getAllHobbies());

studentObj.addHobby = function(newHobby) {
  this.hobbies.push(newHobby);
  return this.hobbies;
}

console.log(studentObj.hobbies);
console.log(studentObj.addHobby('Swimming'));
console.log(studentObj.hobbies);

studentObj.removeHobby('Traveling');
console.log(studentObj.hobbies);