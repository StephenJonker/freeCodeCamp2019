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
	- Task: Accessing Object Properties with Variables 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Set the playerNumber variable to 16. Then, use 
// the variable to look up the player's name and assign it to player.

// Setup
var testObj = {
	12: "Namath",
	16: "Montana",
	19: "Unitas"
  };
  
  // Only change code below this line
  
  var playerNumber = 16;       // Change this line
  var player = testObj[playerNumber];   // Change this line 

console.log("The value in variable player is: " + player + " Expect Montana");

// EOF
