import { test,chromium } from "@playwright/test";

test("Storage State for Salesforce Login", async () => {

    //Launch the browser (Chrome / Edge / Firefox / Safari).
    const browser =  await chromium.launch({headless:false});
    const context =  await browser.newContext();
    const page = await context.newPage();

    //Load the specified URL (https://login.salesforce.com/).
    await page.goto('https://login.salesforce.com/');

    //Enter the Username, Password and click on the Login button.
    await page.getByLabel('Username').fill('suryaanandasundaram.df93405f59ff@agentforce.com');
    await page.getByLabel('Password').fill('Surya@123');
    await page.getByRole("button",{name:"Log In"}).click();

    //To enter OTP
    await page.waitForTimeout(45000)

    //Save the cookies + localstorage from the the application tab in dev tool --> Local Storage

    await page.context().storageState({ path: "Data/skipLogin_salesforce.json" })
})