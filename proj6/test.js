/* Creating Person and Student to demonstrate creating functions dynamically
   and overriding in Javascript */
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

// Adding function to Person after the object's creation (dynamic)
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
