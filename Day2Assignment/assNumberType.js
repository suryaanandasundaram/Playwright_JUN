function checkNumber(number){
    if(number>0){
        return ("Positive")
    }else if(number<0){
        return("Negative")
    }else if(number===0){
        return("Neutral")
    }else{
        return("Not Valid")
    }
}

let result = checkNumber(15);
console.log(`Give number is ${result} number`);
result = checkNumber(0);
console.log(`Give number is ${result} number`);
result = checkNumber(-100);
console.log(`Give number is ${result} number`);
result = checkNumber("ram");
console.log(`Give number is ${result} number`);