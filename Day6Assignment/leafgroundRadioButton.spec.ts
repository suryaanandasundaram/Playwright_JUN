/* Write a Playwright script to automate the interaction with radio buttons on the LeafGround "Radio" page. The tasks will include checking default selections, enabling selections, and validating group exclusive selections. */

import {test,expect} from '@playwright/test'

test("Leafground RadioButton",async({page})=>{
// 1. Navigate to https://leafground.com/radio.xhtml
await page.goto("https://leafground.com/radio.xhtml");

// 2. Identify and assert the default selected radio button.
const defaultSelectedRadioButton = page.locator('input[type="radio"][checked="checked"]').nth(3);
await expect(defaultSelectedRadioButton).toBeChecked();
await expect(defaultSelectedRadioButton).toHaveAttribute('value','Option3');

// 3. Click your most favorite browser and assert that the browser is enabled.
await page.locator("//label[text()='Edge']").first().click();
await expect(page.locator(".ui-radiobutton-box span").nth(14)).toBeEnabled();

// 4. Click one of the cities.
await page.locator("//label[text()='Chennai']").click();
await expect(page.locator(".ui-radiobutton-box span").nth(15)).toBeEnabled();

// 5. Assert the default selected button.
const defaultSelectedAgeGroup = page.locator('input[type="radio"][checked="checked"]').last();
await expect(defaultSelectedAgeGroup).toBeChecked();
await expect(defaultSelectedAgeGroup).toHaveAttribute('value','21-40 Years');

//Select the age group.
const newAgeGroup = page.locator("//label[text()='1-20 Years']");
await newAgeGroup.click();
await expect(newAgeGroup).toBeChecked();
await expect(defaultSelectedAgeGroup).not.toBeChecked();







})



