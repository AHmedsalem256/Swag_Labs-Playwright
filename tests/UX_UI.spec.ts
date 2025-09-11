
import {test,expect} from "@playwright/test" ;

import { Cart_Page } from "../Pages/Carts_Page";
import { UX_UI } from "../Pages/UX_UI";
import { Login_Page } from "../Pages/Login_Page";
import { Inventory_Page } from "../Pages/Inventory_Page";


test.skip("TC-1 UX_UI Verify Button States",async({page})=>{

  const UXUI_OBJ = new UX_UI(page);
  const L_OBJ = new Login_Page(page);

  //Sucess Login 
  await L_OBJ.Success_Login();
  //Validate Success Login 
  await expect(page.locator('#shopping_cart_container')).toBeVisible();

  //Click on the Cart Button 
  await UXUI_OBJ.UXUI_ButtonClick(UXUI_OBJ.UXUI_CartBadgeButton_Getter());
  //Validate the Button is Clickble 
  await expect(page).toHaveURL("https://www.saucedemo.com/v1/cart.html");

});


test.skip("TC-2 Verify Failed Login",async({page})=>{

  const L_OBJ = new Login_Page(page);
  const C_OBJ = new Cart_Page(page);


  await L_OBJ.L_FailedLogin();

  //Validate the Error 
  await expect(page.getByText("Epic sadface: Username and password do not match any user in this service")).toBeVisible();

});


test.skip("TC-3 Verify Cart Badge",async({page})=>{

  const L_OBJ = new Login_Page(page);
  const C_OBJ = new Cart_Page(page);
  const I_OBJ = new Inventory_Page(page);


  await L_OBJ.Success_Login();

  await C_OBJ.C_Select_Item(I_OBJ.I_P_ITEM_0);

  //Validation on the Cart Badge 
  await expect(page.locator('.fa-layers-counter.shopping_cart_badge')).toBeVisible();

});




test("TC-4 Select_Product_from_Image",async({page})=>{

  const L_OBJ = new Login_Page(page);
  const C_OBJ = new Cart_Page(page);
  const I_OBJ = new Inventory_Page(page);
  const U_OBJ = new UX_UI(page);


  //Success Login 
  await L_OBJ.Success_Login();
  //Select Product Based On Image
  //await U_OBJ.UXUI_CartSelectImage("Sauce Labs Backpack");
  page.click('/html/body/div/div[2]/div[2]/div/div[2]/div/div[3]/div[1]/a/img');
  //Validate Images is working 
  await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory-item.html?id=1");



});



