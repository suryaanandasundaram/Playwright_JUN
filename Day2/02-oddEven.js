function isOddorEven(number){
    if(number%2==0){
        return "The number is Even";
    }
    else{
        return "The number is Odd";
    }
}

let result = isOddorEven(10);
console.log("Number 10 is " +result);

result = isOddorEven(15);
console.log("Number 15 is " +result);