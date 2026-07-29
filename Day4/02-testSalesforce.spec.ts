import { test, chromium } from '@playwright/test';

test("Launch Salesforce Application", async({page})=>{

    //const browser = await chromium.launch({headless:false,channel:"chrome"})// browser

    // const browser = await chromium.launch();
    // const context = await browser.newContext()
    // const page = await context.newPage();

    await page.goto("https://login.salesforce.com/?locale=in");
    const url = await page.url();
    console.log("URL "+url);

    const title = await page.title();
    console.log("Title "+title);

})