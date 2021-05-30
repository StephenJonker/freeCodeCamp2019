/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sun 30 May 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Functional Programming
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Functional Programming
	- Task: Remove Elements from an Array Using slice Instead of splice
*/

console.log("FCC - Javascript and Algorithms - Functional Programming");

// Goal: 
// Rewrite the function nonMutatingSplice by using slice instead of splice. It 
// should limit the provided cities array to a length of 3, and return a new array 
// with only the first three items.
// 
// Do not mutate the original array provided to the function.

function nonMutatingSplice(cities) {
	// Only change code below this line
	// return cities.splice(3);
	return cities.slice(0,3);
	// Only change code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
let res = nonMutatingSplice(inputCities);

console.log("Value in res is: " + JSON.stringify(res) + " EXPECT: [\"Chicago\",\"Delhi\",\"Islamabad\"]");

// EOF
