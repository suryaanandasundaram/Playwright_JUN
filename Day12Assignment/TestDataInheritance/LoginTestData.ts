// - Create subclasses and create 2 methods in each LoginTestData
// - enterUsername()
// - enterPassword()
// - Demonstrate the concept by creating objects for both classes and calling their methods. 

import { TestData } from "./TestData";

class LoginTestData extends TestData{

    constructor(username: string, password: string){
        super(username, password);
    }
    
    enterUsername(): void{
        console.log(`Entered username ${this.username}`);
    }
    enterPassword(): void{
        console.log(`Entered Password ${this.password}`)
    }  
}
const testData = new TestData("demo1","crmsfa1")
testData.enterCredentials();
testData.navigateToHomePage();

const loginTestData = new LoginTestData("demo","crmsfa")
loginTestData.enterCredentials();
loginTestData.navigateToHomePage();
loginTestData.enterUsername();
loginTestData.enterPassword();