import { Card } from "../components/Card/Card.js";
import { renderElement } from "./utils.js";

console.clear();

const EXAMPLE_DATA = {
  name: "Luke Skywalker",
  height: "172",
  mass: "77",
  hairColor: "blond",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "19BBY",
  gender: "male",
  homeworld: "https://swapi.dev/api/planets/1/",
  films: [
    "https://swapi.dev/api/films/1/",
    "https://swapi.dev/api/films/2/",
    "https://swapi.dev/api/films/3/",
    "https://swapi.dev/api/films/6/",
  ],
  species: [],
  vehicles: [
    "https://swapi.dev/api/vehicles/14/",
    "https://swapi.dev/api/vehicles/30/",
  ],
  starships: [
    "https://swapi.dev/api/starships/12/",
    "https://swapi.dev/api/starships/22/",
  ],
  created: "2014-12-09T13:50:51.644000Z",
  edited: "2014-12-20T21:17:56.891000Z",
  url: "https://swapi.dev/api/people/1/",
};

// Create dom element for a card and append it to the root
const url = "https://swapi.py4e.com/api/people";

const firstCard = Card(EXAMPLE_DATA);
renderElement(firstCard);

fetchDataAndRender();

// --v-- your code below this line --v--

// variant 1

async function fetchDataAndRender() {
  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  console.log(data);
  // const R2_D2 = Card(data.results[2]);
  // renderElement(R2_D2);
  data.results.forEach((character) => {
    const characterCard = Card(character);
    renderElement(characterCard);
  });
}

// variant 2
// async function fetchData() {
//   const response = await fetch(URL);
//   const data = await response.json();
//   console.log(data);

//   return data;
// }

// function renderAllCards(characters) {
//   characters.forEach((character) => renderCard(character));
// }

// function renderCard(cardData) {
//   const card = Card(cardData);
//   renderElement(card);
// }

// async function fetchDataAndRender2() {
//   try {
//     const swapiData = await fetchData();
//     renderAllCards(swapiData.results);
//   } catch (error) {
//     console.error(error);
//   }
// }
