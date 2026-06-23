// Assignment Requirements:
// 1. Declare a const name as browserName (global)
// 2. Assign value as Chrome
// 3. Create a function by name getBrowserName
// 4. Create if condition inside function to check if browser is chrome, then
// 5. Declare a local variable (browserName) and print that variable inside function (outside block)
// 6. Call that function from the javascript



const browserName="chrome";

// function getBrowserName(){
//     if(browserName =="chrome"){
//         var browserName = "FireFox";
//     }
//     console.log("BrowserName inside function outside block " + browserName );
    
// }
// getBrowserName();


function getBrowserName(){
    if(browserName =="chrome"){
        let browserName = "FireFox";
    }
    console.log("BrowserName inside function outside block " + browserName );
    
}
getBrowserName();