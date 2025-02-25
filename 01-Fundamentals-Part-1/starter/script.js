/*let js = "Amazing";
console.log(11 + 56 + 98);

/////////////////////////////////
///Values and Variables

console.log('Jonas');//Value
console.log(23)//Value

let firstName = 'Jonas'; //DECLARING a variable and assigned "Jonas" value to it
console.log(firstName);

firstName = 'Matilda'
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(" ");


const PI = 3.1415;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

*/
/*
let jsIsFun = true;
console.log(jsIsFun);

// console.log(typeof true);
 console.log(typeof jsIsFun);
// console.log(typeof 22);
// console.log(typeof 'Jonas');

jsIsFun = 'YES';
console.log(typeof jsIsFun);

let year=2000 ;
console.log(typeof year);

console.log(typeof null);

*/
/*
//Use let to define variables that you will or would change in the future of the code
let age; // <- declaring a variable
age = 23;// <- initializing the variable
age = 24;// <- mutating the variable

//Use const to define variables that you won't change in the future of the code
const BIRTHYEAR = 2000; // immutable variable i.e cannot change the variable;

const JOB; // ERROR

*/
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean());
console.log(Boolean(NaN));

let money;
if (money) {
  console.log("Mo money");
} else {
  console.log("No money");
}

/////////////////////////////////
///The switch statement

/* switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
} */

day = 'monday'

if (day == "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day == 'tuesday'){
  console.log('Prepare theory videos');
} else if (day == 'wednesday || thursday'){
  console.log('Write code examples');
} else if (day == 'tuesday'){
  console.log('Record videos');
} else if (day == 'tuesday'){
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}

