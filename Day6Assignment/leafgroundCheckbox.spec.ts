/* Develop a Playwright script to test interactions with checkboxes on the LeafGround "Checkbox" page, covering scenarios like multiple selections, checking default states, and handling disabled checkboxes. */

import {test,expect} from '@playwright/test'

test("Leafground Checkbox", async({page})=>{

    //1. Navigate to https://leafground.com/checkbox.xhtml
    await page.goto("https://leafground.com/checkbox.xhtml");

    //Click on the "Basic Checkbox.”
    const basicCheckbox = page.locator("//span[text()='Basic']");
    await basicCheckbox.click();
    await expect(page.locator("//input[@aria-label='Basic']")).toBeChecked();

    // Click on the "Notification Checkbox."
    const notificationCheckbox = page.locator("//span[text()='Ajax']");
    await notificationCheckbox.click();
    await expect(page.locator("//input[@aria-label='Ajax']")).toBeChecked();

    //Verify that the expected message is displayed.
    expect(page.locator("//span[text()='Checked']")).toBeVisible();

    //Click on your favorite language (assuming it's related to checkboxes).
    //Click Java checkbox
    const javaCheckbox = "//label[text()='Java']";
    await page.locator(javaCheckbox).click()
    expect(page.locator("//input[@value='java']")).toBeChecked();

     //Click Java checkbox
    const javaScriptCheckbox = "//label[text()='Javascript']";
    await page.locator(javaScriptCheckbox).click()
    expect(page.locator("//input[@value='js']")).toBeChecked();


    //Click on the "Tri-State Checkbox."
    const triStateCheckbox = "//div[contains(@id,'ajaxTriState')]";
    await page.locator(triStateCheckbox).click()
    
    // Verify which tri-state option has been chosen.
    await expect(page.locator("//div[contains(@id,'ajaxTriState')]//div[contains(@class,'ui-chkbox-box')]"));
    //Click on the "Toggle Switch."
    await page.locator("//div[contains(@class,'ui-toggleswitch ui-widget')]").click();

    //Verify that the expected message is displayed.
    await expect(page.locator("//span[text()='Checked']")).toBeVisible();

    //Verify if the Checkbox is disabled.
    await expect(page.getByLabel("Disabled")).toBeDisabled();

    //Select multiple options on the page (details may be needed).
    await page.locator("//ul[@data-label='Cities']/following-sibling::div/span").click();

    //Search the value and then select
    await page.locator("//input[@aria-label='Filter Input']").fill("Amsterdam");
    await page.locator("//label[text()='Amsterdam']").last().click();

    //directly selected
    await page.locator("//label[text()='Berlin']").last().click();
    await page.locator("//label[text()='Rome']").last().click();

    await page.locator("//a[@aria-label='Close']").click();

    //Perform any additional actions or verifications required.
    await expect(page.locator("//span[text()='Amsterdam']")).toBeVisible();
    await expect(page.locator("//span[text()='Berlin']")).toBeVisible();
    await expect(page.locator("//span[text()='Rome']")).toBeVisible();

    
   //Close the web browser when done.
    await page.close();





});