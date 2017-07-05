import {browser, element, by,ElementArrayFinder,ElementFinder} from 'protractor';
import { UserList } from './userList';
 

export class UserManagementPage {
   
  addUserButton =  element(by.linkText("Add user"));

  getTotalCount(){
    return element.all(by.css('[ng-repeat="row in ctrl.userList"]')).count;
  }
   getTotalCountByRepeater(){
    return element.all(by.repeater('row in ctrl.userList')).count;
  }
  getUserList() : UserList{
    return new UserList(element.all(by.repeater('row in ctrl.userList')));
  }
  constructor() { 
    browser.get("http://localhost:9000/#/exercise2");
  }
  

}