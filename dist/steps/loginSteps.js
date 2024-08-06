"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const test_1 = require("@playwright/test");
let browser;
let page;
(0, cucumber_1.Given)('User navigates to the application', async function () {
    browser = await test_1.chromium.launch({ headless: false });
    page = await browser.newPage();
    await page.goto("https://www.saucedemo.com/");
});
(0, cucumber_1.Given)('User enter the username as {string}', async function (username) {
    await page.locator("#user-name").fill(username);
});
(0, cucumber_1.Given)('User enter password as {string}', async function (password) {
    await page.locator("#password").fill(password);
});
(0, cucumber_1.When)('User click on the login button', async function () {
    await page.locator("login-button").click();
});
(0, cucumber_1.Then)('Login should be success', async function () {
    await (0, test_1.expect)(page.locator(".app_logo")).toContainText("Swag Labs");
});
