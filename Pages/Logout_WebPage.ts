
import {Page} from "@playwright/test" ;


export class Logout_Page{

  readonly page ;

  constructor (page : Page){
    this.page = page ;
  }

  private LO_Burger_Menue = '.bm-burger-button'   ;
  private LO_Logut_Button = '#logout_sidebar_link';


  //Important URL's

  public  LO_Inventory_URL = "https://www.saucedemo.com/v1/inventory.html";
  public  LO_CART_URL      = "https://www.saucedemo.com/v1/cart.html";
  public  LO_CHECKOUT_URL  = "https://www.saucedemo.com/v1/checkout-step-one.html";



  public async LO_Click_Burger_Menue() {
    await this.page.click(this.LO_Burger_Menue);
  }


  public async LO_Click_Logout_Button() {
    await this.page.click(this.LO_Logut_Button);
  }


  public async LO_Logout() {
    await this.LO_Click_Burger_Menue();
    await this.LO_Click_Logout_Button();
  }

  public async LO_Goto_SpecificURL(C_URL:string){
    await this.page.goto(C_URL);
  }


}

