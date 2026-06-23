function printOddOrEven(num){
    for(let i=1;i<=num;i++){
        if(i%2==0){
            console.log(`Number ${i} is Even Number`);
        }else{
            console.log(`Number ${i} is Odd Number`);
        }
    }
}

printOddOrEven(15);