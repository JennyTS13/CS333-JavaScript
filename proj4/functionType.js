/* Authors: Tiffany Lam and Jenny Lin
 * CS333 Project 4 
 * Task 6: Function Type
 */

function foo1(x) {
	return(x + 1);
}

function foo2() {
	return 5;
}

print(foo2());
print(foo1(foo2()));	//passing a function to another function

/* assign function to variable */
var func = foo2;

print(func())	// call the function using the variable
