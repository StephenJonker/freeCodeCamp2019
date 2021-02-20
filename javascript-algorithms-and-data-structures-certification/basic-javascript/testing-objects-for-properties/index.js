/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sat 20 Feb 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic javascript   
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic javascript 
	- Task: Testing Objects for Properties 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Modify the function checkObj to test if an object passed to the 
// function (obj) contains a specific property (checkProp). If the 
// property is found, return that property's value. If not, return "Not Found".

function checkObj(obj, checkProp) {
	// Only change code below this line
	
	var result = "";
	var objectContainsProperty = obj.hasOwnProperty(checkProp);
	
	if ( objectContainsProperty ) {
	  result = obj[checkProp];
	} else { 
	  result = "Not Found";
	}
	
	return result;
	// Only change code above this line
}

var myObj = {
	top: "hat",
	bottom: "pants"
};

var res = checkObj(myObj, "top");
console.log("The value in variable res is: " + res + " Expect >hat<");

res = checkObj(myObj, "foobar");
console.log("The value in variable res is: " + res + " Expect >Not Found<");


// EOF
