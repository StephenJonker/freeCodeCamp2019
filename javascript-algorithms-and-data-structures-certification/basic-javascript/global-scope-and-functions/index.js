/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Mon 08 Feb 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic javascript   
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic javascript 
	- Task: Global Scope and Functions 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Declare the myGlobal variable below this line

// Note: this does not seem to be a very good example. 

function fun1() {
	// Assign 5 to oopsGlobal Here
	oopsGlobal = 5;
  }
  
  var myGlobal = 10;
  
  // Only change code above this line
  
  function fun2() {
	var output = "";
	if (typeof myGlobal != "undefined") {
	  output += "myGlobal: " + myGlobal;
	}
	if (typeof oopsGlobal != "undefined") {
	  output += " oopsGlobal: " + oopsGlobal;
	}
	console.log(output);
  } 

fun1();
fun2(); 

// console.log("The value in variable a is: " + a);

// EOF
