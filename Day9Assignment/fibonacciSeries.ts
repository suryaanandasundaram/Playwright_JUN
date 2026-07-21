// Create a TypeScript program that defines a function to compute the nth Fibonacci number using a
// loop (iterative approach).

// 1. Implement a function named `fibonacci` that accepts an argument `n`, which is a non-negative
// integer, and returns the nth Fibonacci number.
function fibonacci(n: number): number {
    // 2. Use a loop to compute the Fibonacci number. Initialize two variables to store the first two
    // Fibonacci numbers and update these iteratively up to `n`.
    let first: number = 0;
    let second: number = 1;
    let result: number = 1;
    if (n < 0) {
        throw new Error("Given number is Negative: Pass non-negative Number");
    }
    if (n === 0) {
        return 0
    }
    if (n === 1) {
        return 1
    }

    for (let i: number = 2; i <= n; i++) {
        result = first + second;
        first = second
        second = result;
    }
    return result;

}

// 3. Provide example calls to the `fibonacci` function with different integers to demonstrate the
// function’s functionality
console.log(`10th FibonacciNumber is ${fibonacci(10)}`);
console.log(`0th FibonacciNumber is ${fibonacci(0)}`);
console.log(`1st FibonacciNumber is ${fibonacci(1)}`);
console.log(`2nd FibonacciNumber is ${fibonacci(2)}`);

try {
    console.log(`-5th FibonacciNumber is ${fibonacci(-5)}`);
} catch (error) {
    console.log((error as Error).message);
}
