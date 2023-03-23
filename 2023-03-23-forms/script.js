function init() {
  const studentForm = document.getElementById('student-form');

  studentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.target;
    
    // const personName = document.querySelector('#person-name').value;
    // const personName = document.getElementById('person-name').value;
    // const personName = document.getElementsByName('name')[0].value;
    // const personName = document.querySelector('[name="name"]').value;

    // const personName = form.querySelector('#person-name').value;
    // const personName = form.querySelector('[name="name"]').value;
    
    // const { name, surname, age, group } = form;

    const personName = form.name.value;

    console.log(personName);
  });
}

init();
