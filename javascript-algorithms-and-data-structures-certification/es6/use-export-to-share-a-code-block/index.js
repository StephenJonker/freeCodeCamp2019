/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sat 6 Mar 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - es6  
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: es6
	- Task: Use export to Share a Code Block
*/

console.log("FCC - Javascript and Algorithms - es6");

// Goal: 
// There are two string-related functions in the editor. 
// Export both of them using the method of your choice.

const uppercaseString = (string) => {
	return string.toUpperCase();
};
  
const lowercaseString = (string) => {
	return string.toLowerCase();
};

exports.uc = function (string) {
	return string.toUpperCase();
}

exports.lc = function (string) {
	return string.toLowerCase();
}

// console.log("Debug: " + uc("abc"));

// Ok, the next 2 lines work in the FCC env. 
// They do not work in node.js
// node seems to want to have exports (with an s) dot the item being exported 
// 
// export { uppercaseString };
// export { lowercaseString };

// For running in node.js 
// 
// exports.uppercaseString();
// exports.lowercaseString();
// exports.uc;
// exports.lc;

// EOF
