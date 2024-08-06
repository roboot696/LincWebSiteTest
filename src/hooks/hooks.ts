import { BeforeAll, AfterAll, Before, After } from "@cucumber/cucumber";
import { chromium , Browser, Page, BrowserContext} from "@playwright/test";
import { pageFixture } from "./pageFixture";


let page: Page;
let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
    browser = await chromium.launch();
})

Before(async function () {
    
   context =  await browser.newContext();
    page = await context.newPage();
    pageFixture.page = page;
});

After(async function () {
    await page.close();
    await context.close();
    
})
AfterAll(async function () {
    await browser.close();
})