

import {Page,expect} from "@playwright/test" ;


export class Inventory_Page{

  readonly page : Page ;

  constructor(page : Page){
    this.page = page ;
  }

  public  I_P_ITEM_0    =  "#item_0_title_link"  ;
  public  I_P_ITEM_1    =  "#item_1_title_link"  ;
  public  I_P_ITEM_2    =  "#item_2_title_link"  ;
  public  I_P_ITEM_4    =  "#item_4_title_link"  ;
  public  I_P_ITEM_5    =  "#item_5_title_link"  ;


  public  I_P_ITEM_0_NAME    =  "Sauce Labs Bike Light"     ;
  public  I_P_ITEM_1_NAME    =  "Sauce Labs Bolt T-Shirt"   ;
  public  I_P_ITEM_2_NAME    =  "Sauce Labs Onesie"         ;
  public  I_P_ITEM_4_NAME    =  "Sauce Labs Backpack"       ;
  public  I_P_ITEM_5_NAME    =  "Sauce Labs Fleece Jacket"  ;

}

