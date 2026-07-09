/* Playwright Assignment: Validating Text
Box States */

import{test,expect} from '@playwright/test'

test("Assertion",async({page})=>{

// 1.Launch Playwright test.
// 2. Navigate to the page:
await page.goto("https://leafground.com/input.xhtml");

// Locate the textbox with placeholder "Disabled".
// 2. Assert that it is disabled using:
// await expect(locator).toBeDisabled()
const disabledLocator = page.locator("[placeholder='Disabled']");
await expect(disabledLocator).toBeDisabled();


// Part 3: Validate an Enabled Textbox
// 1. Locate another textbox (example: the one with placeholder "Type your name").
// 2. Assert that it is enabled using:
// await expect(locator).toBeEditable()
// 3. Type your name into the textbox.

const enabledLocator = page.locator("//input[@placeholder='Babu Manickam']");
await expect(enabledLocator).toBeEnabled();
await expect(enabledLocator).toBeEditable();


// Part 4: Soft Assertion Practice
// 1. Pick a textbox that is not disabled.
// 2. Use:
// await expect.soft(locator).toBeDisabled()
// 3. Observe the test result and understand how soft assertions behave.

const cityLocator = page.locator("//input[@value='Chennai']");
await expect.soft(cityLocator).toBeDisabled();


// Part 5: Fill Data
// 1. Choose a textbox (any enabled one).
// 2. Clear existing text using .fill()
// 3. Enter a new value (Ex: "Playwright Learning")

const fillLocator = page.locator("//input[@value='Can you clear me, please?']");
await fillLocator.fill("Playwright Learning");
await expect(fillLocator).toBeEnabled();

})