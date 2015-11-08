/* Authors: Tiffany Lam and Jenny Lin
 * CS333 Project 6 
 * Extension: Haiku
 * A compilable haiku on functions
 */

/* first haiku */
// Shows how there can be multiple return types of a function */
function foo1(x) {							//5 syallables
    if (x == 3) { return 'string'; } else 	//7 syllables - read as "if x 3, return string, else"
		{ return x + 2;} };					//5 syllables		

/* second haiku */
var x = 3;									//5 syllables
print("type:", typeof foo1(x));				//7 syllables
print( x + ":", foo1(x));					//5 syllables

/* third haiku */
var x = 10;									//5 syllables
print("type:", typeof foo1(x));				//7 syllables
print( x + ":", foo1(x));					//5 syllables

/* fourth haiku */
// don't need to have a return statement in a function 
function noRet(x) {				//5 syllables
    x = x + 7;}					//7 syllables
	print(typeof(noRet("")));	//5 syllables
