// --- Javascript Fundamental Part 1 ---

console.log(" ");
console.log("Javascript Fundamental Part 1");

// --- Values and Variables ---
console.log(" ");
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

language = "English";
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

// --- Type Conversion and Coercion ---

console.log(" ");
console.log("Type Conversion and Coercion");
console.log(" ");

console.log("9" - "5"); // -> ? 4
console.log("19" - "13" + "17"); // -> ? '617'
console.log("19" - "13" + 17); // -> ? 23
console.log("123" < 57); // -> ? false
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> ? 1143

// --- Equality Operators: == vs. === ---

console.log(" ");
console.log("Equality Operators: == vs. ===");
console.log(" ");

const numNeighbor = 0; //prompt('How many neighbors countries does your country have?');

if (Number(numNeighbor) === 1) {
  console.log("Only 1 border!");
} else if (String(numNeighbor) >= 1) {
  console.log("More than one border!");
} else {
  console.log("No borders!");
}

// This code segment has strict equal but since the prompt generates string variables as the input
//"1"(<- string ) === 1(<- number )

/* if (numNeighbor === 1){
  console.log("Only 1 border!");
} else if (numNeighbor >= 1){
  console.log("More than one border!");
}else {
  console.log("No borders!");
} */

// --- The Conditional (Ternary) Operator ---

console.log(" ");
console.log("The Conditional (Ternary) Operator");
console.log(" ");

if (population <= 50 && !isIsland && language == "English") {
  console.log("You should live in Sri Lanka");
} else {
  console.log("You should not live in Sri Lanka");
}

switch (language) {
  case "Mandarin":
  case "Chinese":
    console.log("Most number of native speakers");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "English":
    console.log("3rd place in number of native speakers");
    break;
  case "Hindi":
    console.log("Number 4 in number of native speakers");
    break;
  case "Arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great Language Too :D");
    break;
}

// --- The Conditional (Ternary) Operator ---

console.log(" ");
console.log("The Conditional (Ternary) Operator");
console.log(" ");

console.log(
  `${COUNTRY}'s population is ${population > 33 ? "above" : "below"} average`
);
