/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sat 27 Feb 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - es6  
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: es6
	- Task: Use Destructuring Assignment to Extract Values from Objects
*/

console.log("FCC - Javascript and Algorithms - es6");

// Goal: 
// Replace the two assignments with an equivalent destructuring 
// assignment. It should still assign the variables today and tomorrow 
// the values of today and tomorrow from the HIGH_TEMPERATURES object.

const HIGH_TEMPERATURES = {
	yesterday: 75,
	today: 77,
	tomorrow: 80
};
  
  // Only change code below this line
  
  // const today = HIGH_TEMPERATURES.today;
  // const tomorrow = HIGH_TEMPERATURES.tomorrow;
  
  // this next line will not work
  const { today, tomorrow, yesterday } = HIGH_TEMPERATURES;
  // Only change code above this line

console.log("today is: " + today + " Expect today = 77");
console.log("tomorrow is: " + tomorrow + " Expect tomorrow = 80");
console.log("yesterday is: " + yesterday + " Expect yesterday = 75");

let res = "<tbd>"; 
console.log("The value in variable res is: " + res + " Expect <tbd> ");

// EOF
