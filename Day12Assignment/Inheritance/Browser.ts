// Create a superclass Browser.
// - Add at least two variables to the Broswer class: browserName and browserVersion
// - Implement 3 methods openURL(), closeBrowser(), navigateBack() in the Browser class


export class Browser {
    browserName:string;
    browserVersion:string;

    constructor(name:string,version:string){
        this.browserName=name;
        this.browserVersion=version;
    }
    openURL():void{
        console.log(`URL is loaded in Browser ${this.browserName} version ${this.browserVersion} `)
    }
    closeBrowser():void{
        console.log(`${this.browserName}Browser is Closed`)
    }
    navigateBack():void{
        console.log('Navigated Back')
    }
}

const browser = new Browser("New","1")
browser.openURL();
browser.closeBrowser();
browser.navigateBack();