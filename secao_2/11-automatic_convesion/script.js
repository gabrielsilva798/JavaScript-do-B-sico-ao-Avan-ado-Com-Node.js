//             CONVERTION
//js converted any dates, in background

//                          CAUTION: WITH THIS CONVERTION

// NUMBER with NULL return a 0 as type NUMBER.
console.log(5 * null);
console.log(typeof(5 * null));


// any math problem, except +, the js convert the STRING number for NUMBER.
console.log("5" - 3); // return type number
console.log(typeof("5" - 3));


//but with + it will concatened, if one of the arguments be a string and the return will be string.
console.log("5" + 1); 
console.log(typeof("5" + 1)); //with + return a type STRING

console.log(typeof("5" - 3)); // return is NUMBER
console.log(typeof("5" + 3)); // return is STRING


//With 2 string it´s olyn concatened the strings. Return type STRING
console.log("dois" + "três");
console.log(typeof("dois" + "três"));