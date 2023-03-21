const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const h4 = document.querySelector('h4');
const h5 = document.querySelector('h5');

h1.addEventListener('click', () => {
  h1.style.backgroundColor = 'pink';
  h1.style.color = 'green';
  h1.textContent = 'Clicked';
});

h2.addEventListener('click', function(){
  h2.style.fontSize = '50px';
});

h3.addEventListener('click', () => {
  h3.style.color = 'purple';
  h1.style.color = 'purple';
});

// h4.addEventListener('click', () => {
//   h1.style.border = '5px solid orange';
// })

// h5.addEventListener('click', () => {
//   h1.style.border = '5px solid orange';
// })

// h4.addEventListener('click', () => {
//   changeBorders();
// })

// h5.addEventListener('click', () => {
//   changeBorders();
// })

// h4.addEventListener('click', () => changeBorders());
// h5.addEventListener('click', () => changeBorders());

h4.addEventListener('click', changeBorders);
h5.addEventListener('click', changeBorders);

function changeBorders() {
  h1.style.border = '5px solid orange';
  h2.style.border = '10px dotted green';

  setTimeout(function() {
    h1.style.border = 'none';
    h2.style.border = 'none';
  }, 1000);
}