// Verify dynamic movie ticket booking flow in PVR Cinemas website

import { test, expect } from "@playwright/test";

test("PVR Cinemas Ticket Booking Flow", async ({ page }) => {
// 1. Launch the browser.
// 2. Navigate to https://www.pvrcinemas.com/.

await page.goto("https://www.pvrcinemas.com");

// 3. Select the required city.
// await page.locator("//div[@data-pc-name='dropdown']").first().click();
await page.locator("//li/span[text()='Coimbatore']").click();


// 4. Click on the Cinema option.
await page.locator("//span[text()='Cinema']").click();

// 5. Click on Select Cinema dropdown.
await page.locator("//span[text()='Select Cinema']").click();

// 6. Select any available cinema from the list.
await page.locator("//li[@class='p-dropdown-item']").nth(1).click();


// 7. Select any available date (Today/Tomorrow/Upcoming).
await page.locator("//li[@class='p-dropdown-item']").nth(1).click();

// 8. Select any available movie from the movie list.
await page.locator("//li[@class='p-dropdown-item']").last().click();

// 9. Select any available show time.
await page.locator("//li[@class='p-dropdown-item']").first().click();


// 10. Click on the Submit button.
await page.locator("//button[@aria-label='Submit']").click();
await page.waitForTimeout(2000);

// 11. Accept the consent/cookie popup if displayed.
await page.locator("//button[text()='Accept']").click();

// 12. Accept any additional confirmation popup if displayed.
//Not additional pop-up

// 13. Select any available seat from the seating layout.
await page.locator("//span[@class='seat-current-pvr'][contains(@id,'K:9')]").click();

// 14. Verify the selected seat information is displayed.
const movieInfo =await page.locator("//div[@class='summary-movies-content']").innerText();
expect(movieInfo).toContain('MAIN VAAPAS AAUNGA');

const seatNumber = await page.locator("//div[@class='seat-number']/p").innerText();
expect(seatNumber).toContain('K9')

// 15. Verify the total ticket amount is displayed.
const totalPrice = await page.locator("//div[@class='ticket-price']/p").last().innerText();
expect(totalPrice).toContain('202.49')

// 16. Verify the page title is displayed correctly.
const pageTitle = await page.title();
expect(pageTitle).toContain('PVR Cinemas');

// 17. Click on the Proceed button.
await page.locator("//button[text()='Proceed']").click();

})