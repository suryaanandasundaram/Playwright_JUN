function numberOfOccurrences(k){
    let count =0;
    const nums = [2,4,5,2,1,2]; 
    for(let i=0; i<nums.length; i++){
        if(nums[i] === k){
            count++;
        }
    }
    return count;
}


console.log("Number of occurrences of 2 in Array is "+numberOfOccurrences(2))
console.log("Number of occurrences of 1 in Array is "+numberOfOccurrences(1))
console.log("Number of occurrences of 5 in Array is "+numberOfOccurrences(5))
console.log("Number of occurrences of 4 in Array is "+numberOfOccurrences(4))

