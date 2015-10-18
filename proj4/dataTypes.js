/* Authors: Tiffany Lam and Jenny Lin
 * CS333 Project 4 
 * Task 1: Data Types
 * Demonstrates the internal representation and limitations of data types
 */

var num = 1;
var str = "string";
var bool = true;
var obj = {number: 1, text: "test"};
var func = function() { print("this is a function"); }

print(typeof num);		//number
print(typeof str);		//string
print(typeof bool);		//boolean
print(typeof obj);		//object
print(typeof func);		//function

print("\nScientific Notation");
print(typeof (1.2));
print(2.5e10);

print("\nMax and Min Integers");
print(Math.pow(2, 53));
print(Math.pow(2, 53) == Math.pow(2, 53) + 1);

print(-Math.pow(2, 53));
print(-Math.pow(2, 53) == -Math.pow(2, 53) - 1);

print("\nInteger and Floating Point Precision");
var x = 999999999999999;	//15 digits
var y = 9999999999999999;	//16 digits
print(x);					//999999999999999
print(y);					//10000000000000000

var i = 0.06;
var j = 0.01;
print("i =", i);
print("j =", j);
print("i + j =", i + j);	//0.06999999999999999, instead of 0.07

print("\nNumber Properties");
print(Number.MAX_VALUE);			//the max value in JavaScript
print(Number.MIN_VALUE);			//the min value in JavaScript
print(Number.NEGATIVE_INFINITY);	//represents negative infinity
print(Number.NaN);					//represents a not-a-number value
print(Number.POSITIVE_INFINITY);	//represents infinity
