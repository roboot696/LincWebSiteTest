import { Given, Then, When } from "@cucumber/cucumber"
import { expect } from "@playwright/test"
import { pageFixture } from "../../hooks/pageFixture";

Given('User navigates to the application', async function () {

await pageFixture.page.goto("https://www.saucedemo.com/")
});


Given('User enter the username as {string}', async function (username) {
  await pageFixture.page.locator("#user-name").fill(username);
});



Given('User enter password as {string}', async function (password) {
  await pageFixture.page.locator("#password").fill(password);
});



When('User click on the login button', async function () {
  await pageFixture.page.locator("#login-button").click();
  await expect(pageFixture.page.locator(".app_logo")).toContainText("Swag Labs");
});

Then('User blocked clicks on the login button', async function (){
  await pageFixture.page.locator("#login-button").click();
  
})

Then('User cant get access', async function () {
  await expect(pageFixture.page.locator("[data-test='error']")).toBeVisible();
})

Then('Login should be success', async function (){
  await expect(pageFixture.page.locator(".app_logo")).toContainText("Swag Labs");
})





