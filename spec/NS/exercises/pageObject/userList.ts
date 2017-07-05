
import {ElementFinder,ElementArrayFinder} from 'protractor';
import {User} from './user';

export class UserList {   
   list : User[];
   getUser(i: number){
    return this.list[i];
   }
   constructor(elementFinders :ElementArrayFinder){
       for(var i in elementFinders){
         this.list.push(new User(elementFinders[i]));
       }
   }

}
