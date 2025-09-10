

import {test,expect}  from '@playwright/test';

import { Checkout_Page} from '../Pages/Checkout_WebPage';
import { Login_Page } from '../Pages/Login_Page';
import { Inventory_Page } from '../Pages/Inventory_Page';
import { Cart_Page } from '../Pages/Carts_Page';
import { Logout_Page } from '../Pages/Logout_WebPage';


test("TC-1 Logout Successfully ",async({page})=>{


    //Creating Objects 
    const L_OBJ  = new Login_Page(page);
    const LO_OBJ = new Logout_Page(page);
  
    //Success Login 
    await L_OBJ.Success_Login();
    await expect(page).toHaveTitle("Swag Labs");

    //Success Logout
    await LO_OBJ.LO_Click_Burger_Menue();
    await LO_OBJ.LO_Click_Logout_Button();
    //Validate Logout 
    await expect(page).toHaveTitle("Swag Labs");

});



test("TC-2 Logout-Direct-to-Inventory_Page" , async ({page})=>{
  
    //Creating Objects 
    const L_OBJ  = new Login_Page(page);
    const LO_OBJ = new Logout_Page(page);
  
    //Success Login 
    await L_OBJ.Success_Login();
    await expect(page).toHaveTitle("Swag Labs");

    //Success Logout
    await LO_OBJ.LO_Click_Burger_Menue();
    await LO_OBJ.LO_Click_Logout_Button();
    //Validate Logout 
    await expect(page).toHaveTitle("Swag Labs");

    //Goto Inventory Page
    await LO_OBJ.LO_Goto_SpecificURL(LO_OBJ.LO_Inventory_URL);

    //Assert you are in the Login Page
    await expect(page).toHaveURL("https://www.saucedemo.com/v1/");
});



test("TC-3 Logout-Direct-to-Cart_Page" , async ({page})=>{
  
    //Creating Objects 
    const L_OBJ  = new Login_Page(page);
    const LO_OBJ = new Logout_Page(page);
  
    //Success Login 
    await L_OBJ.Success_Login();
    await expect(page).toHaveTitle("Swag Labs");

    //Success Logout
    await LO_OBJ.LO_Click_Burger_Menue();
    await LO_OBJ.LO_Click_Logout_Button();
    //Validate Logout 
    await expect(page).toHaveTitle("Swag Labs");

    //Goto Cart Page
    await LO_OBJ.LO_Goto_SpecificURL(LO_OBJ.LO_CART_URL);

    //Assert you are in the Login Page
    await expect(page).toHaveURL("https://www.saucedemo.com/v1/");
});



test("TC-4 Logout-Direct-to-CheckOut_Page" , async ({page})=>{
  
    //Creating Objects 
    const L_OBJ  = new Login_Page(page);
    const LO_OBJ = new Logout_Page(page);
  
    //Success Login 
    await L_OBJ.Success_Login();
    await expect(page).toHaveTitle("Swag Labs");

    //Success Logout
    await LO_OBJ.LO_Click_Burger_Menue();
    await LO_OBJ.LO_Click_Logout_Button();
    //Validate Logout 
    await expect(page).toHaveTitle("Swag Labs");

    //Goto CheckOut Page
    await LO_OBJ.LO_Goto_SpecificURL(LO_OBJ.LO_CHECKOUT_URL);

    //Assert you are in the Login Page
    await expect(page).toHaveURL("https://www.saucedemo.com/v1/");
});




test("TC-5 Logout-Refresh page" , async ({page})=>{
  
    //Creating Objects 
    const L_OBJ  = new Login_Page(page);
    const LO_OBJ = new Logout_Page(page);
    //Success Login 
    await L_OBJ.Success_Login();
    await expect(page).toHaveTitle("Swag Labs");
    //Success Logout
    await LO_OBJ.LO_Click_Burger_Menue();
    await LO_OBJ.LO_Click_Logout_Button();
    //Validate Logout 
    await expect(page).toHaveTitle("Swag Labs");
    //Reload Page
    await page.reload();
    //Assert you stay in the Login Page
    await expect(page).toHaveURL("https://www.saucedemo.com/v1/");
});
