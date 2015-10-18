/* Authors: Tiffany Lam and Jenny Lin
 * CS333 Project 4 
 * Task 4: Scoping
 * Demonstrates the properties of scoping
 */

var x = 3;
function foo1() {
	var y = x + 5;
	return y;
}

function foo2() {
	var y = 2;
	return foo1();
}

function main() {
	print(foo1());		//8
	print(foo2());		//8, if dynamic, would print out 7
}

main();

function scoping() {
	
	print("in func: x =", x);	// x = 1
	
	var y = 2;
	print("in func: y =", y)	// y = 2
	
	for(var i = 0; i < 3; i++) {
		print("in loop: i =", i);
		y = 4;
		print("in loop y=", y);
	}
	
	print("in func: i =", i);	// i = 3
	print("in func: y =", y);	// y = 4
	
	/* variables created in a function only exist in the function */
	function innerFunc() {
		var y = 5;
		print("in innerFunc: y =", y);	// y = 5
	}
	
	innerFunc();
	print("in func: y =", y);	//y = 4

    return 0;
}

var x = 1;
print("in main: x =", x);	// x = 1
scoping();
print("in main: x =", x);	// x = 1

//print("in main: y =", y);		// error, x no longer exists
//print("in main: i =", i);		// error, i no longer exists


