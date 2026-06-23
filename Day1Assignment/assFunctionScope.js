let gendarType = "female";

function printGender(){
    let colour = "brown";

if(gendarType.startsWith("female")){
    var age =30;
    let colour = "pink";
    console.log("Colour value inside if block "+ colour);

}
console.log("Age Value outside if block " +age);
console.log("Colour value oustside if block "+ colour);
}
console.log("Gendar Type "+gendarType);
printGender();

gendarType="male";
console.log("Gendar Type "+gendarType);
printGender();

/*## *Expected Outcome:*
After completing this assignment, you should be able to
* Understand how *global variables* can be accessed inside functions.
* Differentiate *function-scope* (var) from *block-scope* (let).
* Explain why the color variable prints "pink" inside the block but remains "brown" outside.
* Understand why age is accessible outside the if-block.## *Expected Outcome:*
*/

// we can access golobal variable through out function
// var variable if function scoped and not block scoped(leak the data out of the block)
// colour declared with let - function and block scoped
// age declared with var keyword - function scoped but not block scoped
