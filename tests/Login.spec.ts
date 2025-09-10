import {test,expect} from '@playwright/test';


//Test Case 1 : Testing the Valid Login Credientials 

test("TestCase-1 Valid Login Credientials ",async ({page}) =>{  
        await page.goto("https://www.saucedemo.com/v1/");
        //Validation OF Success Openning 
        await expect(page).toHaveTitle("Swag Labs");

        await page.fill("#user-name","standard_user");
        await page.fill("#password","secret_sauce");
        await page.click("#login-button");

        //Validation of success login 
        await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html");
} );

//Test Case 2 : Testing the Both Invalid login Credientials 

test("TestCase-2 Invalid Login Credientials ",async ({page}) =>{  
        await page.goto("https://www.saucedemo.com/v1/");

        await page.fill("#user-name","standard");
        await page.fill("#password","secret");
        await page.click("#login-button");

        //Validation of Failed login 
        await expect (page.locator('//*[@id="login_button_container"]/div/form/h3')).toHaveText("Epic sadface: Username and password do not match any user in this service");
} );


//TestCase-3 : Valid Username and Invalid Password 
test("TestCase-3 Valid Username and Invalid Password Credientials ",async ({page}) =>{  
        await page.goto("https://www.saucedemo.com/v1/");
        //Validation OF Success Openning 
        await expect(page).toHaveTitle("Swag Labs");

        await page.fill("#user-name","standard_user");
        await page.fill("#password","secret");
        await page.click("#login-button");

        //Validation of Failed login 
        await expect (page.locator('//*[@id="login_button_container"]/div/form/h3')).toHaveText("Epic sadface: Username and password do not match any user in this service");
} );


//TestCase-4 : Invalid Username and Valid Password 
test("TestCase-4 Invalid Username and Valid Password Credientials ",async ({page}) =>{  
        await page.goto("https://www.saucedemo.com/v1/");
        //Validation OF Success Openning 
        await expect(page).toHaveTitle("Swag Labs");

        await page.fill("#user-name","standard_");
        await page.fill("#password","secret_sauce");
        await page.click("#login-button");

        //Validation of Failed login 
        await expect (page.locator('//*[@id="login_button_container"]/div/form/h3')).toHaveText("Epic sadface: Username and password do not match any user in this service");
} );

//TestCase-5 : Without Username and Password
test("TestCase-5 Empty Login Credientials ",async ({page}) =>{  
        await page.goto("https://www.saucedemo.com/v1/");
        //Validation OF Success Openning 
        await expect(page).toHaveTitle("Swag Labs");

        await page.fill("#user-name"," ");
        await page.fill("#password"," ");
        await page.click("#login-button");

        //Validation of Failed login 
        await expect (page.locator('//*[@id="login_button_container"]/div/form/h3')).toHaveText("Username is required");});



//TestCase-6 : Without Username and Password
test("TestCase-6 Valid Username and Empty Password Credientials ",async ({page}) =>{  
        await page.goto("https://www.saucedemo.com/v1/");
        //Validation OF Success Openning 
        await expect(page).toHaveTitle("Swag Labs");

        await page.fill("#user-name","standard_user");
        await page.fill("#password"," ");
        await page.click("#login-button");

        //Validation of Failed login 
        await expect (page.locator('//*[@id="login_button_container"]/div/form/h3')).toHaveText("Epic sadface: Password is required");
} );


//TestCase-7 : Without Username and Password
test("TestCase-7 Empty Username Field and Valid Password Credientials ",async ({page}) =>{  
        await page.goto("https://www.saucedemo.com/v1/");
        //Validation OF Success Openning 
        await expect(page).toHaveTitle("Swag Labs");

        await page.fill("#user-name"," ");
        await page.fill("#password","secret_sauce");
        await page.click("#login-button");

        //Validation of Failed login 
        await expect (page.locator('//*[@id="login_button_container"]/div/form/h3')).toHaveText("Epic sadface: Username is required");
} );
