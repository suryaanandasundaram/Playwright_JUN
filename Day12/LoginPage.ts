import { BasePage } from "./BasePage";

class LoginPage extends BasePage implements PageRules{
    verifyPage(): void {
       console.log("Login Page Verified")
    }
    enterUsername(){
       console.log("Username Entered");
    }
    enterPassword(){
       console.log("Password Entered");
    }
    clickLogin(){
      console.log("Login Button Clicked");
    }
    
}

const lp = new LoginPage();
lp.waitForPageLoad();
lp.verifyPage();
lp.enterUsername();
lp.enterPassword()
lp.clickLogin()
lp.getPageTitle()