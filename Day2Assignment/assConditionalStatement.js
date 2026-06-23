function launchBrowser(browserName){
    if(browserName==="chrome"){
        console.log("Chrome Browser is launched")
    }else if(browserName==="firefox"){
        console.log("Firefox Browser is launched"); 
    }else if(browserName==="msedge"){
        console.log("MSEdge Browser is launched");   
    }else{
        console.log("Not a valid browser");
    }
}

function testType(type){
    switch (type) {
        case "smoke":
            console.log("Smoke Test is executed");
            break;
        case "sanity":
            console.log("Sanity Test is executed");
            break;
        case "regression":
            console.log("Regression Test is executed");
            break;
        default:
            console.log("Smoke Test is executed");
            break;
    }
}

launchBrowser("chrome");
testType("regression");