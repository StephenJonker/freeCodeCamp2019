/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Tue 15 Jun 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Intermediate Algorithm Scripting
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Intermediate Algorithm Scripting
	- Task: Seek and Destroy
*/

console.log("FCC - Javascript and Algorithms - Intermediate Algorithm Scripting");

// Goal: 
// <tbd>

function destroyer(array, ...args) {
	let target = 0;
	let index = 0;
	let allRemoved = false; 

	for(let i = 0; i < args.length; i++ ) { 
		target = args[i];
		allRemoved = false;
		while (!allRemoved) { 
			index = array.indexOf(target); 
			if ( index != -1) {
				array.splice(index,1);
			} else {
				allRemoved = true;
			}
		}
	}
	return array;
}
  
let result = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
 
console.log("The value in variable result is: " + JSON.stringify(result) + " Expect [1, 1]");

// EOF
