/* Authors: Tiffany Lam and Jenny Lin
 * CS333 Project 7
 * Task 2: Memory Management
 * Statements creating and losing memory
 */

var string = "Tiffany & Jenny";                     //memory is allocated for a string
var Person = function ( first, last, mi, age ){
    this.firstName = first;
    this.lastName = last;
    this.MI = mi;
    this.age = age;
}                                                   //memory is allocated for an object
var returnVal = function(x){ return x; };           //memory is allocated for function
var array = ["This", "is", "our", "array"];         //allocates memory for array and its elements

var p1 = new Person( "Jenny", "Lin", "S", 20 );     //memory is allocated for new person object
array.push("!");                                    //allocates memory for an element in the array and adds it on

/* Printing out current state */
print( "String says: " + string );
print( "Person is: " + p1.firstName );
print( "Function returns: " + returnVal("function") );
print( "Array has: " + array );

/* Losing memory */
string = string.substring(0, 7);                    //memory is allocated for the new substring
                                                    //and the old string is lost
p1 = new Person( "Tiffany", "Lam", "C", 20);        //memory is allocated for new person object
                                                    //old person object is lost in the memory pool
returnVal = function(x){
    return "Don't care what you give me"; };        //memory is allocated for new function and
                                                    //the old function is lost

/* Printing out new state */
print( "String says: " + string );
print( "Person is: " + p1.firstName );
print( "Function returns: " + returnVal("function") );

print( "Element popped: " + array.pop());           //Memory of what is popped is lost
array = [];                                         //Memory of old contents of array are lost
print( "Array Now: " + array ); 
