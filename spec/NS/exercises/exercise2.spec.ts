// How we should do it?

// I would say we should do the exercise in two ways. 
// 1. First we should write tests by having everything in the spec file such as the logic required 
//     to interact the angular template or use of protractor specific vocabularies(by.binding, by.model... etc)
//     to locate elements. 

// 2. Then we should create the page object for this test file and move the required logic to interact with
//     Angular template, into it. In this case our spec file will only have the assertion (expect) statements 
//     in the end.

// The minimum scenario we could cover for exercise 2, are as:

// 1. Count the number of users by using the locator element.all(...) 
// 2. Count the number of users by using a by.repeater(...)
// 3. Find Chuck Norris email address in the first row
// 4. Find the email address for John Rambo
// 5. Get the Email columns information
import {UserListPage} from "./pageObject"

describe("User list, ", () => {

    var userListPage : UserListPage;

    beforeAll(()=>{
        userListPage = new UserListPage();
    });
    
    it("total count should be 8",()=>{
        expect(userListPage.getTotalCount()).toBe(8);
    });
    it("by repeater total count should be 8",()=>{
        expect(userListPage.getTotalCountByRepeater()).toBe(8);
    });
    it("email address in first row should chuck@gmail.com",()=>{
        expect(userListPage.getUserList().getUserByIndex(1).email.getText()).toBe("chuck@gmail.com");
    });
    it("email address of John Rambo should be rambo@gmail.com",()=>{
        expect(userListPage.findUser({name:"John Rambo"})[0].email.getText()).toBe("rambo@gmail.com");
    });
    it("email column should have values",()=>{
        expect(userListPage.getColumn("email"))[0].getText().toBe("chuck@gmail.com");
    });

});