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

print(typeof (1.2));
print(2.5e10);