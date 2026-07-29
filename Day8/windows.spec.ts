// Write a Playwright test to demonstrate handling multiple tabs sequentially:
// 1, Launch Flipkart.(https://www.flipkart.com/)
// 2, Search for "Phone".
// 3, Click a result that opens in a new window/tab.
// 4, Capture the new page using browserContext.
// 5, Print titles of both pages.
// 6. From the child page get the product name printed in terminal.
// 6, And bring the parent page to front and continue navigation.

import {test,expect} from '@playwright/test'

test("Handle Multiple tabs",async ({page,context})=>{

    await page.goto("https://www.flipkart.com/");

    const search = page.locator("//input[@title='Search for Products, Brands and More']").first();

    await search.fill("Phone");
    await search.press("Enter");

    const [childPage] = await Promise.all([context.waitForEvent("page"),await page.locator("//div[text()='HOTLINE Power']").click()]);

    await childPage.waitForLoadState("domcontentloaded")

    console.log(await childPage.title());

    console.log(await page.title());
    const name = await childPage.locator("//div[contains(@class,'css-g5y9jx')]/h1").innerText();

    console.log(`Name of Mobile ${name}`); 

    await page.bringToFront(); // parent page

    await page.locator("//span[text()='TVs & Appliances']").click();

})