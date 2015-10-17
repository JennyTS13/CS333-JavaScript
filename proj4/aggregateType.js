/* Authors: Tiffany Lam and Jenny Lin
 * CS333 Project 4
 * Task 5: aggregateTypes
 * This is a program that demonstrates how to create and 
 * access aggregate types in JavaScript.
 */

// Creating Person object
var Person = function ( first, last, mi, age ){
    this.firstName = first;
    this.lastName = last;
    this.MI = mi;
    this.age = age;
	
    // printing person info
    this.info = function(){
	print("Name: " + this.firstName + ' ' + this.MI + ' ' + this.lastName);
    };
}

//Creating instances of Persons
var p1 = new Person( "Tiffany", "Lam", "C", 20 );
var p2 = new Person( "Jenny", "Lin", "S", 20 );

//Accessing properties with dot notation
p1.info();
p2.info();
print("Accessing Person 1's name: " + p1.firstName);
print("Accessing Person 2's name: " + p2.firstName);

//Adding a function to the Person prototype
Person.prototype.getAge = function(){
    print(this.firstName + " is " + this.age + " years old.");
};

//Calling the function added to Person after declaration
p1.getAge();
p2.getAge();

//Adding properties to p1
p1.id = "N/A";
print("Printing Person 1's id. Should print N/A: " + p1.id);

