// Function Declaration(Name Required,Reusable functions)  
function userProfile(name){
    console.log(`Hello ${name}`);
}

userProfile("John Doe");

//Arrow Function(Name Not Required,short functions)
const double = (number)=> {return number * 2;}

console.log(double(5));
console.log(double(10));


//Anonymous Function(Name Not Required)
setTimeout (function () {
    console.log("This message is delayed by 2 seconds");
}, 2000);


//Call Back Function(A callback function is a function that is passed as an argument to another function and is executed later.)
function getUserData(callback) {
    // Simulate fetching data
    setTimeout(function () {
        callback()}, 3000);
}

// Call the function with a callback
getUserData(()=>console.log("Call Back Function"));

//An asynchronous operation is a task that doesn't finish immediately. Instead of blocking the program, JavaScript continues executing other code while waiting for the task to complete.