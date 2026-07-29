import { test,expect } from "@playwright/test";


test("Learn Assertions in leafground Application ", async ({ page }) => {

//Part 1: Navigate to the page    
await page.goto("https://leafground.com/input.xhtml");

// Part 2: Validate a Disabled Textbox
await expect(page.locator('//input[@placeholder="Disabled"]')).toBeDisabled({ timeout: 8000 });

//Part 3: Validate an Enabled Textbox
await expect(page.locator('//input[@placeholder="Babu Manickam"]')).toBeEnabled();

//Part 4: Soft Assertion Practice
await expect.soft(page.locator('//input[@value="Chennai"]')).toBeDisabled();

});
