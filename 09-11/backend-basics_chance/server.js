import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();

// export const server = …
export const server = createServer((request, response) => {
  response.statusCode = 200;
  const name = chance.name();
  const age = chance.age();
  const profession = chance.profession();
  const responseText = `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`;
  response.end(responseText);
});
