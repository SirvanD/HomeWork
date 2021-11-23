// Here's an example truth table for the ! (not) operation. In it, we're listing the values of !a that correspond with a given value of a.

// a	!a
// true	false
// false	true
// Fill out the truth tables below for && (and), || (or) and one that uses multiple comparison operators. All you need to do is replace the ?'s with either true or false.

// NOTE: Because of markdown formatting, || and && have been replaced with OR and AND respectively.

// HINT: With the last one, it may be helpful to add additional columns to the table for each individual comparison.

// a	b	a AND b
// true	true	TRUE
// true	false	FALSE
// false	true	FALSE
// false	false	TRUE


// a	b	a OR b
// true	true	TRUE
// true	false	TRUE
// false	true	TRUE
// false	false	FALSE


// a	b	a != b
// 3	3	FALSE
// 1	5	TRUE
// 2	"2"	TRUE


// a	b	!a AND (a OR b)
// true	true	FALSE
// true	false	TRUE
// false	true	TRUE
// false	false	FALSE
// ^^^^^^^^^^^^^^^^^^^^^^^^
//not sure if this final table is written out correctly. Could not make sense of !a AND (a OR b)