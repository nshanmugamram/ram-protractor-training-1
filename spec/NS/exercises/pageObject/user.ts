import {ElementFinder,by} from 'protractor';
export class User {
      
   name :ElementFinder;
   email:ElementFinder;
   phone:ElementFinder;

   constructor(elementFinder :ElementFinder){
    this.name = elementFinder.element(by.binding('row.name'));
    this.email = elementFinder.element(by.binding('row.email'));
    this.phone = elementFinder.element(by.binding('row.phone'));
   }

}