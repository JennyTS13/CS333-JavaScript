/** Authors: Tiffany Lam and Jenny Lin
  * CS333 Project 4 
  * Task 2
  */

print('Operators');

/* unary operator (-) takes precedence over other operators */
print(-2 * 6 + 2);	// (-2 * 6) + 2 = -10

/* multiplication and division have precedence over addition and subtraction */
print(2 + 6 * 2);	// 2 + (6 * 2) = 14
print(2 + 6 / 2);	// 2 + (6 / 2) = 5

print('\nMultiplication/Division vs Mod');
print(2 * 6 % 2);	// 2 * (6 % 2) = 0, mod has precedence over multiplication and division

print('\nCaret')
print( 2 ^ 2);		//0, caret is bitwise exclusive OR
print( 4 ^ 2);		//6
print(2 * 2 ^ 2);	//6, arithmetic has precedence over ^
print(2 + 2 ^ 2);	//6


print('\nOperator vs Equality');
print(3 + 1 == 4);	//true, operators (+, -, *, /) take precedence over equality

print('\nNOT vs AND');
print(! false && true);	//false, NOT has precedence over AND
						// (NOT false) AND true
						// true AND true
						// true

print('\nNot vs OR');
print(! true || false);	//false, NOT has precedence over OR
						// (NOT true) OR false
						// false or false
						// false

print(true || false);

print('\nComparisons vs AND');
print(3 - 2 == 1 && 1 + 2 == 3);	//true, comparison operators take precedence over AND
									// (3 - 2 == 1) && (1 + 2 == 3)
									// (true) && (true)
									// true

print('\nAND vs OR');
print(1 == 2 && 2 == 2 || 3 == 3);	//true, AND takes precedence over OR
									// (1 == 2 AND 2 == 2) OR (5 == 5)
									// (false AND true) OR (true)
									// false OR true
									// true