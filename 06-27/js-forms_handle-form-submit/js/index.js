console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  console.log(formData);

  const object = Object.fromEntries(formData);
  console.log(object);

  const sum = Number(object.age) + Number(object.badness);
  console.log(`The age-badness-sum of ${object.firstName} is ${sum}`);

  const formElements = event.target.elements;
  formElements.firstName.focus();

  event.target.reset();
});

//Bonus
