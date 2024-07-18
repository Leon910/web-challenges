const displayCountPeople = document.querySelector(`[data-js="people-count"]`);
const includeUl = document.querySelector(`[data-js="include-ul"]`);

async function fetchData() {
  const response = await fetch("http://api.open-notify.org/astros.json");
  const data = await response.json();
  displayCountPeople.textContent = data.number;

  const unorderedList = document.createElement("ul");
  includeUl.appendChild(unorderedList);

  const people = data.people;
  people.forEach((person) => {
    const listItem = document.createElement("li");
    listItem.textContent = person.name;
    unorderedList.appendChild(listItem);
  });

  const divContainer = document.createElement("div");
  divContainer.dataset.js = "div-container";
  includeUl.appendChild(divContainer);

  const buttonAll = document.createElement("button");
  const buttonISS = document.createElement("button");
  const buttonTiangong = document.createElement("button");

  divContainer.appendChild(buttonAll);
  divContainer.appendChild(buttonISS);
  divContainer.appendChild(buttonTiangong);

  buttonAll.textContent = "All";
  buttonISS.textContent = "ISS";
  buttonTiangong.textContent = "Tiangong";

  buttonAll.addEventListener("click", () => {
    const peopleOnAll = people.filter((person) => person.craft === "All");
    divContainer.appendChild(peopleOnAll);
  });

  buttonISS.addEventListener("click", () => {
    const peopleOnIss = people.filter((person) => person.craft === "ISS");
    divContainer.appendChild(peopleOnAll);
  });

  buttonTiangong.addEventListener("click", () => {
    const peopleOnTiangong = people.filter(
      (person) => person.craft === "Tiangong"
    );
    divContainer.appendChild(peopleOnAll);
  });

  //For Each Method
}

fetchData();
