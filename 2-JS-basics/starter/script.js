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

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge

console.log(isFullAge)
