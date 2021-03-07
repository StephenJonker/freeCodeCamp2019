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
// use the module created in index.js that is in this directory

var myStringModule = require('./index.js');

let res = myStringModule.uc("abc");
console.log("the Upper case version of abc is: " + res);

// For running in node.js 
// 
// exports.uppercaseString;
// exports.lowercaseString;

// EOF
