/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sat 27 Mar 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - regular expressions  
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: regular expressions
	- Task: Check for All or None
*/

console.log("FCC - Javascript and Algorithms - regular expressions");

// Goal: 
// Change the regex favRegex to match both the American English (favorite) 
// and the British English (favourite) version of the word.

let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);

console.log("The value in variable result is: " + result + " Expect true");

// EOF
