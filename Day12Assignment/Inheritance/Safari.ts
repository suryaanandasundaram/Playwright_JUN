// - Create subclasses such as Chrome, Edge and Safari
// Define readerMode() and fullScreenMode() methods in Safari class 

import { Browser } from "./Browser";

class Safari extends Browser {
    readerMode(): void {
        console.log(`Enabled reader Mode Browser ${this.browserName} version ${this.browserVersion}`)
    }
    fullScreenMode(): void {
        console.log(`Enabled Full screen mode Browser ${this.browserName} version ${this.browserVersion}`)
    }
}
const safari = new Safari("Safari","129");
safari.openURL();
safari.closeBrowser();
safari.navigateBack();
safari.readerMode();
safari.fullScreenMode();