//Activating Strict Mode
//Forbids us to do small errors and bugs that could be 
//done in regular JS and make silent errors
/* 'use strict';

let hasDriversLicense = false;
const passTest = true; */

//---Uncaught ReferenceError: hasDriverLicense is not defined
/* if(passTest) hasDriverLicense = true;
if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive'); */

//---Uncaught SyntaxError: Unexpected strict mode reserved word
/* const interface = 'audio';
const private = '534'; */

// Function Definition
/* function logger(){
  console.log('My name is Kishan')
}

// Calling the function
logger();

function fruitProcessor(apples, oranges){
  const APPLE = apples
  const ORANGE = oranges
  const JUICE = `Juice with ${apples} apples and ${oranges} oranges`;
  const STRENGTH = Math.max(apples, oranges);
  const STRONG  = (apples > oranges)? 'apple-ish' : 'orangey';
  console.log(`The juice is more ${STRONG} because it has ${apples} apples and ${oranges} oranges`)
}

fruitProcessor(5, 2) */

///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration
/* function calcAge(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge(1991);

// Function expression
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}
const age2 = calcAge(1991);

console.log(age1, age2); */


///////////////////////////////////////
// Arrow functions

/* const calcAge = birthYeah => 2037 - birthYeah;
const age3 = calcAge(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob'));
 */

///////////////////////////////////////
// Functions Calling Other Functions
/* function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3)); */


///////////////////////////////////////
// Reviewing Functions
/* const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}

const yearsUntilRetirement2 = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
}

console.log(yearsUntilRetirement2(1991, 'Jonas'));
console.log(yearsUntilRetirement2(1950, 'Mike')); */


///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

/* 
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
 */

///////////////////////////////////////
// Introduction to Arrays

/* const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age21 = calcAge(years[0]);
const age22 = calcAge(years[1]);
const age23 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
 */

///////////////////////////////////////
// Basic Functions of Arrays 

/* 
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

//Add Elements to the back
const newfriends = friends.push('Jay');
console.log(friends);

//Add Elements to the front
friends.unshift('John');
console.log(friends);

//Remove Elements
friends.pop();// removes the last value
console.log(friends);

//Store the popped value
const popped = friends.pop();
console.log(popped);
console.log(friends);

//Remove the first element();
friends.shift();
console.log(friends);

//Find index of a value
const stevenIndex = friends.indexOf('Steven');
console.log(stevenIndex);

//Will output -1 because there is no Jay in the friends array right now
console.log(friends.indexOf('Jay'));

//Checking is a array includes a value
console.log(friends.includes('Michael')) // true
console.log(friends.includes('michael')) // false
//This is because includes checks with strict equality i.e. "==="

 */

////////////////////////////////////
// Objects

//Intuitiely required to know the index of different types of info
//Order of specification matters for retrieval
/* 
const kArray = [
  'Kishan', //firstName
  'Ramesh', //lastName
  2037-2000, //age
  'UI/UX Designer', //job
  ['Lemyson', 'Vishal'] //friends
];
 */

//Objects contain key : value pair which make it mre accessible than arrays.
//Order of specification doesn't matters for retrieval

/* 
const rkishan = {
firstName : 'Kishan',
  lastname : 'Ramesh',
  age : 2037-2000,
  job : 'UI/UX Designer',
  friends : ['Lemyson', 'Vishal']
} 
*/

/////////////////////////////////////
// Dots vs Brackets Notation

const rkishan = {
  firstName : 'Kishan',
    lastName : 'Ramesh',
    age : 2037-2000,
    job : 'UI/UX Designer',
    friends : ['Lemyson', 'Vishal']
  } 

console.log(rkishan.lastName);

console.log(rkishan['firstName']+rkishan['lastName']);

const nameKey = 'Name';

console.log(rkishan['first'+nameKey]);
console.log(rkishan['last'+nameKey]);

/* The key difference bw the dot notation and the bracket notation is that, the bracket notation
expects an expression inside so in instances where you need to compute a key, you can use it. and on other
situations you can the dot Notation */

const interestedIn = prompt('What do you wanna know about me? \nChoose bw \nFirst Name\nLast Name\nAge\nJob\nFriends');
console.log(interestedIn);

console.log(rkishan[interestedIn]);

