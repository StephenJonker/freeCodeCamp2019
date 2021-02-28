/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sun 28 Feb 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - es6  
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: es6
	- Task: Use Destructuring Assignment to Assign Variables from Objects
*/

console.log("FCC - Javascript and Algorithms - es6");

// Goal: 
// Replace the two assignments with an equivalent destructuring 
// assignment. It should still assign the variables highToday and 
// highTomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.

const HIGH_TEMPERATURES = {
	yesterday: 75,
	today: 77,
	tomorrow: 80
  };
  
  // Only change code below this line
	
  // const highToday = HIGH_TEMPERATURES.today;
  // const highTomorrow = HIGH_TEMPERATURES.tomorrow; 
 
  const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

  // Only change code above this line

console.log("Value of highToday is: " + highToday + " Expect 77");
console.log("Value of highTomorrow is: " + highTomorrow + " Expect 80");

// let res = "<tbd>"; 
// console.log("The value in variable res is: " + res + " Expect <tbd> ");

// EOF
