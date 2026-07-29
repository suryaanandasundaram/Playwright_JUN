// Create subclasses such as Chrome, Edge and Safari
// Define takeSnap() and clearCookies() methods in Edge class 

import { Browser } from "./Browser";

class Edge extends Browser{
     takeSnap():void{
        console.log(`Snap Taken in Browser ${this.browserName} version ${this.browserVersion}`)
     }
     clearCookies():void{
        console.log(`Cleared Cookies Browser ${this.browserName} version ${this.browserVersion}`)
     }
}
const edge = new Edge("Edge","128");
edge.openURL();
edge.closeBrowser();
edge.navigateBack();
edge.takeSnap();
edge.clearCookies();