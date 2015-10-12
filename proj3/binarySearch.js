/* Authors: Tiffany Lam and Jenny Lin
 * CS333 Project 3 
 * Task 4: Binary Search
 */

//Declare an array of evens
var evens = [];

//Add 20 even integers to array
for(i = 0; i < 20; i++){
    evens.push(i*2);
}

//Printing array
print( "Array of evens: " + evens);

function binarySearch( array, goal ){
    var endIdx = array.length;
    var startIdx = 0;

    //Stay in loop if the start index is smaller than the end index
    while( endIdx >= startIdx ){
	
	//find midway distance and cast to int
	var halfDist = parseInt((endIdx-startIdx)/2);

	//if the indices are the same, check to see if we found the number
	if(startIdx == endIdx){
	    if (array[startIdx+halfDist] != goal)
		return "Not found";
	    else
		return "Found!";
	}

	//
	if( array[startIdx+halfDist] == goal )
	    return "Found!";
	if( array[startIdx+halfDist] >= goal )
	    endIdx = startIdx+halfDist;
	else
	    startIdx = startIdx+halfDist+1;
    }
    return "Not Found!"
}
print("Searching for 0: " + binarySearch(evens, 0) );
print("Searching for 5: " + binarySearch(evens, 5) );
print("Searching for 50: " + binarySearch(evens, 50) );
print("Searching for 38: " + binarySearch(evens, 38) );


