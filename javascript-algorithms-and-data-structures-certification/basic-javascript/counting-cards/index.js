/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Thu 18 Feb 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic javascript   
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic javascript 
	- Task: Counting Cards 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Define a variable a with var and initialize it to a value of 9.

var count = 0;

function cc(card) {
	// Only change code below this line

	switch (card) {
	  case 2:
	  case 3: 
	  case 4: 
	  case 5: 
	  case 6: 
		count += 1;
		break;
	  case 10:
	  case 'J':
	  case 'Q':
	  case 'K':
	  case 'A':
		count -= 1;
		break;
	}
	console.log("A: " + count);
	if ( count > 0 ) {
	  return count + " Bet";
	} else {
		return count + " Hold";
	}
  
	// Only change code above this line
  }


res = cc(2);
console.log("result is: " + res); 
res = cc(3); 
console.log("result is: " + res);
res = cc(7); 
console.log("result is: " + res);
res = cc('K'); 
console.log("result is: " + res);
res = cc('A');
console.log("result is: " + res);


// EOF
