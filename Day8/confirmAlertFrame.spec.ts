import {test, expect} from '@playwright/test';


test("Handle Alert and Frame", async ({ page }) => {

page.on("dialog", async (alert) => {
    if(alert.type()==="confirm"){
    const message =alert.message();
    console.log(`Alert message: ${alert.message()}`);
    console.log(`Alert type: ${alert.type()}`);
    expect(message).toBe("Press a button!");
    await alert.accept();
     }
  })   

await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");

const outerFrame = page.frameLocator("#iframewrapper>#iframeResult");

await outerFrame.locator("//button[text()='Try it']").click();


});