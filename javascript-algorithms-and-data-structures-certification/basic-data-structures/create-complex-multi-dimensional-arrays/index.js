/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Tue 6 Apr 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic data structures 
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic data structures
	- Task: Create complex multi-dimensional arrays
*/

console.log("FCC - Javascript and Algorithms - basic data structures");

// Goal: 
// We have defined a variable, myNestedArray, set equal to an array. Modify myNestedArray, 
// using any combination of strings, numbers, and booleans for data elements, so that it has 
// exactly five levels of depth (remember, the outer-most array is level 1). Somewhere on the third 
// level, include the string deep, on the fourth level, include the string deeper, and on the fifth 
// level, include the string deepest.

let myNestedArray = [
	// Only change code below this line
	['unshift', false, 1, 2, 3, 'complex', 'nested'],
	['loop', 'shift', 6, 7, 1000, 'method'],
	['concat', false, true, 'spread', 'array'],
	['mutate', 1327.98, 'splice', 'slice', 'push'],
	['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth'],
	['2nd level',
		['3rd level','deep',
			['4th level', 'deeper',
				['5th level', 'deepest']
			]	
		]
	]
	// Only change code above this line
];

console.log("myNextedArray[5] is: " + myNestedArray[5][1][1] + " Expect DEEP" );
console.log("myNextedArray[5] is: " + myNestedArray[5][1][2][1] + " Expect DEEPER" );
console.log("myNextedArray[5] is: " + myNestedArray[5][1][2][2][1] + " Expect DEEPEST" );

// EOF
