// Kintamojo sukūrimas:
// 1. Iniciavimo žodelis (var, let, const)
// 2. Kintamojo pavadinimas
// 3. Lygybės ženklas
// 4. Kintamojo vertė

var vardas = "John"; // String (tekstas) tipo kintamasis
let pavarde = 'Doe'; // String (tekstas) tipo kintamasis
let miestas = `Kaunas`; // String (tekstas) tipo kintamasis
const asmensKodas = 389879798797; // Number (skaičius) tipo kintamasis
let amzius = 28; // Number (skaičius) tipo kintamasis
let yraStudentas = true; // Boolean (true/false) tipo kintamasis

console.log(vardas);
console.log(pavarde);
console.log(asmensKodas);
console.log(miestas);
console.log(amzius);
amzius = 29;
console.log(amzius);

vardas = 'Steve';
console.log(vardas);

// typeof parodo kokio tai tipo duomenys
console.log(typeof vardas);
console.log(typeof asmensKodas);
console.log(typeof yraStudentas);

console.log('Hello, ' + vardas + ' ' + pavarde + '.');

// John Doe (amžius 25 m.), asmens kodas: 37878787878, gyvenamasis miestas: Kaunas.

console.log('John Doe (amžius 25 m.), asmens kodas: 37878787878, gyvenamasis miestas: Kaunas.');