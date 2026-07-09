//Test Case Name: Search product, apply filters, add to cart in Decathlon

import {test,expect} from '@playwright/test'

test("Search product, apply filters, add to cart in Decathlon",async({page})=>{

// Launch the browser
// Navigate to https://www.decathlon.in/
await page.goto("https://www.decathlon.in/");

// Verify the user is navigated to the Decathlon home page
const homePageLogo = page.locator("//a[@aria-label='Decathlon Home']");
await expect(homePageLogo).toBeVisible();

// Click on the Search icon on the home page
const searchInput =  page.locator("//input[@type='search']");
await searchInput.click();

// Verify the search input field is enabled
await expect(searchInput).toBeEnabled();

// Enter the product name as "shoes" in the search field
await searchInput.fill("shoes");

// Press Enter to search the product
await searchInput.press('Enter');

// Capture and print the page title in the console
const pageTitle = await page.title();
console.log(pageTitle);

// Verify the page title is displayed as "Search | shoes"
expect(pageTitle).toContain("Search | shoes")

// Click on the "Running" category filter
await page.locator("//span[text()='Category']").click();
await page.locator("//span[text()='Sport shoes']").click();

// Click on the "Men" gender filter
await page.locator("//span[text()='Gender']").click();
await page.locator("(//span[text()='Men'])[2]").click();

// Click on the shoe size filter "UK 10.5"
await page.locator("//span[text()='Size']").click();
await page.locator("//span[text()='Uk 10.5 - eu 45']").click();

// Click on the Sort option
await page.locator("//span[text()='Most relevant']").click();

// Select the sorting option "Price: High to Low"
await page.locator("//span[text()='Price (high → low) ']").click();

//Click on the first product from the displayed product list
await page.locator("//div[contains(@class,'relative aspect-square w-full overflow-hidden bg-gray-100')]").first().click();

// Select the shoe size "UK 10.5 - EU 45" on the product detail page
await page.locator("//span[text()='UK 10.5 - EU 45']").click();

// Click on the "Add to Cart" button
await page.locator("//span[text()='Add to cart']").click();
const successMessage = page.locator("//h3[text()='Product(s) added to cart']");
await expect(successMessage).toBeVisible();

// Click on the Cart option
await page.locator("//a[@aria-label='Cart']").click();

// Fetch the total cart value
const totalCartValue = await page.locator("//div[@data-test-id='cart:cart-checkout-total-cart-value']").innerText();
// Print the total cart amount in the console
console.log(totalCartValue);
expect(totalCartValue).toContain("₹12,999");

})