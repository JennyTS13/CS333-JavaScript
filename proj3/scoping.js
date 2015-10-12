/* Authors: Tiffany Lam and Jenny Lin
 * CS333 Project 3 
 * Task 3: Identifier Naming, Variable Declarations, and Identifier Scoping
 * This is a program that displays the ways that identifier naming, variable
 * declarations and variable scoping work in JavaScript
 */

var foo = function() {
    var x = 5;
    print("in foo: x =", x);			//x = 5
}

function scoping() {
    var i = 0;
    var x = 5;
    print("in function: x =", x);		//x = 5
    
    for(i = 0; i < 2; i++) {					
	var x = 4;
	print("inside loop: x =", x);		//x = 4
    }
    
    print("in function after loop: i =", i);	//i = 2
    print("in function after loop: x =", x);	//x = 4
    
    return 0;
}

var y = 1;
print("in main: y =", y);
foo();

/* demonstrates how a variable can hold an arbitrary function */
var p = scoping;
print("scoping: ", p());

print("in main: y =", y);
var y = "Same Scope";
print("in main: y =", y);

//print("in main: x =", x);		// error, x no longer exists
//print("in main: i =", i);		// error, i no longer exists

