/* Authors: Tiffany Lam and Jenny Lin
 * CS333 Project 7
 * Task 3: Garbage Collector
 * Timing functions to find garbage collection
 */

//A timer object used to keep track of time
var Timer = function(){
    this.startTime;
    this.endTime;
    
    this.start = function(){
	this.startTime = new Date().getTime();
    };

    this.end = function(){
	this.endTime = new Date().getTime();
    };

    this.getTime = function(){
	return this.endTime - this.startTime;
    };
};

//Creating an array of size x inside function
//Memory is lost as array's scope is within the function
var makeArray = function(x){
    var array = [];
    for(i=0; i<x; i++){
	array.push(0);
    }
    array = [];
};

//print out the time used for calling makeArray
var t = new Timer();
for(j=0; j<100; j++){
    t.start();
    makeArray(100000);
    t.end();

    print("Iteration " + j + " : " + t.getTime() + "ms");
}
