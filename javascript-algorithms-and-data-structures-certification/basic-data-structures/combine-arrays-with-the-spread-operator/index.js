/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sun 4 Apr 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic data structures 
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic data structures
	- Task: Combine Arrays with the Spread Operator
*/

console.log("FCC - Javascript and Algorithms - basic data structures");

// Goal: 
// We have defined a function spreadOut that returns the variable sentence. 
// Modify the function using the spread operator so that it returns the 
// array ['learning', 'to', 'code', 'is', 'fun'].

function spreadOut() {
	let fragment = ['to', 'code'];
	let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line 
	return sentence;
}
  
console.log(spreadOut());
console.log("Expect ['learning', 'to', 'code', 'is', 'fun']");

// EOF
