
import { LoginPage } from "./login.ts";
import { test } from "@playwright/test";

test("Salesforce Login page functionality check using POM", async ({ page }) => {

    const obj = new LoginPage(page) // created an object to invoke th special method called constructor and apss the arguments

    await obj.loadUrl("https://login.salesforce.com")
    await obj.enterCredentials("suryaanandasundaram.df93405f59ff@agentforce.com", "Surya@123");
    await obj.clickLogin();

})