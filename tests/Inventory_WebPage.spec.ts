import {test,expect} from '@playwright/test';

/***********************************************************************************************************/


/***********************************************************************************************************/
/* Important Variables */
let ITEM_0 :string   =  "#item_0_title_link"  ;
let ITEM_1 :string   =  "#item_1_title_link"  ;
let ITEM_2 :string   =  "#item_2_title_link"  ;
let ITEM_4 :string   =  "#item_4_title_link"  ;
let ITEM_5 :string   =  "#item_5_title_link"  ;


const G_expected = [
  "Sauce Labs Backpack",
  "Sauce Labs Bike Light",
  "Sauce Labs Bolt T-Shirt",
  "Sauce Labs Fleece Jacket",
  "Sauce Labs Onesie",
  "Test.allTheThings() T-Shirt (Red)"
  ];


/***********************************************************************************************************/


/***********************************************************************************************************/
//Username , Password
let G_Username : string  = "standard_user";
let G_Password : string  = "secret_sauce";

/***********************************************************************************************************/


/***********************************************************************************************************/

//URLS 
let URL_ITEM_0 :string  = "https://www.saucedemo.com/v1/inventory-item.html?id=0" ;
let URL_ITEM_1 :string  = "https://www.saucedemo.com/v1/inventory-item.html?id=1" ;
let URL_ITEM_2 :string  = "https://www.saucedemo.com/v1/inventory-item.html?id=2" ;
let URL_ITEM_4 :string  = "https://www.saucedemo.com/v1/inventory-item.html?id=4" ;
let URL_ITEM_5 :string  = "https://www.saucedemo.com/v1/inventory-item.html?id=5" ;


/***********************************************************************************************************/

//Important Buttons

let ADD_CART_Button    :string = ".btn_primary btn_inventory";
let REMOVE_CART_Button :string = ".btn_secondary btn_inventory";

/***********************************************************************************************************/

/***********************************************************************************************************/
/* Reuseble Functions */

async function Navigate_Login_Success(page,CP_Username:string , CP_Password:string){
  
  await page.goto("https://www.saucedemo.com/v1/");
  await page.fill("#user-name",CP_Username);
  await page.fill("#password",CP_Password);
  await page.click("#login-button");

  //Success Login Validation 
  await expect(page.locator('.product_label')).toHaveText("Products");

}


async function Select_Item(page,CP_ID:string){
    await page.click(CP_ID);
} 



/***********************************************************************************************************/

/* Test Cases */

test.beforeEach(async({page}) => {
 
  
  await Navigate_Login_Success(page,G_Username,G_Password);

});

test("TC-1: Verify Success Login",async ({page})=>{

});


test("TC-2: Verify Add to Cart Functionality",async ({page})=>{

  //Select Item 
  await Select_Item(page,ITEM_0);

  await expect(page).toHaveURL(URL_ITEM_0);

  //Click On Cart 
  await page.click('//*[@id="inventory_item_container"]/div/div/div/button');
  //Validation of ADD Cart
  await expect(page.locator('//*[@id="inventory_item_container"]/div/div/div/button')).toHaveText("REMOVE");

  //Validate that Cart Pic Increment to be 1

  await expect(page.locator('.fa-layers-counter.shopping_cart_badge')).toHaveText('1');

  
});





test("TC-3: Verify Remove from Cart",async ({page})=>{
  
  //Select Item 
  await Select_Item(page,ITEM_0);

  await expect(page).toHaveURL(URL_ITEM_0);

  //Click On Cart 
  await page.click('.btn_inventory');
  //Validation of ADD Cart
  await expect(page.locator('.btn_inventory')).toHaveText("REMOVE");
  
  //Click On Cart 
  await page.click('.btn_inventory');
  //Validation of REMOVE Cart
  await expect(page.locator('.btn_inventory')).toHaveText("ADD TO CART");

});


test("TC-4: Verify Sorting (A to Z)",async ({page})=>{
  
  //Get All Titles
  const titles = await page.locator('.inventory_item_name').allTextContents();
  

  //Compare the Titles 
  expect(titles).toEqual(G_expected);

});


test("TC-5: Verify Sorting (Price Low to High)",async ({page})=>{

  await page.selectOption(".product_sort_container","lohi");

  const pricesText  = await  page.locator('.inventory_item_price').allTextContents();

  const prices = pricesText.map(p => parseFloat(p.replace("$", "")));

  // Create a sorted copy of the prices
  const sortedPrices = [...prices].sort((a, b) => a - b);

  // Assert arrays are equal
  expect(prices).toEqual(sortedPrices);

});



/***********************************************************************************************************/