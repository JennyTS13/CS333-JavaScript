/* Authors: Tiffany Lam and Jenny Lin
 * CS333 Project 3 
 * Task 5: basicTypes
 * This is a program that demonstrates all the built-in types, 
 * how to construct aggregate types, and 
 * shows which of the stanard suite operators manipulate which types
 * and the resulting type of each operation.
 */

//result of each operation

print("\nDemonstrating Operations in JavaScript \n");

function arithmetic(x, y) {
	print(x + "+" + y + " => " + (x+y));
	print(x + "-" + y + " => " + (x-y));
	print(x + "/" + y + " => " + (x/y));
	print(x + "*" + y + " => " + (x*y));
	print(x + "%" + y + " => " + (x%y));
	
	print("");
	
	print("'" + x.toString() + "'" + "+" + y + " => " + (x.toString()+y)); 
	print("'" + x.toString() + "'" + "-" + y + " => " + (x.toString()-y));
	print("'" + x.toString() + "'" + "/" + y + " => " + (x.toString()/y));
	print("'" + x.toString() + "'" + "*" + y + " => " + (x.toString()*y));
	print("'" + x.toString() + "'" + "%" + y + " => " + (x.toString()%y));	
		
	print("");	
		
	print("'" + x.toString() + "'" + "+" + "'" + y.toString() + "'" + " => " + (x.toString()+y.toString()));	
	print("'" + x.toString() + "'" + "-" + "'" + y.toString() + "'" + " => " + (x.toString()-y.toString()));
	print("'" + x.toString() + "'" + "/" + "'" + y.toString() + "'" + " => " + (x.toString()/y.toString()));
	print("'" + x.toString() + "'" + "*" + "'" + y.toString() + "'" + " => " + (x.toString()*y.toString()));
	print("'" + x.toString() + "'" + "%" + "'" + y.toString() + "'" + " => " + (x.toString()%y.toString()));				
}

arithmetic(3, 5);

print("\n\nDemonstrating Class in JavaScript \n");

// Creating Person class
var Person = function ( first, last, mi, age ){
    this.firstName = first;
    this.lastName = last;
    this.MI = mi;
    this.age = age;
	
	// printing person info
    this.info = function(){
	print("Name: " + this.firstName + ' ' + this.MI + ' ' + this.lastName);
	print("Age: " + this.age);
    };
}

var p1 = new Person( "Tiffany", "Lam", "C", 20 );
var p2 = new Person( "Jenny", "Lin", "S", 20 );

p1.info();
p2.info();

