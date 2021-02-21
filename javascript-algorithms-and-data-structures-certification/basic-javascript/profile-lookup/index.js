/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sun 21 Feb 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic javascript   
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic javascript 
	- Task: Profile Lookup
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Define a variable a with var and initialize it to a value of 9.

// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop) {
// Only change code below this line
	var result = "";
	var numberOfItemsInContactsCollection = contacts.length;
	var nameFound = false;
	for (let index = 0; index < numberOfItemsInContactsCollection; index++ ) {
		if ( name == contacts[index].firstName ) {
			nameFound = true;
			if ( contacts[index].hasOwnProperty(prop) ) { 
				result = contacts[index][prop];
			} else { 
				result = "No such property";
			}
		}
	} 
	if ( nameFound == true ) {
		return result;
	} else { 
		return "No such contact";
	}

// Only change code above this line
}

var res = lookUpProfile("Akira", "likes");
console.log("Value of res is: " + res + " Expect [Pizza, Coding, Brownie Points]");

res = lookUpProfile("Sherlock", "likes")
console.log("Value of res is: " + res + " Expect [Intriguing Cases, Violin]");

res = lookUpProfile("Harry", "likes");
console.log("Value of res is: " + res + " Expect Hogwarts, Magic, Hagrid");

res = lookUpProfile("Bob", "number");
console.log("Value of res is: " + res + " Expect No such contact");

res = lookUpProfile("Bob", "potato");
console.log("Value of res is: " + res + " Expect No such contact");

res = lookUpProfile("Akira", "address");
console.log("Value of res is: " + res + " Expect No such property");

// EOF
