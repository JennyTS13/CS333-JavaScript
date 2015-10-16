/* Authors: Tiffany Lam and Jenny Lin
 * CS333 Project 4 
 * Task 6: Function Type
 * This program shows the capabilities of functions in Javascript
 */

function foo1(x) {
    return(x + 1);
}

function foo2() {
    return 5;
}

function foo3(fn) {
    return fn(3);
}

print(foo2());		//5
print(foo1(foo2()));	//6, passing a function to another function
print(foo3(foo1));	//4, passing a function to another function

/* assign function to variable */
var func = foo2;	

print(func())	//5, call the function using the variable
