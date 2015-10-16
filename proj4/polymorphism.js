/* Authors: Tiffany Lam and Jenny Lin
 * CS333 Project 4 
 * Extension: Polymorphism
 * Showing how inheritance works in Javascript
 */

//Creating the parent object
function Person (first, last, mi, age){
    this.firstName = first;
    this.lastName = last;
    this.MI = mi;
    this.age = age;
}

//Creating the student object
function Student(first, last, mi, age, college){
    //Apply Person function to arguments of Student
    Person.apply(this,arguments);
    this.school = college;
}


//setting Student's prototype
Student.prototype=Object.create(Person.prototype);

//setting the built-in constructor to Student from Parent
Student.prototype.constructor = Student;

//Creating a new Person
p1 = new Person("Jenny", "Lin", "S", 20);

//Creating a new Student
s1 = new Student("Tiffany", "Lam", "", 20, "Colby");

//Adding function to Person prototype which will be inherited by Student
Person.prototype.intro = function(){
    print("I'm " + this.age + " years old.")
};

//Adding the speak function to Person's prototype
Person.prototype.speak = function(){
	print("My name is " + this.firstName + ".");
};

//Adding function to Student prototype which overrides Person's speak
Student.prototype.speak = function(){
    print("My name is " + this.firstName + " and I attend " + this.school + ".");
};

//Person Demo
print("This is a Person's speak and intro"); 
p1.speak();
p1.intro();

//Student Demo
print("\nThis is a Student's speak and intro");
s1.speak();
s1.intro();
