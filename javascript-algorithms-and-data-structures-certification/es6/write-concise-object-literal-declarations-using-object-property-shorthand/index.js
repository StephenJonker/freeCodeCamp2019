/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Thu 4 Mar 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - es6  
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: es6
	- Task: Write Concise Object Literal Declarations Using Object Property Shorthand
*/

console.log("FCC - Javascript and Algorithms - es6");

// Goal: 
// Use object property shorthand with object literals to 
// create and return an object with name, age and gender properties.
//
// More example code
// const getMousePosition = (x, y) => ({ x, y });
//

// Original code, pre-convertion
//
// const createPerson = (name, age, gender) => {
// 	// Only change code below this line
// 	return {
// 	  name: name,
// 	  age: age,
// 	  gender: gender
// 	};
// 	// Only change code above this line
// };

const createPerson = (name, age, gender) => {
	// Only change code below this line
	return {name, age, gender};
	// Only change code above this line
};

let res = createPerson("Bob", 34, "Male"); 
console.log("The value in variable res is: " + JSON.stringify(res,null,4) + " Expect {\"Bob\", 34, \"Male\"} ");

// EOF
