// Create a TypeScript program that defines a function to compute the factorial of a given nonnegative integer using a loop (iterative approach).

function factorial(n: number): number {
    let result: number = 1;
// 2. Include a check to ensure that the factorial is not computed for negative numbers. If a negative
// number is passed, the function should throw an error.
    if (n < 0) {
        throw new Error("Given number is Negative: Pass non-negative Number");
    }
// 3. Use a loop to compute the factorial. Initialize a result variable and multiply it by each integer
// from 2 up to `n`.        
        for (let i: number = 2; i <= n; i++) {
            result *=i;
        }
        return result;
    }
// 4. Include example calls to the `factorial` function with different integers to demonstrate the
// function’s functionality. Include at least one example where an error is thrown due to a negative
// input.
console.log(`Factorial of 5 is ${factorial(5)}`);
console.log(`Factorial of 0 is ${factorial(0)}`);
console.log(`Factorial of 1 is ${factorial(1)}`);

try {
    console.log(`Factorial of -5 is ${factorial(-5)}`);
} catch (error) {
    console.log((error as Error).message);
}
