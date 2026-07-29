// Requirements:
// - Create a class.
// - Inside this class, define the reportStep method with multiple overloaded versions:
// - One version should accept two input arguments: a string for the message (msg) and another
// string for the status (status).
// - Another version of the reportStep method should accept three input arguments: a string for
// the message (msg), a string for the status (status), and a boolean parameter (snap) to indicate
// whether to take a snapshot.
// - Create a method to demonstrate the usage of the overloaded reportStep method.
// - Call both versions of the reportStep method with different sets of input arguments to
// showcase method overloading. 

class MethodOverloading {
    //Method Signature
    reportStep(msg: string, status: string): void
    reportStep(msg: string, status: string, snap: boolean): void

    //Method Implementation
    reportStep(msg: string, status: string, snap?: boolean) {
        console.log(`Message Received: ${msg}`);
        console.log(`Status Received: ${status}`)
        if (snap != undefined) {
            if (snap) {
                console.log("Snapshot taken")
            }
            else {
                console.log("Snapshot not taken")
            }
        }
    }
}

const obj = new MethodOverloading();
obj.reportStep("Login Successful", "Pass");
obj.reportStep("Logout", "Fail");
obj.reportStep("Account Created", "Fail", true)
obj.reportStep("Lead Created", "Pass", false)