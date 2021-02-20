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
	- Task: Manipulating Complex Objects 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Add a new album to the myMusic array. Add artist and title 
// strings, release_year number, and a formats array of strings.

var myMusic = [
	{
	  "artist": "Billy Joel",
	  "title": "Piano Man",
	  "release_year": 1973,
	  "formats": [
		"CD",
		"8T",
		"LP"
	  ],
	  "gold": true
	},
	// Add a record here
	{
	  "artist": "Sam Smith",
	  "title": "Guitar Man",
	  "release_year": 1989,
	  "formats": [
		"CD",
		"8T",
		"LP"
	  ],
	  "gold": true
	}
  ]; 

console.log("The value in variable myMusic[0] is: " + myMusic[0].artist);
console.log("The value in variable myMusic[1] is: " + myMusic[1].artist);

console.log("the length of myMusic array is: " + myMusic.length);
console.log("\n===\n");
for(var index = 0; index < myMusic.length; index++) {
	console.log("The value in variable myMusic[" + index + "] is: " + JSON.stringify(myMusic[index],null,4));
}

// EOF
