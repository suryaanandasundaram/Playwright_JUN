//Call Back Function(A callback function is a function that is passed as an argument to another function and is executed later.)
let browser = "Chrome";

function checkBrowserVersion(callback){
    setTimeout(()=>{callback(browser)},2000);
}
checkBrowserVersion((browserVersion)=>{console.log(`Browser version using call back: ${browserVersion}`)});

//An asynchronous operation is a task that doesn't finish immediately. Instead of blocking the program, JavaScript continues executing other code while waiting for the task to complete.