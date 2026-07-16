import { test } from "@playwright/test";

test("Storage State for Salesforce Login", async ({ page }) => {

    // 1. Navigate to the url https://login.salesforce.com/
    await page.goto('https://login.salesforce.com/');

    // 2. Enter username using getByLabel
    await page.getByLabel('Username').fill('suryaanandasundaram.df93405f59ff@agentforce.com');

    // 3. Enter password using getByLabel
    await page.getByLabel('Password').fill('Surya@123');

    // 4. Click Login
    await page.getByRole("button",{name:"Log In"}).click();

    //To enter OTP
    await page.waitForTimeout(15000)

    //Save the cookies + localstorage from the the application tab in dev tool --> Local Storage

    await page.context().storageState({ path: "Data/skipLogin_salesforce.json" })
})