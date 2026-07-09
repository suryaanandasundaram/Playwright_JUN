/* Develop a Playwright script that interacts with and verifies the behavior of dropdowns. The script
should handle tasks like validating the options available, checking correct selections, and
asserting dynamic content loading based on selections */

import { test,expect } from '@playwright/test'

test("Leafground Dropdown",async({page})=>{

    // 1. Navigate to https://leafground.com/select.xhtml
    await page.goto("https://leafground.com/select.xhtml");

    //2. Select your favorite UI automation tool using the different select options
    
    //The locator having <select> tag, used slectOption method instead of locator,used visible text to select the option
    await page.selectOption(".ui-selectonemenu",{label:"Playwright"});

    //Added wait to see the selected option
    // await page.waitForTimeout(2000);

    //Used index to select the different option
    await page.selectOption(".ui-selectonemenu",{index:1});

    //Added wait to see the selected option
    // await page.waitForTimeout(2000);

    // 3. Get the count and print of all the values
    const uiAutomationToolValues = page.locator("//select[@class='ui-selectonemenu']/option");
    const count = await uiAutomationToolValues.count()
    console.log(`Count of UI Automation Tools options ${count}`)

    const values =await uiAutomationToolValues.allInnerTexts()

    console.log(`Values of UI Automation Tools options [${values}]`)
    
    // 4. Choose your preferred Country
    await page.locator("//label[text()='Select Country']").click();
    await page.locator("//li[text()='Germany']").click();

    // 5. Confirm Cities belongs to Country is loaded
    
    //validate the related city values
    const cityOptions = page.locator("//option[text()='Select City']/parent::select/option");
    
    //validated in single method
    await expect(cityOptions).toHaveText(["Select City","Berlin","Frankfurt","Munich"]);
  
    //validated using isVisible method
    await page.locator("//label[text()='Select City']").click();
    await expect(page.locator("//li[text()='Berlin']")).toBeVisible();
    await expect(page.locator("//li[text()='Frankfurt']")).toBeVisible();
    await expect(page.locator("//li[text()='Munich']")).toBeVisible();
    
    //validate the count
    await expect(cityOptions).toHaveCount(4);


    // 6. Choose any three courses from the dropdown
    const showOptions =page.getByLabel("Show Options");
    const courses = ['Selenium WebDriver','Playwright','RestAssured'];
    for(let course of courses ){
        await showOptions.click();
        await page.locator(`//li[@data-item-label='${course}']`).click();
    }

    // 7. Choose a language and print all the values from the dropdown.
    await page.locator("//label[text()='Select Language']").click();
    await page.locator("//li[text()='Tamil']").click();

    const languageValues = await page.locator("//li[text()='Select Language']/../li").allInnerTexts();
    console.log(languageValues);

    // 8. Select 'Two' irrespective of the language chosen
    await page.locator("(//div[contains(@class,'ui-selectonemenu ui-widget ui-state-default ui-corner-all')])[4]").click();
    await page.waitForTimeout(2000);
    await page.locator("//li[text()='Select Values']/following-sibling::li[3]").click();

    //Added wait to see the selected option
    // await page.waitForTimeout(2000);
})








