// Automate interactions with frames, trigger alerts, and verify the displayed text based on
// actions using Playwright on the given application.


// Assignment Requirements:
// - Click Try it.
// - Get the message, type and accept the alert.
// - Retrieve the text “You pressed OK!” and verify it. 

import { test, expect } from '@playwright/test'

test('Learn Alert and Frames', async ({ page }) => {

    // Preconditions:
    // - Use page fixture
    // - Load the URL (https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm)

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");

    // - Click Try it.
    //Inside the Frame- Locate the frame first
    const outsideFrame = page.frameLocator('div>[id="iframeResult"]');

   // Adding Listener before clicking button
   page.on("dialog",async (alert)=>{
     console.log(`Alert Type ${alert.type()}`);
     console.log(`Alert Message ${alert.message()}`);
     await expect(alert.message()).toBe('Press a button!')
     if(alert.type()==='confirm'){
        alert.accept();
     }
   })
    await outsideFrame.locator('//button[text()="Try it"]').click();

    const message = await outsideFrame.locator('[id="demo"]').innerText();
    await expect(message).toBe('You pressed OK!');

})





