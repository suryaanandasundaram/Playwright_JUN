/*Create a JavaScript function that accepts a string, reverses it, and checks if the reversed string is a
palindrome, then test your function with various strings and print the results*/

function reverseStringAndCheckPalindrome(input){
    input = input.toLowerCase();
    let inputArray =input.split("");
    let finalString ="";
    for(let i=inputArray.length-1;i>=0;i--){
        finalString += inputArray[i];
    }
    let booleanValue = checkPalindrome(input,finalString);
    if(booleanValue){
        console.log("Given String is Palindrome");
        console.log(`Input String  ${input}`);
        console.log(`Reversed String ${finalString}`);
    }else{
        console.log("Given String is not a Palindrome");
        console.log(`Input String  ${input}`);
        console.log(`Reversed String ${finalString}`);

    }

}

function checkPalindrome(input,reversedString){
    if(input===reversedString){
        return true;
    }else{
        return false;
    }
}

reverseStringAndCheckPalindrome("Ramar");
reverseStringAndCheckPalindrome("Bala");
reverseStringAndCheckPalindrome("Surya");
reverseStringAndCheckPalindrome("Amma");


