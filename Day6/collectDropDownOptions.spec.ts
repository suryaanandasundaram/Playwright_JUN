import { test } from "@playwright/test";


test("Learn to retrieve Industry dropdown options in LeafTaps ", async ({ page }) => {

    await page.goto("https://leaftaps.com/opentaps/control/main");

    await page.locator('//input[@id="username"]').fill("democsr2");

    await page.locator('//input[@id="password"]').fill("crmsfa");

    await page.locator('//input[@class="decorativeSubmit"]').click();

    await page.locator('//a[contains(text(),"FA")]').click();

    await page.locator('//a[text()="Leads"]').click();

    await page.locator('//a[text()="Create Lead"]').click();

    await page.locator('//input[@id="createLeadForm_companyName"]').fill("UST");

    await page.locator('//input[@id="createLeadForm_firstName"]').fill("Surya");

    await page.locator('//input[@id="createLeadForm_lastName"]').fill("Anand");

    //await page.selectOption('//select[@id="createLeadForm_dataSourceId"]',{label:"Direct Mail"}); // label 

    await page.selectOption('//select[@id="createLeadForm_dataSourceId"]',{value:"LEAD_DIRECTMAIL"}); // value is the most stable way of choosing the dropdown since it is connected to the backend

    //await page.selectOption('//select[@id="createLeadForm_dataSourceId"]', { index: 3 }); // value


    const dropDownValues = page.locator('(//select[@id="createLeadForm_dataSourceId"]/option)') // this line is targeting all the 13 dropdown values

    const dropDownCount = await dropDownValues.count(); // 13

    console.log("Source Drop Down Options")

    for (let index = 1; index <= dropDownCount; index++) {

        console.log(await page.locator(`(//select[@id='createLeadForm_dataSourceId']/option)[${index}]`).innerText());

    }
    console.log("\nIndustry Drop Down Options")

    const industryDropDownValues = page.locator("//select[@id='createLeadForm_industryEnumId']/option");

    const industryDropDownCount = await industryDropDownValues.count();

    for (let index = 1; index <= industryDropDownCount; index++) {
        console.log(await page.locator(`(//select[@id='createLeadForm_industryEnumId']/option)[${index}]`).innerText());
    }


     console.log("\nIndustry Drop Down Options another method")

    const ReceivedIndustryDropDownValues = page.locator("//select[@id='createLeadForm_industryEnumId']/option");

    const receivedIndustryOptions = await ReceivedIndustryDropDownValues.allInnerTexts();

    console.log(receivedIndustryOptions);

    await page.waitForTimeout(3000)

})




