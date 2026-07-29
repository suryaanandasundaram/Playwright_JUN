// - Create a subclass named LoginPage. - Override the performCommonTasks() method in the LoginPage class.
// - Demonstrate the concept by creating objects for both classes and calling their methods. 

import { BasePage } from "./BasePage";

class LoginPage extends BasePage{
    constructor(ele:string){
        super(ele)
    }
    performCommonTasks(){
        console.log(`Performed Common Task-LoginPage ${this.element}`)
    }
}

const loginPage = new LoginPage("login button");
loginPage.findElement();
loginPage.clickElement();
loginPage.performCommonTasks();

const basePage = new BasePage("username textbox");
basePage.findElement();
basePage.clickElement();
basePage.enterText();
basePage.performCommonTasks();