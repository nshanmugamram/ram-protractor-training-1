import {browser, element, by,ElementArrayFinder,ElementFinder} from 'protractor';
 
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

export class UserList {   
   
   list : User[];
   
   getUserByIndex(i: number){
     return this.list[i];
   }
   
  getUserByObject(iuser :{name?:string,email?:string,phone?:string}){
     return this.list.filter(  async  (user)=>{
        var iname = await user.name.getText();
         var iemail = await user.email.getText();
          var iphone = await user.phone.getText();
        return iname ===iuser.name || iemail === iuser.email || iphone === iuser.phone ;
     });
   }

   getByColumn(column:string){
    return this.list.map( (user)=>{  
        switch (column){
          case 'name': {
             return user.name; 
          }
          case 'email': {
             return user.email; 
          }
          case 'phone': {
             return user.phone; 
          }
           
        }   
        return user;
     });
   }

   constructor(elementFinders :ElementArrayFinder){
       for(var i in elementFinders){
         this.list.push(new User(elementFinders[i]));
       }
   }

}

export class UserListPage {
 
 constructor() { 
    browser.get("http://localhost:9000/#/exercise2");
  }
  
  getTotalCount(){
    return element.all(by.css('[ng-repeat="row in ctrl.userList"]')).count;
  }
   getTotalCountByRepeater(){
    return element.all(by.repeater('row in ctrl.userList')).count;
  }
  getUserList() : UserList{
    return new UserList(element.all(by.repeater('row in ctrl.userList')));
  }
   
  findUser(user :{name?:string,email?:string,phone?:string}) : User[]{
    return this.getUserList().getUserByObject(user); 
  }
  
  getColumn(column :string){
    return this.getUserList().getByColumn(column);
  }

}