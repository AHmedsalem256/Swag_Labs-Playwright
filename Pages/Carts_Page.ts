
import {Page,expect} from "@playwright/test" ;


export class Cart_Page{

  readonly page : Page ;

  constructor(page : Page){
    this.page = page;
  }


  //Private Variables 

  private Username = "standard_user" ;
  private Password = "secret_sauce"  ;

  public  C_ADD_Remove_CART  = '.btn_primary.btn_inventory'     ; 
  public  C_REMOVE_ADD_CART  = '.btn_secondary.btn_inventory'   ; 
  public  C_CHECKOUT_BUTTON  = '.btn_action.checkout_button'    ;


  public  C_N_Expected_Text = "REMOVE"
  public  C_P_Expected_Text = "ADD TO CART"

  //Navigate to the Page Back from from buying item 
  public C_BFI_URL_LINK = "https://www.saucedemo.com/v1/inventory.html";


  //Methods 


async C_Select_Item(itemName: string) {
  //Click on Item 
  await this.page.click(itemName);
  //Click On Add to cart Button 
  await this.page.getByRole('button', { name: 'ADD TO CART' }).click();

  //Verify it changed to REMOVE
  await expect(this.page.getByRole('button', { name: 'REMOVE' })).toBeVisible();

}

  async C_GOTO_SPECIFIC(C_URL:string){
    await this.page.goto(C_URL);
  }


  async C_GOTO_Cart_Page(){
    await this.page.click('.shopping_cart_link.fa-layers.fa-fw');
  }



  async C_Re_Perform_ADD_TO_CART(C_ITEM:string){

      //GoBack To the Base Page and validate it 
      await this.C_GOTO_SPECIFIC(this.C_BFI_URL_LINK);
      await expect(this.page).toHaveTitle("Swag Labs");
      //select Item 
      await this.C_Select_Item(C_ITEM);
      await this.page.click('.shopping_cart_link.fa-layers.fa-fw');
  }

}