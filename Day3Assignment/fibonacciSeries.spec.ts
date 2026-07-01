function fibonacci(n: number): number {

    if (n < 0) {
        console.log("Please enter a non-negative number");
        return -1;
    }

    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }
    let f0 = 0;
    let f1 = 1;
    let result = 0;

    for (let i = 2; i <= n; i++) {
        result = f0 + f1;
        f0 = f1;
        f1 = result;
    }
    return result;
}

let output;
output = fibonacci(0);
console.log("The 0th Fibonacci number is: " + output);
output = fibonacci(1);
console.log("The 1st Fibonacci number is: " + output);
output = fibonacci(10);
console.log("The 10th Fibonacci number is: " + output);
output = fibonacci(-5);
console.log("For Negative Number: " + output);


//Understand the concept of loops in TypeScript
// 1.In TypeScript added type safety
// 2. TypeScript is a superset of JavaScript, so it supports all the features of JavaScript, including loops