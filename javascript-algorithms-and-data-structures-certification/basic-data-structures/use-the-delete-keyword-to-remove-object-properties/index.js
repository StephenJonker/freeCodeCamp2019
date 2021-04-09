/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Fri 9 April 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic data structures 
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic data structures
	- Task: Use the delete Keyword to Remove Object Properties
*/

console.log("FCC - Javascript and Algorithms - basic data structures");

// Goal: 
// Use the delete keyword to remove the oranges, plums, and strawberries 
// keys from the foods object.
//
// Here we will see how we can remove a key-value pair from an object.
// Let's revisit our foods object example one last time. If we wanted 
// to remove the apples key, we can remove it by using the delete keyword like this:
// delete foods.apples;

let foods = {
	apples: 25,
	oranges: 32,
	plums: 28,
	bananas: 13,
	grapes: 35,
	strawberries: 27
  };
  
// Only change code below this line
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
// Only change code above this line
  
console.log(foods);
console.log("Expect { apples: 25, bananas: 13, grapes: 35 }");
// EOF
