import {test,expect} from '@playwright/test'

test("Identify, interact with, and manipulate iframes within web pages",async({page})=>{
// Precondition:
// - Launch Chromium in non-headless mode
// - Use required fixtures
// - Navigate to https://leafground.com/frame.xhtml

 await page.goto("https://leafground.com/frame.xhtml");

 // Requirements:
// - Interact with the Click Me button inside frame

const insideFrame = await page.frameLocator('[src="default.xhtml"]');
const clickMeButtonLocator = insideFrame.locator('//button[@id="Click"]');

// - Assert the text changed after clicking the button

await clickMeButtonLocator.click();
const message = await clickMeButtonLocator.innerText();
await expect(message).toBe('Hurray! You Clicked Me.');

// - Get the total count of frames present in the page
const allFrames = await page.frames();
const framesCount = allFrames.length
console.log(`Frames in the page ${framesCount}`);
await expect(framesCount).toBe(5);

// - Interact with the Click Me button present inside the nested frames
// Present inside the nested frame- need to locate outerframe and inside frame

const outsideNestedFrame =  page.frameLocator('[src="page.xhtml"]');
const insideNestedFrame =  outsideNestedFrame.frameLocator('[src="framebutton.xhtml"]');
const clickMeInsideNestedFrame = insideNestedFrame.locator('//button[@id="Click"]');
await clickMeInsideNestedFrame.click();

// - Assert the text changed after clicking the button
const messageAfterClick = await clickMeInsideNestedFrame.innerText();
await expect(messageAfterClick).toBe('Hurray! You Clicked Me.');


})
