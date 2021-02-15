/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Mon 15 Feb 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic javascript   
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic javascript 
	- Task: Golf Code 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Define a variable a with var and initialize it to a value of 9.

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if ( strokes == 1 ) {
    return names[0]; 
  }
  var diff = strokes - par;
  if (diff <= -2) return names[1];
  if (diff == -1) return names[2];
  if (diff == 0) return names[3];
  if (diff == 1) return names[4];
  if (diff == 2) return names[5]; 
  if (diff >= 3) return names[6]; 

  // Only change code above this line
}

var res = golfScore(5, 4); 

console.log("The value in variable res is: " + res + " ==>> Expect Birdie");

// EOF
