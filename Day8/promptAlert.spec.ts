// https://www.w3schools.com/js/tryit.asp?filename=tryjs_prompt

import {test, expect} from '@playwright/test';


test("Handle Prompt Alert", async ({ page }) => {

page.on("dialog", async (alert) => {
    if(alert.type()==="prompt"){
    const message =alert.message();
    console.log(`Alert message: ${alert.message()}`);
    console.log(`Alert type: ${alert.type()}`);
    expect(message).toBe("Please enter your name:");
    await alert.accept("Surya");
     }
  })   

await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_prompt");

const outerFrame = page.frameLocator("#iframewrapper>#iframeResult");

await outerFrame.locator("//button[text()='Try it']").click();

await expect(outerFrame.locator("#demo")).toHaveText("Hello Surya! How are you today?");


});