/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sat 6 Mar 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - es6  
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: es6
	- Task: Use getters and setters to Control Access to an Object
*/

console.log("FCC - Javascript and Algorithms - es6");

// Goal: 
// Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.
// In the class, create a getter to obtain the temperature in Celsius and a setter 
// to set the temperature in Celsius.
//
// Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of 
// temperature in Fahrenheit, and C is the value of the same temperature in Celsius.
// 
// Note: When you implement this, you will track the temperature inside the class in 
// one scale, either Fahrenheit or Celsius.
// 
// This is the power of a getter and a setter. You are creating an API for another 
// user, who can get the correct result regardless of which one you track.
// 
// In other words, you are abstracting implementation details from the user.

// Only change code below this line
class Thermostat {

	constructor (tempInFahrenheit) {
		this._tempFahrenheit = tempInFahrenheit;
	}

	get temperature() {
		// C = 5/9 * (F - 32)
		let result = 5/9 * (this._tempFahrenheit - 32);
		// return temp in Celsius 
		return result;
	}

	set temperature(temp) {
		// temp is received in Celsius, convert to internal representation in Fahrenheit
		this._tempFahrenheit = temp * 9.0 / 5 + 32;
		// F = C * 9.0 / 5 + 32
	}
}


// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

console.log("Value of temp is: " + temp + " Expect 26");

// EOF
