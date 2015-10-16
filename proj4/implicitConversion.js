/* Authors: Tiffany Lam and Jenny Lin
 * CS333 Project 4 
 * Task 3: Implicit Conversion
 * This program gives 2 examples of implicit conversion in Javascript
 */

//Adding an int and a float
var int_a = parseInt(1);
var float_a = 1.1;
var result_a = int_a + float_a;
print("Int + Float: 1 + 1.1 = " + result_a); //The int is converted to float

//Adding a string to an int
var int_b = parseInt(1);
var string_b = 'A';
var result_b = int_b + string_b;
print("Int + String: 1 + 'A' = " + result_b); //The int is converted to string

//Dividing an int by float
var int_c = parseInt(2);
var float_c = 1.0;
var result_c = int_c/float_c;
print("Int / Float: 2 / 1.0 = " + result_c); //Looks like int but is float
