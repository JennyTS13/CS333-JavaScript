/* Authors: Tiffany Lam and Jenny Lin
 * CS333 Project 6 
 * Task 2: Functions
 * This program shows some examples of functions.
 * Explores the variations in the way functions and their parameters are defined
 */

/* Shows how you define the return type of a function */
var square = function(x) {
    if (x <= 10) {
	return x * x;
    }
    else {
	return "trying to square a number greater than 10";
    }
};

var x = 3;
print( x + " squared:", square(x));
print("return type of squaring function is:", typeof square(x));

var x = 11;
print( x + " squared:", square(x));
print("return type of squaring function is:", typeof square(x));

print("")

// don't need to have a return statement in a function 
function noReturn(x) {
    x = x + 1;
}

var result = noReturn(3);
print(typeof(result));		//undefined

print("")

/* Create functions with an unknown number of arguments */
function sumArgs(x, y) {
    var sum = 0;
    if (x == undefined && y == undefined) {
	print("0 arguments");
	return "no arguments given"
    }
    
    if (y == undefined) {
	print("1 argument");
	return ("sum of arguments is: " + x);
    }
    if (arguments.length >= 2) {
	print(arguments.length + " arguments");
	for (i = 0; i < arguments.length; i++) {
	    sum += arguments[i];
	}
	return ("sum of arguments is: " + sum);
    }
}

/* Overloading cannot be done */
/*function sumArgs(x){
    print("Overloaded:" + x);
}*/

print(sumArgs());
print(sumArgs(1));
print(sumArgs(1, 2));
print(sumArgs(1, 2, 3));

print("")

/* Creating Person and Student to demonstrate overriding in Javascript */
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

function Student(first, last, mi, age, college){
    //Apply Person function to arguments of Student
    Person.apply(this,arguments);
    this.school = college;
}

//setting Student's prototype
Student.prototype=Object.create(Person.prototype);

//setting the built-in constructor to Student from Parent
Student.prototype.constructor = Student;

// Adding function to Person after the object's creation (dynamically adding)
Person.prototype.getAge = function(){
    print(this.firstName + " is " + this.age + " years old.");
};


//Attempts to override Person's info
Student.prototype.info = function(){
    print(this.firstName + " attends " + this.school + ".");
};

//Adding function to Student prototype which overrides Person's getAge
Student.prototype.getAge = function(){
    print(this.firstName + " Age " + this.age + " attends " + this.school + ".");
};

//Creating instance of Person and Student
var p = new Person( "Jenny", "Lin", "S", 20 );
var s = new Student( "Tiffant", "Lam", "C", 20, "Colby");

//Testing overriding
//Person Demo
print("This is a Person's info() and getAge()"); 
p.info();
p.getAge();

//Student Demo
print("\nThis is a Student's info() and getAge()");
s.info();
s.getAge();

