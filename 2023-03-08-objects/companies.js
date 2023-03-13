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
}

console.log(company1);
console.log(company2);
