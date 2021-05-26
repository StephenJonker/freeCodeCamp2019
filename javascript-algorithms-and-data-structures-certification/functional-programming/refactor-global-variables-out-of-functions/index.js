/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Wed 26 May 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Functional Programming
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Functional Programming
	- Task: Refactor Global Variables Out of Functions
*/

console.log("FCC - Javascript and Algorithms - Functional Programming");

// Goal: 
// - Rewrite the code so the global array bookList is not changed inside either 
// function. 
// - The add function should add the given bookName to the end of the 
// array passed to it and return a new array (list). 
// - The remove function should remove the given bookName from the array passed to it.

// Note: Both functions should return an array, and any new parameters should be added before the bookName parameter.

// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (theArray, bookName) {
  let newArray = [...theArray]; 
  newArray.push(bookName);
  return newArray;
  
  // Change code above this line
}

// Change code below this line
function remove (theArray, bookName) {
  let newArray = [...theArray];
  var book_index = newArray.indexOf(bookName);
  if (book_index >= 0) {

    newArray.splice(book_index, 1);
    return newArray;

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log("booklist:       " + JSON.stringify(bookList));
console.log("newbooklist:    " + JSON.stringify(newBookList));
console.log("newerbooklist:  " + JSON.stringify(newerBookList));
console.log("newestbooklist: " + JSON.stringify(newestBookList));


// EOF
