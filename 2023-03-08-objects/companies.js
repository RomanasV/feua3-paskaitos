// UŽDUOTIS:
// 1. Naudojant Object() metodą sukurti kintamąjį įmonei apibūdinti.
// let company1 = {};
let company1 = new Object();

// 2. Prie objekto pridėti:
// 2.1. Property „company name" ir priskirti įmonės pavadinimo reikšmę.
company1['company name'] = 'Company ABC';

// 2.2. Property „opened" ir priskirti įmonės įkūrimo metų reikšmę.
company1.opened = 2005;

// 2.3. Property „companyCode" ir priskirti įmonės kodo reikšmę.
company1.code = 4646465464;

// 2.4. Property „employees" ir priskirti įmonėje dirbančių darbuotojų kiekio reikšmę.
company1.employees = 20;

// 2.5. Property „ceo" ir priskirti įmonės vadovo reikšmę.
company1.ceo = 'John Doe';

// 2.6. Property „nvo" ir priskirti boolean reikšmę (ar įmonė turi NVO statusą).
company1.nvo = false;

// 2.7. Property „workingLocation" ir priskirti įmonės veiklos šalių value (turi būti bent 2 veiklos šalys).
company1.workingLocations = ['Lithuania', 'Poland'];

// 2.8. Property „activityAreas" ir priskirti įmonės veiklos sričių reikšmę (turi būti bent dvi veiklos sritys).
company1.activityAreas = ['Tourism', 'Marketing'];

// 2.9. Property „contacts", kuris turės:
// company1.contacts = {
//   phone: 370456455654,
//   email: 'info@abc.lt',
//   address: {
//     country: 'Lithuania',
//     city: 'Vilnius',
//     street: 'Vilniaus st.',
//     apartment: 15
//   }
// };

// company1.contacts = new Object();
company1.contacts = {};

//       2.9.1. „phone"
company1.contacts.phone = 370456455654;

//       2.9.2. „email"
company1.contacts.email = 'info@abc.lt';

//       2.9.3. „address", kuris turės:
company1.contacts.address = {};

//           2.9.3.1. „country"
company1.contacts.address.country = 'Lithuania';

//           2.9.3.2. „city"
company1.contacts.address.city = 'Vilnius';

//           2.9.3.3. „street"
company1.contacts.address.street = 'Vilniaus st.';

//           2.9.3.4. „apartment"
company1.contacts.address.apartment = 15;

company1.subsidiaries = [];

// 5. Sukurti funkciją, kuri sukuria adreso string'ą: „Vilniaus st. 15, Vilnius, Lithuania.".
company1.getAddress = function() {
  let fullAddress = `${this.contacts.address.street} ${this.contacts.address.apartment}, ${this.contacts.address.city}, ${this.contacts.address.country}.`;
  return fullAddress;
}
console.log(company1.getAddress());

// 6. Sukurti dvi funkcijas, kurios:
//        6.1. Pakeičia NVO statusą į true.
company1.setNVO = function() {
  this.nvo = true;
}

console.log(company1.nvo);
company1.setNVO();
console.log(company1.nvo);

//        6.2. Pakeičia NVO statusą į false.
company1.setNonNVO = function() {
  this.nvo = false;
}

company1.setNonNVO();
console.log(company1.nvo);

//        6.3. BONUS, sukurti funkciją, kuri keičia NVO statusą iš true į false ir iš false į true.
company1.switchNVO = function() {
  this.nvo = !this.nvo;
}

company1.switchNVO();
console.log(company1.nvo);
company1.switchNVO();
console.log(company1.nvo);

// 7. Sukurti funkcijas, kurios grąžina:
//        7.1. Šalis, kuriose veikia įmonė į vieną string'ą.
company1.getWorkingLocations = function() {
  let workingLocationsText = `Company is working in: ${this.workingLocations.join(', ')}.`;
  return workingLocationsText;
}

console.log(company1.getWorkingLocations());

//        7.2. Veiklos sritis, kuriose veikia įmonė į vieną string'ą.
company1.getActivityAreas = function() {
  return `Activity areas: ${this.activityAreas.join(', ')}.`;
}

console.log(company1.getActivityAreas());

// 8. Sukurti funkcijas, kurios prideda:
//        8.1. Naują veiklos šalį prie šalių masyvo.
company1.addNewWorkingLocation = function(newLocation) {
  this.workingLocations.push(newLocation);
}

console.log(company1.workingLocations);
company1.addNewWorkingLocation('France');
console.log(company1.workingLocations);

//        8.2. Naują veiklos rūšį prie veiklų masyvo.
company1.addNewActivityArea = function(newArea) {
  this.activityAreas.push(newArea);
}

console.log(company1.activityAreas);
company1.addNewActivityArea('B2B Sales');
console.log(company1.activityAreas);

// 9. Sukurti funkcijas, kurios pašalina:
//        9.1. Veiklos šalį iš šalių masyvo.
company1.removeWorkingArea = function(locationToRemove) {
  let updatedLocations = this.workingLocations.filter(location => location !== locationToRemove);
  this.workingLocations = updatedLocations;
}

console.log(company1.workingLocations);
company1.removeWorkingArea('France');
company1.removeWorkingArea('Poland');
console.log(company1.workingLocations);

//        9.2. Veiklos rūšį iš veiklų masyvo.
company1.removeActivityArea = function(areaToRemove) {
  this.activityAreas = this.activityAreas.filter(area => area !== areaToRemove);
}

console.log(company1.activityAreas);
company1.removeActivityArea('B2B Sales');
console.log(company1.activityAreas);

console.log(company1);

let company2 = {
  'company name': 'Company XYZ',
  opened: 2010,
  code: 45465464,
  employees: 10,
  ceo: 'Doe John',
  nvo: true,
  workingLocations: ['Lithuania', 'Germany'],
  activityAreas: ['Marketing'],
  contacts: {
    phone: 3704513131,
    email: 'info@xyz.lt',
    address: {
      country: 'Lithuania',
      city: 'Kaunas',
      street: 'Kauno st.',
      apartment: 10
    }
  },
  subsidiaries: [company1],
  getAddress() {
    let fullAddress = `${this.contacts.address.street} ${this.contacts.address.apartment}, ${this.contacts.address.city}, ${this.contacts.address.country}.`;
    return fullAddress;
  },
  setNVO() {
    this.nvo = true;
  },
  setNonNVO() {
    this.nvo = false;
  },
  switchNVO() {
    this.nvo = !this.nvo;
  },
  getWorkingLocations() {
    let workingLocationsText = `Company is working in: ${this.workingLocations.join(', ')}.`;
    return workingLocationsText;
  },
  getActivityAreas() {
    return `Activity areas: ${this.activityAreas.join(', ')}.`;
  },
  addNewWorkingLocation(newLocation) {
    this.workingLocations.push(newLocation);
  },
  addNewActivityArea(newArea) {
    this.activityAreas.push(newArea);
  },
  removeWorkingArea(locationToRemove) {
    let updatedLocations = this.workingLocations.filter(location => location !== locationToRemove);
    this.workingLocations = updatedLocations;
  },
  removeActivityArea(areaToRemove) {
    this.activityAreas = this.activityAreas.filter(area => area !== areaToRemove);
  }
}

// console.log(company1);
// console.log(company2);
