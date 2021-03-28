/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sun 28 Mar 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - debugging  
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: debugging 
	- Task: Prevent Infinite Loops with a Valid Terminal Condition
*/

console.log("FCC - Javascript and Algorithms - debugging");

// Goal: 
// The myFunc() function contains an infinite loop because the 
// terminal condition i != 4 will never evaluate to false (and break the looping) 
// - i will increment by 2 each pass, and jump right over 4 since i is odd to 
// start. Fix the comparison operator in the terminal condition so the loop only 
// runs for i less than or equal to 4.

// Original code 
// 
// function myFunc() {
// 	for (let i = 1; i != 4; i += 2) {
// 	  console.log("Still going!");
// 	}
// }

// fixed code 
// 
function myFunc() {
	for (let i = 1; i <= 4; i += 2) {
	  console.log("Still going!");
	}
}

console.log("START: myFunc()... ");
myFunc();
console.log("END: myFunc(). ");

// EOF
