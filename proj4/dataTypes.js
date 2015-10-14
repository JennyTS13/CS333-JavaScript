/** Authors: Tiffany Lam and Jenny Lin
  * CS333 Project 4 
  * Task 1: DataType limitations and internal representation
  * This is a program that displays the ways that limitations 
  * and internal representations of two different data types - int and tinyint
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