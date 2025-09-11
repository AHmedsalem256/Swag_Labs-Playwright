

import {Page} from "@playwright/test" ;


export class UX_UI{

  readonly page : Page ;

  constructor (page:Page){
    this.page = page ;
  }


  private UXUI_CartBadge_Button_ID = "#shopping_cart_container";

  async UXUI_ButtonClick(C_locator:string):Promise<void> {
    await this.page.click(C_locator);
  }


  UXUI_CartBadgeButton_Getter():string {
    return this.UXUI_CartBadge_Button_ID;
  }


  async UXUI_CartSelectImage(C_ProductName:string) : Promise<void>  {

    const productImage = this.page.locator(`img[alt="${C_ProductName}"]`);
    await productImage.click();

  }





}
