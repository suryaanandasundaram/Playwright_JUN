import {test,chromium,firefox } from "@playwright/test";

test("Red Bus in Edge Browser Instances",async ()=>{
    const browserInstance = await chromium.launch({headless:false,channel:"msedge"});
    const browserContext = await browserInstance.newContext();
    const page = await browserContext.newPage();

    await page.goto("https://www.redbus.in/");
    const url = page.url();
    console.log(`URL of RedBus Website is ${url}`);
    const title = await page.title();
    console.log(`Title of RedBus Website is  ${title}`);

});
test("Flipkart in Firefox Browser Instances",async()=>{
   const browserInstance = await firefox.launch({headless:false});
   const browserContext  = await browserInstance.newContext();
   const page = await browserContext.newPage();

   await page.goto("https://www.flipkart.com/");
   const url = page.url();
   console.log(`URL of Flipkart Website is ${url}`);
   const title = await page.title();
   console.log(`Title of Flipkart Website is ${title}`);

});
