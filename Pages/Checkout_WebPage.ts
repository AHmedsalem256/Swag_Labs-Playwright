

import {Page} from "@playwright/test"; 


export class Checkout_Page{

  readonly page : Page ;

  constructor (page:Page){
    this.page = page ;
  }

  //Important Attributes 

  //Public Attributes
  public CH_First_Name   = "Ahmed"           ;
  public CH_Last_Name    = "Salem"                ;
  public CH_ZIP_CODE     = "07008"                 ;
  public CH_Sub_Header   = '.subheader'            ;
  public CH_Error_Button = '.error-button'   ;
  //Private Attributes
  private First_Name_Locator         = "#first-name"                ;
  private Last_Name_Locator          = "#last-name"                 ;
  private ZIP_CODE_Locator           = "#postal-code"               ;
  private CONTINUE_BUTTON_Locator    = '.btn_primary.cart_button'   ;
  public  CheckOUT_BUTTON_Locator    = '.btn_action.checkout_button';
  private Finish_BUTTON_Locator      = '.btn_action.cart_button'    ;
  

  //ImportMethod 

  public async Success_Checkout_Provess(){

    await this.page.click(this.CheckOUT_BUTTON_Locator) ; 
    await this.page.fill(this.First_Name_Locator , this.CH_First_Name) ; 
    await this.page.fill(this.Last_Name_Locator , this.CH_Last_Name) ; 
    await this.page.fill(this.ZIP_CODE_Locator , this.CH_ZIP_CODE) ; 
    await this.page.click(this.CONTINUE_BUTTON_Locator) ; 
    await this.page.click(this.Finish_BUTTON_Locator);

  }

  public async Failed_First_NAME_CheckOutProcess(){
    
    //await this.page.fill(this.First_Name_Locator , " ") ; 

    await this.page.fill(this.Last_Name_Locator , this.CH_Last_Name) ; 
    await this.page.fill(this.ZIP_CODE_Locator , this.CH_ZIP_CODE) ; 
    await this.page.click(this.CONTINUE_BUTTON_Locator) ; 
  }

  public async Failed_Last_NAME_CheckOutProcess(){
    await this.page.click(this.CheckOUT_BUTTON_Locator) ; 
    await this.page.fill(this.First_Name_Locator , this.CH_First_Name) ; 
    //await this.page.fill(this.Last_Name_Locator , " ") ; 
    await this.page.fill(this.ZIP_CODE_Locator , this.CH_ZIP_CODE) ; 
    await this.page.click(this.CONTINUE_BUTTON_Locator) ;
  }
  public async Failed_Zip_Code_CheckOutProcess(){
    await this.page.click(this.CheckOUT_BUTTON_Locator) ; 
    await this.page.fill(this.First_Name_Locator , this.CH_First_Name) ; 
    await this.page.fill(this.Last_Name_Locator , this.CH_Last_Name) ; 
    //await this.page.fill(this.ZIP_CODE_Locator , " ") ; 
    await this.page.click(this.CONTINUE_BUTTON_Locator) ;
  }


}
 
