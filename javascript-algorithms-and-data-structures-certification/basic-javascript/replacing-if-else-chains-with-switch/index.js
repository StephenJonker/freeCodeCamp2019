/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Thu 18 Feb 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic javascript   
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic javascript 
	- Task: Replacing If Else Chains with Switch 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Change the chained if/else if statements into a switch statement.

function chainToSwitch(val) {
	var answer = "";
	// Only change code below this line
  
	// if (val === "bob") {
	//   answer = "Marley";
	// } else if (val === 42) {
	//   answer = "The Answer";
	// } else if (val === 1) {
	//   answer = "There is no #1";
	// } else if (val === 99) {
	//   answer = "Missed me by this much!";
	// } else if (val === 7) {
	//   answer = "Ate Nine";
	// }
	
	switch (val) {
		case "bob":
			answer = "Marley";
			break;
		case 42:
			answer ="The Answwer";
			break;
		case 1:
			answer = "There is no #1";
			break;
		case 99:
			answer = "Missed me by this much!";
			break;
		case 7: 
			answer = "Ate Nine";
			break;
		default:
			// test conditions for FCC required "" as the default case 
			answer = "";
	}

	// Only change code above this line
	return answer;
  }
  
var res =  chainToSwitch(7); 
console.log("The value in variable res is: >" + res + "< Expect Ate Nine");

res =  chainToSwitch("7"); 
console.log("The value in variable res is: >" + res + "< <empty string>");

// EOF
