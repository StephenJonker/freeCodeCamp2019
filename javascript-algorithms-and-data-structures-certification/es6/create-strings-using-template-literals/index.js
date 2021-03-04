/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Wed 3 Mar 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - es6  
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: es6
	- Task: <tbd>
*/

console.log("FCC - Javascript and Algorithms - es6");

// Goal: 
// Use template literal syntax with backticks to create an 
// array of list element (li) strings. Each list element's 
// text should be one of the array elements from the failure 
// property on the result object and have a class attribute 
// with the value text-warning. The makeList function should 
// return the array of list item strings.

// Use an iterator method (any kind of loop) to get the desired output (shown below).

// [
//   '<li class="text-warning">no-var</li>',
//   '<li class="text-warning">var-on-top</li>',
//   '<li class="text-warning">linebreak</li>'
// ]

const result = {
	success: ["max-length", "no-amd", "prefer-arrow-functions"],
	failure: ["no-var", "var-on-top", "linebreak"],
	skipped: ["no-extra-semi", "no-dup-keys"]
  };
  
function makeList(arr) {
	// Only change code below this line
	const failureItems = [];
	let line = "";
	for (let i = 0; i < arr.length; i++) {
		line = `<li class="text-warning">${arr[i]}</li>`;
		failureItems.push(line);
	}
	// Only change code above this line
  
	return failureItems;
}
  
const failuresList = makeList(result.failure);

console.log("Value in failureList is: " + failuresList);

// let res = "<tbd>"; 
// console.log("The value in variable res is: " + res + " Expect <tbd> ");

// EOF
