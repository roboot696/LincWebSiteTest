import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";
import exp from "constants";

When("User add items on the cart", async function () {
  
  await pageFixture.page.locator("#add-to-cart-sauce-labs-backpack").click();
  await pageFixture.page.locator("#add-to-cart-sauce-labs-bike-light").click();
  await pageFixture.page.locator("#add-to-cart-sauce-labs-onesie").click();
 
});
Then("The cart should to show the number of items added", async function () {
  const value = await pageFixture.page
    .locator("div#shopping_cart_container > .shopping_cart_link")
    .textContent();
  await expect(value).toEqual("3");
});

When("User goes to the cart", async function () {
  await pageFixture.page
    .locator("div#shopping_cart_container > .shopping_cart_link")
    .click();
});

When("User validates products added", async function () {
  const ittemsText = pageFixture.page
    .locator(".inventory_item_name")
    .allInnerTexts();
  const numItems = (await ittemsText).length;
  await expect(numItems.toString()).toEqual("3");
});

When("User wants to remove a product from the cart", async function () {
  await pageFixture.page.locator("#remove-sauce-labs-backpack").click();

  const ittemsText = pageFixture.page
    .locator(".inventory_item_name")
    .allInnerTexts();
  const numItems = (await ittemsText).length;
  await expect(numItems.toString()).toEqual("2");
});

When('User sorts the products by Name A to Z', async function () {
    await pageFixture.page.locator('[data-test="product-sort-container"]').selectOption('az');
    const ItemsName = await pageFixture.page.locator(".inventory_item_name ").allInnerTexts();
    const sortedItemsName = ItemsName.sort((a, b) => a.localeCompare(b));
    const FirstItem = sortedItemsName[0];
    await expect(pageFixture.page.locator(".inventory_item_name ").first()).toContainText(FirstItem)
  })

Then('User sorts the products by name Z to A', async function () {
    await pageFixture.page.locator('[data-test="product-sort-container"]').selectOption('za');
    const ItemsName = await pageFixture.page.locator(".inventory_item_name ").allInnerTexts();
    const sortedItemsNameDesc = ItemsName.sort((a, b) => b.localeCompare(a));
    const lastItem = sortedItemsNameDesc[0];
    await expect(pageFixture.page.locator(".inventory_item_name ").first()).toContainText(lastItem)
})

Then('User sorts the products by price low to high', async function () {
    await pageFixture.page.locator('[data-test="product-sort-container"]').selectOption('lohi');
    const valuesItems = await pageFixture.page.locator(".inventory_item_price").allInnerTexts();
    const numericValues = valuesItems.map(price => parseFloat(price.replace(/[^0-9.-]+/g, "")));
    const sortedNumericValues = numericValues.sort((a, b) => a - b);
    const valueItemString =sortedNumericValues[0].toString();
    const lowVal = await pageFixture.page.locator('.inventory_item_price').first().allInnerTexts();
    await expect(lowVal.toString()).toContain(valueItemString)

})

Then('User sorts the products by price high to low',  async function (){
    await pageFixture.page.locator('[data-test="product-sort-container"]').selectOption('hilo');
    const valuesItems = await pageFixture.page.locator(".inventory_item_price").allInnerTexts();
    const numericValues = valuesItems.map(price => parseFloat(price.replace(/[^0-9.-]+/g, "")));
    const sortedNumericValuesDesc = numericValues.sort((a, b) => b - a);
    const valueItemString =sortedNumericValuesDesc[0].toString();
    const highVal = await pageFixture.page.locator('.inventory_item_price').first().allInnerTexts();
    await expect(highVal.toString()).toContain(valueItemString)
})

Then('User can see the details of each product', async function () {
    const newProduct = await pageFixture.page.locator("[data-test='item-4-title-link'] [data-test]").allInnerTexts();
    await pageFixture.page.locator("#item_4_title_link").click();
    await expect(pageFixture.page.locator(".inventory_details_name.large_size")).toContainText(newProduct)


})

Then('User can back to products', async function () {
    await pageFixture.page.locator('[data-test="back-to-products"]').click();
    await expect(pageFixture.page.locator(".app_logo")).toContainText("Swag Labs");
})

When('user wants to checkout', async function () {
 await pageFixture.page.locator("#checkout").click();
})

When('User fills the form with name {string}, lastname {string} and zipcode {string}', async function(name: string, lastName: string, zipCode: string) {
  await expect(pageFixture.page.locator("div#header_container > .header_secondary_container")).toContainText("Your Information");
  await pageFixture.page.locator("#first-name").fill(name);
  await pageFixture.page.locator("#last-name").fill(lastName);
  await pageFixture.page.locator("#postal-code").fill(zipCode);
  await pageFixture.page.locator("#continue").click();

})

When('User can finish the order', async function () {
  await pageFixture.page.locator("#finish").click();
  await expect(pageFixture.page.locator("div#checkout_complete_container > .complete-header")).toContainText("Thank you for your order!")
 })
 

