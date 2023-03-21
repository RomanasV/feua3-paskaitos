// Paselektinti HTML elementą
let paragraph = document.querySelector('p');
paragraph.textContent = 'Labas';
paragraph.innerHTML = 'Labas <span>vakaras</span>';

// Sukurti HTML elementą
let spanElement = document.createElement('span');
spanElement.textContent = '!';
spanElement.style.color = 'red';

// Append - prideda su JS sukurtą HTML elementą (node) į kito elemento pabaigą
paragraph.append(spanElement);

// Prepend - prideda su JS sukurtą HTML elementą (node) į kito elemento pradžią
paragraph.prepend(spanElement);

// After - prideda su JS sukurtą HTML elemntą (node) po kitu elementu (šalia kito elemento)
paragraph.after(spanElement);

// Before - prideda su JS sukurtą HTML elementą (node) prieš kitą elementą (šalia kito elemento)
paragraph.before(spanElement);

// Remove - pašalina HTML elementą
spanElement.remove();

// console.log(paragraph.textContent)
// let splitText = paragraph.textContent.split(' ');
// console.log(splitText)

// console.log(splitText[0])
// console.log(spanElement)
// console.log(splitText[1])

// paragraph.textContent = ''

// // paragraph.append(splitText[0])
// // paragraph.append(spanElement)
// // paragraph.append(splitText[1])

// paragraph.append(splitText[0], spanElement, splitText[1])

let newParagraph = document.createElement('p')
newParagraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti impedit minus porro incidunt veritatis beatae totam ratione libero, similique veniam. At explicabo pariatur aliquam id expedita voluptatum tempora dolorem ad.';
paragraph.after(newParagraph);

// Būdas pakeisti HTML elemento klases
newParagraph.className = 'pirma-klase antra-klase';
console.log(newParagraph.className);

// newParagraph.className = 'trecia-klase';
// newParagraph.className = newParagraph.className + ' trecia-klase';
newParagraph.className += ' trecia-klase';

// Prideda klasę prie HTML elemento
newParagraph.classList.add('ketvirta-klase');
newParagraph.classList.add('penkta-klase', 'sesta-klase');
newParagraph.classList.add('ketvirta-klase');

// Pašalina klasę iš HTML elemento
newParagraph.classList.remove('pirma-klase');
newParagraph.classList.remove('antra-klase', 'sesta-klase');
newParagraph.classList.remove('pirma-klase');

// Pakeičia klasę HTML elemente
newParagraph.classList.replace('ketvirta-klase', 'pirma-klase');

// Prideda klasę prie HTML elemento, jeigu tokios klasės dar neturi ir pašalina jeigu tokią klasę jau turi
newParagraph.classList.toggle('toggle-klase');
newParagraph.classList.toggle('toggle-klase');

let switchButton = document.createElement('button');
switchButton.textContent = 'Switch';
paragraph.before(switchButton);

switchButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

// Patikrina ar HTML elementas turi nurodytą klasę (grąžina true arba false)
console.log(newParagraph.classList.contains('pirma-klase'))
console.log(newParagraph.classList.contains('pirma'))

// Keičia (arba prideda) HTML elemento ID
newParagraph.id = 'paragrafo-id';
console.log(newParagraph.id);

let link = document.createElement('a');
link.textContent = 'nuodora';
newParagraph.after(link);

// link.href = 'https://www.google.com';
// link.target = '_blank';
// link.title = 'cia yra nuoroda';

link.setAttribute('href', 'https://www.google.com');
link.setAttribute('target', '_blank');
link.setAttribute('title', 'cia yra nuoroda');
link.setAttribute('class', 'nuorodos-klase');
link.setAttribute('class', 'antra-nuorodos-klase');
link.setAttribute('id', 'nuorodos-id');

console.log(link.getAttribute('href'));
console.log(link.href);

link.removeAttribute('class');

link.style.border = '1px solid black';
link.style.padding = '5px 10px';
link.style.fontSize = '20px';

link.style = `color: red;
              border: 1px solid black;
              padding: 5px 10px;
              font-size: 20px;`;