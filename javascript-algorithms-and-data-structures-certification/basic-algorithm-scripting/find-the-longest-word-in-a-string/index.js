/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sat 17 Apr 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic algorithm scripting 
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic-algorithm-scripting
	- Task: Find the Longest Word in a String
*/

console.log("FCC - Javascript and Algorithms - basic algorithm scripting");

// Goal: 
// Get the max word length of a word in a string 

function findLongestWordLength(str) {
	let result = 0;
	
	let maxCount = 0;
	let words = str.split(" ");
	let len = words.length;
	let wordLength = 0;

	for (let i = 0; i < len; i++ ) {
		wordLength = words[i].length;
		if (wordLength > maxCount) { 
			maxCount = wordLength;
		}
	}
	result = maxCount;

  return result;
}

let result = 0;
result = findLongestWordLength("The quick brown fox jumped over the lazy dog");

console.log("Length of the longest word in the string is: " + result);
console.log("Expect: 6");

// EOF
