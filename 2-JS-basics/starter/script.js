/****************************************
* Variables and Datatypes
*/

//
// var firstName = 'John';
// console.log(firstName);
//
// var lastName = 'Smith';
// var age = 28;
//
// var fullAge = true;
//
// console.log(fullAge);
//
// var job;
// console.log(job);
//
// job = 'Teacher';
// console.log(job);

// *****************************************
// Variable mutation and type coercion

// var firstName = 'John';
// var age = 28;
//
// console.log(firstName + " " + age)
//
// var job, isMarried;
// job = 'Teacher';
// isMarried = false;
//
// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)
//
// //  Variable mutation
//
// age = 'twenty eight';
// job = 'driver';
// // popup alert
// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)
//
// // prompt for input
// var lastName = prompt('What is his last name?')
// console.log(firstName + " " + lastName)


/*************************************
* Basic Operators
*/

// var now, yearJohn, yearMark
// now = 2018
// ageJohn =28;
// ageMark = 33;
//
// // Math Operators
// yearJohn = now - 28;
// yearMark = now - 33;
//
// console.log(yearJohn);
//
// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 2);
//
// // Logical Operators
// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);
//
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);
//
// // typeof operator
// console.log(typeof johnOlder)
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older than John');
// console.log(typeof x)


/**********************************
* Operator Precedence
*/
// // Multiple Operators
// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;
//
// var isFullAge = now - yearJohn >= fullAge;
//
// console.log(isFullAge);
//
// // Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 45;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);
//
// // Multiple Assignments
// var x, y;
// x = y = (3+5)*4-6;
// console.log(x, y);
//
// // More Operators
//
// // x = x * 2
// // or
// x *= 2
// console.log(x);
//
// x += 10;
// console.log(x);
//
// x++;
// // or x _= 1;
// console.log(x);


/*****************************************
* Code Challenge
*/

// var johnMass = 200;
// var johnHeight = 72;
//
// var markMass = 180;
// var markHeight =  68;
//
// var markBmi = markMass / (markHeight*markHeight)
// var johnBmi = johnMass / (johnHeight*johnHeight)
//
// var x = markBmi > johnBmi
//
// console.log('Is Marks BMI greater than Johns? ' + x)

/*****************************************
* If / Else Statements
*/

// var firstName = 'John';
// var civilStatus = 'single';
//
// if (civilStatus === 'married') {
//   console.log(firstName + ' is married');
// } else {
//   console.log(firstName +' will hopefully marry soon');
// }


/*****************************************
* Booleans
*/

// var firstName = 'John';
// var age = 16;
//
// if(age < 13) {
//   console.log(firstName + " is a boy!");
// } else if( age >= 13 && age < 20) {
//   console.log(firstName + " is a teenager!");
// } else {
//   console.log(firstName + " is a boy!");
// }


/*****************************************
* Ternary Operator and Switch Statements
*/
// ternary Operator
var firstName = 'John';
var age = 16;

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.')

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// Switch Statements

var job = 'teacher';
switch (job) {
  case 'teacher':
  case 'instructor':
  console.log(firstName + ' teaches kids how to code.');
  case 'driver':
  console.log(firstName + ' drives an Uber');
  case 'designer':
  console.log(firstName + ' designs beautiful websites');
  default:
  case 'teacher':
  console.log(firstName + ' does something else.')
}

// make if/else statement work with ranges
age = 56;
switch (true) {
  case age < 13:
  console.log(firstName + ' is a bnoy.');
  break;
  case age >= 13 && age < 20:
  console.log(firstName + ' is a teenager');
  break;
  case age >= 20 && age < 20:
  console.log(firstName + ' is a young man;')
  break;
  default:
  console.log(firstName + ' is a man.')
}
