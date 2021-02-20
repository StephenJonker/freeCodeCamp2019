/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sat 20 Feb 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic javascript   
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic javascript 
	- Task: Using Objects for Lookups 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Convert the switch statement into an object called lookup. Use 
// it to look up val and assign the associated string to the result variable.

// Setup
function phoneticLookup(val) {
	var result = "";
  
	// Only change code below this line
	// switch(val) {
	//   case "alpha":
	// 	result = "Adams";
	// 	break;
	//   case "bravo":
	// 	result = "Boston";
	// 	break;
	//   case "charlie":
	// 	result = "Chicago";
	// 	break;
	//   case "delta":
	// 	result = "Denver";
	// 	break;
	//   case "echo":
	// 	result = "Easy";
	// 	break;
	//   case "foxtrot":
	// 	result = "Frank";
	// }
  
	var lookup = {
		"alpha": "Adams",
		"bravo": "Boston",
		"charlie": "Chicago", 
		"delta": "Denver",
		"echo": "Easy",
		"foxtrot": "Frank"
	}

	result = lookup[val];

	// Only change code above this line
	return result;
  }
  
var res = phoneticLookup("charlie"); 
console.log("The value in variable res is: " + res + " Expect Chicago");

res = phoneticLookup("alpha"); 
console.log("The value in variable res is: " + res + " Expect Adams");

res = phoneticLookup("foxtrot"); 
console.log("The value in variable res is: " + res + " Expect Frank");

// EOF
