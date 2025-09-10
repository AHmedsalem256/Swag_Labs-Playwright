
import {test,expect} from "@playwright/test"

import {Cart_Page} from "../Pages/Carts_Page"
import { Login_Page } from "../Pages/Login_Page";
import { Inventory_Page } from "../Pages/Inventory_Page";




test("TC-1 C_Add_A_Single_Item_To_The_Cart",async({page})=>{
  //Creating Object form Cart Page and Login Page
  const C_OBJ = new Cart_Page(page);
  const L_OBJ = new Login_Page(page);
  const I_OBJ = new Inventory_Page(page);
  //Success Login 
  await L_OBJ.Success_Login();
  await expect(page).toHaveTitle("Swag Labs");
  //Start Select the Cart 
  await C_OBJ.C_Select_Item(I_OBJ.I_P_ITEM_0);
  await page.click('.shopping_cart_link.fa-layers.fa-fw');
  //Validation of Existing Item  
  await expect(page.locator(I_OBJ.I_P_ITEM_0)).toBeVisible();
});


test("TC-2 C_Add_Multiple_Items_To_The_Cart",async({page})=>{

  //Creating Object form Cart Page and Login Page
  const C_OBJ = new Cart_Page(page);
  const L_OBJ = new Login_Page(page);
  const I_OBJ = new Inventory_Page(page);
  //Success Login 
  await L_OBJ.Success_Login();
  await expect(page).toHaveTitle("Swag Labs");

  await C_OBJ.C_Re_Perform_ADD_TO_CART(I_OBJ.I_P_ITEM_0);
  await C_OBJ.C_Re_Perform_ADD_TO_CART(I_OBJ.I_P_ITEM_1);
  await C_OBJ.C_Re_Perform_ADD_TO_CART(I_OBJ.I_P_ITEM_2);

  //Validation of Existing Item  
  await expect(page.locator(I_OBJ.I_P_ITEM_0)).toBeVisible();
  await expect(page.locator(I_OBJ.I_P_ITEM_1)).toBeVisible();
  await expect(page.locator(I_OBJ.I_P_ITEM_2)).toBeVisible();

});



test("TC-3 C_Remove_An_Item_From_The_Cart_Page",async({page})=>{

  const C_OBJ = new Cart_Page(page);
  const L_OBJ = new Login_Page(page);
  const I_OBJ = new Inventory_Page(page);
  //Success Login 
  await L_OBJ.Success_Login();
  await expect(page).toHaveTitle("Swag Labs");

  //Add Item To Cart 
  C_OBJ.C_Select_Item(I_OBJ.I_P_ITEM_5);

  //Goto Cart Page
  C_OBJ.C_GOTO_Cart_Page();

  //Validate Item Found on Cart Page
  await expect(page.locator(I_OBJ.I_P_ITEM_4)).toHaveText(I_OBJ.I_P_ITEM_4_NAME);

  //Calculate the Number of Items Before 
  const C_COUNT = await page.locator('.cart_item').count();
  await page.click(C_OBJ.C_ADD_Remove_CART);
  await expect(page.locator('.cart_item')).toHaveCount(C_COUNT - 1);

});


test("TC-4 Navigate_Away_And_Return_To_Cart",async ({page})=>{


    const C_OBJ = new Cart_Page(page);
    const L_OBJ = new Login_Page(page);
    const I_OBJ = new Inventory_Page(page);
    //Success Login 
    await L_OBJ.Success_Login();
    await expect(page).toHaveTitle("Swag Labs");

    //Add Item to Cart and GoBAck 
    await C_OBJ.C_Select_Item(I_OBJ.I_P_ITEM_4);
    await C_OBJ.C_GOTO_SPECIFIC(C_OBJ.C_BFI_URL_LINK);
    
    //Goto Cart Page
    await C_OBJ.C_GOTO_Cart_Page();
    await expect(page.locator(I_OBJ.I_P_ITEM_4)).toBeVisible();

});


test("TC-5 Checkout_Process_ON_EMPTY_ITEMS",async ({page})=>{

    //Create Objects 
    const C_OBJ = new Cart_Page(page);
    const L_OBJ = new Login_Page(page);
    //Success Login 
    await L_OBJ.Success_Login();
    await expect(page).toHaveTitle("Swag Labs");

    //GOTO Cart Page
    C_OBJ.C_GOTO_Cart_Page();
    await page.click('.btn_action.checkout_button ');
    await expect(page).toHaveTitle("ERROR");

});