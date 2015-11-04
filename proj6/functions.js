/* Authors: Tiffany Lam and Jenny Lin
 * CS333 Project 6 
 * Task 2: Functions
 * This program shows some examples of functions.
 * Explores the variations in the way functions and their parameters are defined. 
 */

/* Shows how you define the return type of a function */
var square = function(x) {
	if (x <= 10) {
		return x * x;
	}
	else {
		return "trying to square a number greater than 10";
	}

}

var x = 3;
print( x + " squared:", square(x));
print("return type of squaring function is:", typeof square(x));

var x = 11;
print( x + " squared:", square(x));
print("return type of squaring function is:", typeof square(x));

// don't need to have a return statement in a function 
function noReturn(x) {
	x = x + 1;
}

var result = noReturn(3);
print(typeof(result));		//undefined

print("")

/* Create functions with an unknown number of arguments */
function sumArgs(x, y) {
	var sum = 0;
	if (x == undefined && y == undefined) {
		print("0 arguments");
		return "no arguments given"
	}
	
	if (y == undefined) {
		print("1 argument");
		return ("sum of arguments is: " + x);
	}
	if (arguments.length >= 2) {
		print(arguments.length + " arguments");
		for (i = 0; i < arguments.length; i++) {
			sum += arguments[i];
		}
		return ("sum of arguments is: " + sum);
	}
	
}
print(sumArgs());
print(sumArgs(1));
print(sumArgs(1, 2));
print(sumArgs(1, 2, 3));
