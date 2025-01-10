// --- Values and Variables ---

console.log("Values and Variables");
console.log(" ");

let country = "Sri Lanka";
let continent = "Asia";
let population = 22.04;

console.log(country);
console.log(continent);
console.log(population + " million");

// --- Data Types ---

console.log(" ");
console.log("Data Types");
console.log(" ");

let isIsland = true;
let language;

console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);

// --- let, const and var ---

console.log(" ");
console.log("let, const and var");
console.log(" ");

language = "Sinhala, Tamil and English";
const COUNTRY = "Sri Lanka";
const CONTINENT = "Asia";
const ISISLAND = true;

console.log(COUNTRY);
console.log(CONTINENT);
console.log(ISISLAND);
console.log(language);

// COUNTRY = 'Australia' -> Error

// --- Basic Operators ---

console.log(" ");
console.log("Basic Operators");
console.log(" ");

let populationHalf = population / 2;

populationHalf++;

console.log(populationHalf + " million");

console.log(population > 6);
console.log(population < 33);

const description =
  country +
  " is in " +
  continent +
  ", its " +
  population +
  " million people speak " +
  language;

console.log(description);

// --- Strings and Template Literals ---

console.log(" ");
console.log("Strings and Template Literals");
console.log(" ");

const litDescrip = `${country} is in ${continent}, its ${population} million people speak ${language}`;
console.log(litDescrip);
