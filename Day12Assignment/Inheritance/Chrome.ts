// Create subclasses such as Chrome, Edge and Safari
// - Define openIncognito() and clearCache() methods in Chrome class


import { Browser } from "./Browser";

class Chrome extends Browser{
    openIncognito():void{
        console.log(`Open Incognito Window Browser ${this.browserName} version ${this.browserVersion}`)
    }
    clearCache():void{
        console.log(`Cleared Cache Browser ${this.browserName} version ${this.browserVersion}`)
    }
}
const chrome = new Chrome("Chrome","127");
chrome.openURL();
chrome.closeBrowser();
chrome.navigateBack();
chrome.openIncognito();
chrome.clearCache();
