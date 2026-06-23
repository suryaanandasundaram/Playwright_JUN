function lastWordLength(input){  
let arrayOfWords = input.trim().split(" ");
let lastWord = arrayOfWords[arrayOfWords.length-1];
let length = lastWord.length;
console.log(length);
}

lastWordLength("Hello World");
lastWordLength("fly me  to the  moon");

function anagram(input1,input2){
    input1 = input1.trim().toLowerCase();
    input2 = input2.trim().toLowerCase();

    let input1Sorted = input1.split("").sort().join("");
    let input2Sorted = input2.split("").sort().join("");

    if(input1Sorted===input2Sorted){
        console.log(`Given ${input1} , ${input2} is Anagram`); 
    }else{
         console.log(`Given ${input1} , ${input2} is not a Anagram`); 
    }

}

anagram("listen","silent")
anagram("hello","world")