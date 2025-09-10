

import {test,expect}  from '@playwright/test';

import { Checkout_Page} from '../Pages/Checkout_WebPage';
import { Login_Page } from '../Pages/Login_Page';
import { Inventory_Page } from '../Pages/Inventory_Page';
import { Cart_Page } from '../Pages/Carts_Page';


test("TC-1 Success_Checkout_Process",async({page}) =>{
  
  //Creating Objects 
  const C_OBJ = new Cart_Page(page);
  const L_OBJ = new Login_Page(page);
  const I_OBJ = new Inventory_Page(page);
  const CH_OBJ = new Checkout_Page(page);


  //Success Login 
  await L_OBJ.Success_Login();
  await expect(page).toHaveTitle("Swag Labs");

  //Start Select Item 
  await C_OBJ.C_Select_Item(I_OBJ.I_P_ITEM_0);

  //GOTO Cart Page
  await C_OBJ.C_GOTO_Cart_Page();

  //Validate Item Found on Cart Page
  await expect(page.locator(I_OBJ.I_P_ITEM_0)).toHaveText(I_OBJ.I_P_ITEM_0_NAME);

  
  //Start Checkout Process
  await CH_OBJ.Success_Checkout_Provess();
  await expect(page.locator(CH_OBJ.CH_Sub_Header)).toHaveText("Finish");
  

});



test("TC-2 FAILED_Checkout_Process_Empty_First_NAME",async({page}) =>{

  //Creating Objects 
  const C_OBJ = new Cart_Page(page);
  const L_OBJ = new Login_Page(page);
  const I_OBJ = new Inventory_Page(page);
  const CH_OBJ = new Checkout_Page(page);
  //Success Login 
  await L_OBJ.Success_Login();
  await expect(page).toHaveTitle("Swag Labs");
  //Start Select Item 
  await C_OBJ.C_Select_Item(I_OBJ.I_P_ITEM_0);
  //GOTO Cart Page
  await C_OBJ.C_GOTO_Cart_Page();
  //Validate Item Found on Cart Page
  await expect(page.locator(I_OBJ.I_P_ITEM_0)).toHaveText(I_OBJ.I_P_ITEM_0_NAME);
  //Click on Checkout Buttoon 
  await page.click(CH_OBJ.CheckOUT_BUTTON_Locator) ; 
  //Validate you are on the right page 
  await expect(page.locator(CH_OBJ.CH_Sub_Header)).toHaveText("Checkout: Your Information");
  //Start Failed CheckOutProcess
  await CH_OBJ.Failed_First_NAME_CheckOutProcess();
  //Validate on the Error MSG
  await expect(page.getByText("Error: First Name is required")).toBeVisible();
});




test("TC-3 FAILED_Checkout_Process_Empty_Last_NAME",async({page}) =>{

  //Creating Objects 
  const C_OBJ = new Cart_Page(page);
  const L_OBJ = new Login_Page(page);
  const I_OBJ = new Inventory_Page(page);
  const CH_OBJ = new Checkout_Page(page);


  //Success Login 
  await L_OBJ.Success_Login();
  await expect(page).toHaveTitle("Swag Labs");

  //Start Select Item 
  await C_OBJ.C_Select_Item(I_OBJ.I_P_ITEM_0);

  //GOTO Cart Page
  await C_OBJ.C_GOTO_Cart_Page();

  //Validate Item Found on Cart Page
  await expect(page.locator(I_OBJ.I_P_ITEM_0)).toHaveText(I_OBJ.I_P_ITEM_0_NAME);

  
  //Start Failed CheckOutProcess
  await CH_OBJ.Failed_Last_NAME_CheckOutProcess();
  await expect(page.getByText("Error: Last Name is required")).toBeVisible();

});




test("TC-4 FAILED_Checkout_Process_Empty_Zip_Code",async({page}) =>{
  
  //Creating Objects 
  const C_OBJ = new Cart_Page(page);
  const L_OBJ = new Login_Page(page);
  const I_OBJ = new Inventory_Page(page);
  const CH_OBJ = new Checkout_Page(page);


  //Success Login 
  await L_OBJ.Success_Login();
  await expect(page).toHaveTitle("Swag Labs");

  //Start Select Item 
  await C_OBJ.C_Select_Item(I_OBJ.I_P_ITEM_0);

  //GOTO Cart Page
  await C_OBJ.C_GOTO_Cart_Page();

  //Validate Item Found on Cart Page
  await expect(page.locator(I_OBJ.I_P_ITEM_0)).toHaveText(I_OBJ.I_P_ITEM_0_NAME);

  
  //Start Failed CheckOutProcess

  await CH_OBJ.Failed_Zip_Code_CheckOutProcess();
  await expect(page.getByText("Error: Postal Code is required")).toBeVisible();


});