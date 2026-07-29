function oddEvenWhile(num) {
    let i = 1;
    while (i <= num) {
        if (i % 2 == 0) {
            console.log("The number " + i + " is Even");
        } else {
            console.log("The number " + i + " is Odd");
        }
        i++;
    }
}
oddEvenWhile(10);
