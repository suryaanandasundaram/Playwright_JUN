/* Write a Playwright script to perform the following actions on the Salesforce login page:
1. Navigate to the Salesforce login page.
2. Use different CSS selector strategies (ID, Class, Attribute) to locate the username and password fields.
3. Enter sample credentials into the username and password fields.
4. Click the login button using a CSS selector.
5. Verify that the login was successful by checking for a specific element on the landing page. */



import {test,expect} from'@playwright/test'

test("Salesforce Login-CSS Selectors",async({page})=>{

await page.goto("https://login.salesforce.com/?locale=in");

//CSS Locators
// await page.locator('#username').fill("dilipkumar.rajendran@testleaf.com")
// await page.locator('#password').fill("TestLeaf@2025")
// await page.locator('#Login').click();
// expect(page.locator('[title="Quarterly Performance"]')).toBeVisible

//Relative Locators
await page.locator("div>input").first().fill("dilipkumar.rajendran@testleaf.com")
await page.locator("div input").nth(21).fill("TestLeaf@2025")
await page.locator('#Login').click();
expect(page.locator('[title="Quarterly Performance"]')).toBeVisible

await page.waitForTimeout(3000);

})
