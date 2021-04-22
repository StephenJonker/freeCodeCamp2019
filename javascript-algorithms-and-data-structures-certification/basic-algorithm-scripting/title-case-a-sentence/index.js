/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Thu 22 Apr 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic algorithm scripting 
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic-algorithm-scripting
	- Task: Title Case a Sentence
*/

console.log("FCC - Javascript and Algorithms - basic algorithm scripting");

// Goal: 
// Return the provided string with the first letter of each word capitalized. 
// Make sure the rest of the word is in lower case.

function titleCase(str) {
	let result = "";

	// convert string into an array of words, split based on white space 
	let arrayOfWords = str.split(" ");

	for (let arrayOfWordsItemIndex in arrayOfWords ) {

		// for each word in the array
		// split the word into 2 parts
		let word = arrayOfWords[arrayOfWordsItemIndex];

		// - firstChar
		// - restOfString
		let firstChar = word.substring(0,1);

		let restOfString = word.substring(1,word.length);

		// run toUpper on firstChar 
		firstChar = firstChar.toUpperCase();

		// run toLower on restOfString 
		restOfString = restOfString.toLowerCase(); 

		// rebuild the word based on above
		let wordConverted = firstChar + restOfString;

		// add rebuilt word to result string with whitespace separator
		const WHITESPACE_SEPARATOR = " ";
		if ( result.length == 0 ) {
			result = wordConverted;
		} else {
			result += WHITESPACE_SEPARATOR + wordConverted;
		}
	}
	return result;
}

let res = titleCase("I'm a little tea pot");
 
console.log("The value in variable res is: " + res + " Expect I'm A Little Tea Pot ");

// EOF
