/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Tue 2 Mar 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - es6  
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: es6
	- Task: Use Destructuring Assignment to Assign Variables from Nested Objects
*/

console.log("FCC - Javascript and Algorithms - es6");

// Goal: 
// Replace the two assignments with an equivalent destructuring 
// assignment. It should still assign the variables lowToday and 
// highToday the values of today.low and today.high from 
// the LOCAL_FORECAST object.

const LOCAL_FORECAST = {
	yesterday: { low: 61, high: 75 },
	today: { low: 64, high: 77 },
	tomorrow: { low: 68, high: 80 }
  };
  
  // Only change code below this line
	
  // const lowToday = LOCAL_FORECAST.today.low;
  // const highToday = LOCAL_FORECAST.today.high;
  
  const { today: { low: lowToday, high: highToday}  } = LOCAL_FORECAST;

  // Only change code above this line

console.log("Value in lowToday is: " + lowToday + " Expect 64");
console.log("Value in highToday is: " + highToday + " Expect 77");

// let res = "<tbd>"; 
// console.log("The value in variable res is: " + res + " Expect <tbd> ");

// EOF
