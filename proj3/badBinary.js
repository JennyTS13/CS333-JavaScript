/* Authors: Tiffany Lam and Jenny Lin
 * CS333 Project 3 
 * Extension: Horrible Binary Search
 * An example of how hard to understand a binary search program can be.
 * Focuses on how syntactic rules permit confusion.
 */

//Declare an array of evens
var evens = [];

//Add 20 even integers to array
for(i = 0; i < 20; i++){
    evens.push(i*2);
}

//Printing array
print( "Array of evens: " + evens);

function binarySearch( array, fail ){
    var everywhere = array.length; var nowhere = 0;
    while( everywhere >= nowhere ){var somewhere = parseInt((everywhere-nowhere)/2);
	if(nowhere == everywhere){if (array[nowhere+somewhere] != fail) {return "Not found";} else {return "Found!";}}
	if( array[nowhere+somewhere] == fail ) {return "Found!";}
	if( array[nowhere+somewhere] >= fail ) {everywhere = nowhere+somewhere;}
	else {nowhere = nowhere+somewhere+1;}} {return "Not Found!"}
}

print("Searching for 0: " + binarySearch(evens, 0) );
print("Searching for 5: " + binarySearch(evens, 5) );
print("Searching for 50: " + binarySearch(evens, 50) );
print("Searching for 38: " + binarySearch(evens, 38) );


