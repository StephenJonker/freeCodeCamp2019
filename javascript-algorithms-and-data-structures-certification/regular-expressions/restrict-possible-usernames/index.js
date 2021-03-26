/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Thu 25 Mar 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - regular expressions  
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: regular expressions
	- Task: Restrict Possible Usernames
*/

console.log("FCC - Javascript and Algorithms - regular expressions");

// Goal: 
// Change the regex userCheck to fit the constraints listed above.
// You need to check all the usernames in a database. Here are some 
// simple rules that users have to follow when creating their username.
//
// Usernames can only use alpha-numeric characters.
// 
// The only numbers in the username have to be at the end. There can be zero or more 
// of them at the end. Username cannot start with the number.
// 
// Username letters can be lowercase and uppercase.
// 
// Usernames have to be at least two characters long. A two-character username can 
// only use alphabet letters as characters.

let username = "JackOfAllTrades";
let userCheck = /^([a-z][0-9][0-9]+|[a-z][a-z][a-z]*[0-9]*)$/i; // Change this line
let result = userCheck.test(username);

console.log("Value in result is: "  + result + " Expect true");

// EOF
