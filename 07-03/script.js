function generateEmail(newUser) {
  return `${newUser.firstName.toLowerCase()}.${newUser.lastName.toLowerCase()}@example.com`;
}

const newUser = {
  firstName: "Leon",
  lastName: "Fricke",
};

const newMail = generateEmail(newUser);
console.log(newMail);

const form = document.querySelector('[data-js="form-data"]');
const first = document.querySelector('[data-js="first-name"]');
const last = document.querySelector('[data-js="last-name"]');
const spanQuery = document.querySelector('[data-js="generated-email"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElement = event.target;

  const formData = new FormData(formElement);
  const data = Object.fromEntries(formData);
  console.log(formData);
  console.log(data);

  const firstName = first.value;
  const lastName = last.value;

  const creationMail = generateEmail({
    firstName: firstName,
    lastName: lastName,
  });

  console.log(creationMail);
  spanQuery.textContent = creationMail;
});

// function getUserFromEmail(email) {
//   if (!email.includes("@")) {
//     return null;
//   } else {
//     email.split("@")[0];
//   }

//   if (!email.includes(".")) {
//     return null;
//   } else {
//     return email;
//   }
// }

// // if the email does not contain a @, return null
// // if it does, split the email at @ and take the first entry in consideration
// // if such part does not have a ., return null
// // if it does, you know what you have to do!

// // logs null
// console.log(getUserFromEmail("not an email address"));

// // logs null
// console.log(getUserFromEmail("nodots@example.com"));

// // logs { firstName: 'Jane', lastName: 'Doe' }
// console.log(getUserFromEmail("jane.doe@example.com"));
