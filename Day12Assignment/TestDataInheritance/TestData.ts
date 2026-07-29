// Create a superclass as TestData.
// Implement 2 methods: enterCredentials(), navigateToHomePage() in the TestData class. 

export class TestData{
    username:string;
    password:string;
    constructor(uName:string,pwd:string){
        this.username=uName;
        this.password=pwd;
    }
     enterCredentials():void{
        console.log("Credentials entered")
        console.log(`Username ${this.username}`);
        console.log(`Password ${this.password}`)
     }
     navigateToHomePage():void{
        console.log("Navigated to Home Page")
     }
}
