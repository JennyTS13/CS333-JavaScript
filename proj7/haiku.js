/* Authors: Tiffany Lam and Jenny Lin
 * CS333 Project 7
 * Extension: Haiku
 * A compilable haiku on memory management in JavaScript
 */

/* first haiku - demonstrates allocating memory */
var string = "Tiffany"; 					// 5 syllables
var ret = function() { return 3; };    		// 7 syllables 
var array = ["testing"]; 					// 5 syllables

/* second haiku - demonstrates deallocation of memory */
array.push("hello");                        // 5 syllables           
print( "array pop: " + array.pop());        // 7 syllables  
array = []; print( "" + array ); 			// 5 syllables
