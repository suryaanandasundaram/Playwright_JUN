
// 1. Create an enum named `Environment` with four values representing different stages of a software development process: `LOCAL`, `DEVELOPMENT`, `STAGING`, `PRODUCTION`. 

enum Environment {
    "LOCAL" = "local",
    "DEVELOPMENT" = 2,
    "STAGING",
    "PRODUCTION"
}
// 2. Write a function named `runTests` that accepts an argument of type `Environment`. The function should print a message indicating the environment against which the tests are running. 
//  The function `runTests` should be specified to return `void`, highlighting that it does not return any data. 
function runTests(env: Environment):void {
console.log(`Running tests in ${env} environment...`);
}
// 4. Include example calls to `runTests` using different enum values to demonstrate the function's functionality. 
runTests(Environment.LOCAL);
runTests(Environment.DEVELOPMENT);
runTests(Environment.STAGING);