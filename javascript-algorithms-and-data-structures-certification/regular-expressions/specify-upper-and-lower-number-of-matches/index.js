/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Fri 26 Mar 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - regular expressions  
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: regular expressions
	- Task: Specify Upper and Lower Number of Matches
*/

console.log("FCC - Javascript and Algorithms - regular expressions");

// Goal: 
// Change the regex ohRegex to match the entire phrase "Oh no", only when it has 3 to 6 letter h's.

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
let result = ohRegex.test(ohStr);

console.log("The value in variable result is: " + result + " Expect true ");

// EOF
