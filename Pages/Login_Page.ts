
import {Page} from "@playwright/test";



export class Login_Page{
  readonly page : Page ;

  constructor (page : Page){
    this.page = page ;
  }

  private Username = "standard_user";
  private Password = "secret_sauce";

  //Locators 
  private USERNAME_LOCATOR      = "#user-name"    ;
  private PASSWORD_LOCATOR      = "#password"     ;
  private LOGIN_BUTTON_LOCATOR  = "#login-button" ;

  async Success_Login(){
    
    await this.page.goto("https://www.saucedemo.com/v1/");
    await this.page.fill(this.USERNAME_LOCATOR,this.Username);
    await this.page.fill(this.PASSWORD_LOCATOR,this.Password);
    await this.page.click(this.LOGIN_BUTTON_LOCATOR);
  }

}
