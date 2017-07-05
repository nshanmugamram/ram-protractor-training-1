import {browser, element, by} from 'protractor';

class Page {
   
  saveButton = element(by.buttonText('Save'));

  constructor(){

  }
   clickSave (){
      this.saveButton.click();
   }


}
export class ContactPage extends Page {

  
  private updateInfoName = element(by.model('ctrl.user.name'));
  private updateInfoEmail = element(by.model('ctrl.user.email'));
  private updateInfoPhone = element(by.model('ctrl.user.phone'));

  updateInfo = {
    name : this.updateInfoName,
    email : this.updateInfoEmail,
    phone : this.updateInfoPhone
  }

  private contactInfoName = element(by.binding('ctrl.displayUser.name'));
  private contactInfoEmail = element(by.binding('ctrl.displayUser.email'));
  private contactInfoPhone = element(by.binding('ctrl.displayUser.phone'));

  contactInfo = {
    name : this.contactInfoName,
    email : this.contactInfoEmail,
    phone : this.contactInfoPhone
  }

  updateInfoEmailError = element(by.css('span[ng-show=form.emailAdd.$error.email])'));
  updateInfoPhoneError = element(by.xpath('//span[@ng-show="form.phoneAdd.$error.phone"]'));
  

  
  constructor() {
    super();
    browser.get("http://localhost:9000/#/exercise1");
  }


  
  

}