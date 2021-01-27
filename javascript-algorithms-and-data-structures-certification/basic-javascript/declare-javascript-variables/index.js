/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Wed 27 Jan 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - javascript-algorithms-and-data-structures-certification -  basic-javascript
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: Basic Javascript 
	- Task: Declare JavaScript Variables
*/

console.log("FCC - Javascript - Declare JavaScript Variables - Example");

// Pass the test, declare a variable
var myVariableUndefined; 

console.log("What is the typeof myVariableUndefined when declared but not assigned?: " + typeof(myVariableUndefined));

var myVarRegularInteger = 123;

console.log("What is the typeof myVarRegularInteger when declared and assigned?: " + typeof(myVarRegularInteger));

var myVarBigInteger = Number.MAX_SAFE_INTEGER;

console.log("What is the typeof myVarBigInteger when declared and assigned?: " + typeof(myVarBigInteger));
console.log("Value of myVarBigInteger: " + myVarBigInteger);

// change value in myVarBigInteger from number it bigInt, add 100 to it 

myVarBigInteger = myVarBigInteger + 100; 

console.log("What is the typeof myVarBigInteger when declared and assigned?: (v2) " + typeof(myVarBigInteger));
console.log("Value of myVarBigInteger: (v2): " + myVarBigInteger);


// EOF
