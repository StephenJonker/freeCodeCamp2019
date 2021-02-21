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
	- Task: Record Collection 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// You start with an updateRecords function that takes an object like collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.
//
// Your function must always return the entire object.
// If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
// If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
// If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
// If value is an empty string, delete the given prop property from the album.
// Note: A copy of the collection object is used for the tests.

// Setup
var collection = {
	2548: {
	  albumTitle: 'Slippery When Wet',
	  artist: 'Bon Jovi',
	  tracks: ['Let It Rock', 'You Give Love a Bad Name']
	},
	2468: {
	  albumTitle: '1999',
	  artist: 'Prince',
	  tracks: ['1999', 'Little Red Corvette']
	},
	1245: {
	  artist: 'Robert Palmer',
	  tracks: []
	},
	5439: {
	  albumTitle: 'ABBA Gold'
	}
  };
  
  // Only change code below this line
  function updateRecords(object, id, prop, value) {

	if ( prop != "tracks" && value != "" ) {
		object[id][prop] = value;
	}

	if ( (prop == "tracks") && (object[id].hasOwnProperty("tracks") == false ) ) {
		object[id].tracks = [value];
	}

	if ( prop == "tracks" && value != "" ) {
		object[id].tracks.push(value);
	}

	if ( value == "" ) {
		delete object[id][prop];
	}
	return object;
  } 


// TESTING - this should really be done with Jest, etc... 
// Test cases from the FCC problem statement 

var res = "";
var ID = 0; 
var property = "";
var value = "";
var DEBUG = false; 

// After updateRecords(collection, 5439, "artist", "ABBA"), artist should be ABBA
//
ID=5439;
property="artist";
value = "ABBA";
console.log("TEST #1: artist should be ABBA");
res = updateRecords(collection, ID, property, value);
if ( res[ID].artist == value ) {
	console.log("\tPASS"); 
} else { 
	console.log("\tFAIL");
}

// After updateRecords(collection, 5439, "tracks", "Take a Chance on Me"), 
// tracks should have Take a Chance on Me as the last element.
// console.log("Content of collection is BEFORE: \n" + JSON.stringify(collection[5439],null,4));
ID=5439;
property = "tracks";
value = "Take a chance on Me";
console.log("TEST #2: tracks should have Take a Chance on Me as the last element.");
res = updateRecords(collection, ID, property, value);
var numberOfElementsInTracks = res[ID][property].length;
// console.log("Number of elements in tracks: " + numberOfElementsInTracks);
// console.log("Content of collection is AFTER: \n" + JSON.stringify(collection[5439],null,4));
if ( res[ID].tracks[numberOfElementsInTracks - 1] == value ) {
	console.log("\tPASS"); 
} else { 
	console.log("\tFAIL");
}

// After updateRecords(collection, 2548, "artist", ""), artist should not be set
ID = 2548;
property = "artist";
value = "";
console.log("TEST #3: artist should not be set")
if ( DEBUG ) console.log("\tContent of collection is BEFORE: \n" + JSON.stringify(collection[ID],null,4));
res = updateRecords(collection, ID, property, value);
if ( DEBUG ) console.log("\tContent of collection is AFTER: \n" + JSON.stringify(collection[ID],null,4));
if ( res.hasOwnProperty(property) == false ) {
	console.log("\tPASS");
} else { 
	console.log("\tFAIL");
}

// After updateRecords(collection, 1245, "tracks", "Addicted to Love"),
//  tracks should have Addicted to Love as the last element.
ID = 1245;
property = "tracks";
value = "Addicted to Love";
console.log("\nTEST #4: tracks should have Addicted to Love as the last element.")
if ( DEBUG ) console.log("\tContent of collection is BEFORE: \n" + JSON.stringify(collection[ID],null,4));
res = updateRecords(collection, ID, property, value);
if ( DEBUG ) console.log("\tContent of collection is AFTER: \n" + JSON.stringify(collection[ID],null,4));
numberOfElementsInTracks = res[ID][property].length;
if ( res[ID].tracks[numberOfElementsInTracks - 1] == value ) {
	console.log("\tPASS");
} else { 
	console.log("\tFAIL");
}

// After updateRecords(collection, 2468, "tracks", "Free"), tracks should have 1999 as the first element.
ID = 2468;
property = "tracks";
value = "Free";
console.log("\nTEST #5: tracks should have 1999 as the first element.")
if ( DEBUG ) console.log("\tContent of collection is BEFORE: \n" + JSON.stringify(collection[ID],null,4));
res = updateRecords(collection, ID, property, value);
if ( DEBUG ) console.log("\tContent of collection is AFTER: \n" + JSON.stringify(collection[ID],null,4));
numberOfElementsInTracks = res[ID][property].length;
if ( res[ID].tracks[0] == "1999" ) {
	console.log("\tPASS");
} else { 
	console.log("\tFAIL");
}

// After updateRecords(collection, 2548, "tracks", ""), tracks should not be set
ID = 2548;
property = "tracks";
value = "";
console.log("\nTEST #6: tracks should not be set")
if ( DEBUG ) console.log("\tContent of collection is BEFORE: \n" + JSON.stringify(collection[ID],null,4));
res = updateRecords(collection, ID, property, value);
if ( DEBUG ) console.log("\tContent of collection is AFTER: \n" + JSON.stringify(collection[ID],null,4));
if ( res[ID].hasOwnProperty("tracks") == false) {
	console.log("\tPASS");
} else { 
	console.log("\tFAIL");
}

// After updateRecords(collection, 1245, "albumTitle", "Riptide"), albumTitle should be Riptide
ID = 1245;
property = "albumTitle";
value = "Riptide";
console.log("\nTEST #7: albumTitle should be Riptide")
if ( DEBUG ) console.log("\tContent of collection is BEFORE: \n" + JSON.stringify(collection[ID],null,4));
res = updateRecords(collection, ID, property, value);
if ( DEBUG ) console.log("\tContent of collection is AFTER: \n" + JSON.stringify(collection[ID],null,4));
if ( res[ID][property] == value) {
	console.log("\tPASS");
} else { 
	console.log("\tFAIL");
}




// EOF
