// Step 1: Create an anonymous function that returns the sum of new numbers

let sumOf = function(number1, number2) {
    return number1 + number2;
}



// Step 2: Create a function that accepts the annonymous function that
// we created above, and returns whether the sum that it returns
// is even or odd.

function evenOrOdd(number1, number2, fn){
    const numberToEvaluate = fn(number1, number2);
    if(numberToEvaluate % 2 == 0){
        console.log(numberToEvaluate + " is even");
    } else if(numberToEvaluate % 2 == 1){
        console.log(numberToEvaluate + " is odd");
    } else {
        console.log("invalid input, try again");
    }
}

evenOrOdd(5, 2, sumOf)


// Result: Your console output should look like this:
// "[Number] is [even // odd]"