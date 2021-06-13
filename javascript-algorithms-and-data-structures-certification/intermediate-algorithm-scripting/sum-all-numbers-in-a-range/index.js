/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sun 13 Jun 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Intermediate Algorithm Scripting
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Intermediate Algorithm Scripting
	- Task: Sum All Numbers in a Range
*/

console.log("FCC - Javascript and Algorithms - Intermediate Algorithm Scripting");

// Goal: 
// We'll pass you an array of two numbers. Return the sum of those two numbers plus 
// the sum of all the numbers between them. The lowest number will not always come first.
//
// For example, sumAll([4,1]) should return 10 because sum of all the numbers 
// between 1 and 4 (both inclusive) is 10.
// 

function sumAll(arr) {
	let startValue = 0; 
	let endValue = 0; 
	let result = 0;

	// Simplest case, just return the sum of 2 values
	//  
	if ( arr[0] == arr[1] ) {
		return arr[0] + arr[1]; 
	}

	// Find lowest and highest values 
	// 
	if ( arr[0] < arr[1] ) {
		startValue = arr[0]; 
		endValue = arr[1]; 
	} else {
		startValue = arr[1];
		endValue = arr[0]; 
	}

	// Sum the numbers 
	// 
	for( let value = startValue; value <= endValue; value++ ) {
		result = result + value;  
	}

	return result;
}

let result = sumAll([1, 4]);
console.log("The value in variable result is: " + result + " Expect 10 ");

result = sumAll([4, 1]);
console.log("The value in variable result is: " + result + " Expect 10 ");

result = sumAll([5, 10]);
console.log("The value in variable result is: " + result + " Expect 45 ");

result = sumAll([10, 5]);
console.log("The value in variable result is: " + result + " Expect 45 ");

result = sumAll( [4,4] ); 
console.log("The value in variable result is: " + result + " Expect 8 ");

// EOF
