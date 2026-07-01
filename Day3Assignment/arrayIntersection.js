function intersection(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                if (!result.includes(arr1[i])) {
                    result.push(arr1[i]);
                }
            }
        }
    }
    return result;
}
console.log("No Common Elements:", intersection([1, 2, 3, 4, 5], [9, 0, 6, 7, 8]));// No Common Elements- Empty Array
console.log("All Common Elements:", intersection([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));// All Common Elements- Same Array
console.log("Typical Case:", intersection([1, 2, 3, 4, 5], [1, 2, 3]));// Typical Case- Some Common Elements- [1,2,3]
console.log("All Elements are same:", intersection([1, 1, 1, 1, 1], [1, 1, 1, 1, 1]));// All Elements are same- [1]
console.log("Edge Case-Different Length:", intersection([1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 4, 5, 6, 7]));// Some Common Elements- [4,5,6,7]